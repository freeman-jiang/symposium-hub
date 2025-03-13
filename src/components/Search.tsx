"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { titleCase } from "@/lib/utils";
import Fuse from "fuse.js";
import { useHotkeys } from "react-hotkeys-hook";
import { motion } from "motion/react";
import { useEffect, useState, useRef, useMemo } from "react";
import { 
  Search as SearchIcon, 
  Shuffle, 
  X, 
  Bot,
  Palette, 
  Brain, 
  GraduationCap, 
  DollarSign, 
  Gamepad2,
  Code
} from "lucide-react";

// Import graphData from the public directory
import graphData from "../../public/graphData.json";

// Define interfaces for the data structure
interface NodeData {
  name: string;
  major: string;
  response: string;
  topMatch: string;
}

interface Node {
  id: string;
  data: NodeData;
}

interface Link {
  source: string;
  target: string;
  value: number;
}

interface CustomNode extends Node {
  links: Link[];
  data: NodeData & {
    originalResponse: string;
  };
}

// Create hashmap of id -> node and attach links to each node
const nodeMap = new Map<string, CustomNode>();
graphData.nodes.forEach((node: any) => {
  nodeMap.set(node.id, {
    ...node,
    data: {
      ...node.data,
      originalResponse: "",
    },
    links: [],
  });
});

graphData.links.forEach((link: any) => {
  const sourceNode = nodeMap.get(link.source);
  const targetNode = nodeMap.get(link.target);

  if (sourceNode) {
    sourceNode.links.push(link);
  }

  if (targetNode) {
    targetNode.links.push(link);
  }
});

// Generate random pastel colors for each major
const majorColors = new Map<string, string>();
const pastelColors = [
  "bg-pink-100 border-pink-200 text-pink-800",
  "bg-blue-100 border-blue-200 text-blue-800",
  "bg-green-100 border-green-200 text-green-800",
  "bg-purple-100 border-purple-200 text-purple-800",
  "bg-yellow-100 border-yellow-200 text-yellow-800",
  "bg-indigo-100 border-indigo-200 text-indigo-800",
  "bg-red-100 border-red-200 text-red-800",
  "bg-teal-100 border-teal-200 text-teal-800",
  "bg-orange-100 border-orange-200 text-orange-800",
  "bg-cyan-100 border-cyan-200 text-cyan-800",
];

// Assign colors to majors
graphData.nodes.forEach((node: any) => {
  const major = node.data.major === "N/A" ? "Other" : node.data.major;
  if (!majorColors.has(major)) {
    const colorIndex = majorColors.size % pastelColors.length;
    majorColors.set(major, pastelColors[colorIndex]);
  }
});

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<CustomNode[]>([]);
  const [allPeople, setAllPeople] = useState<CustomNode[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPersonIndex, setSelectedPersonIndex] = useState<number | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 40 });
  const [isShuffled, setIsShuffled] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isSearchSticky, setIsSearchSticky] = useState(false);
  
  // Define interest tags with icons
  const interestTags = [
    { 
      name: "All", 
      icon: <SearchIcon className="h-4 w-4" />
    },
    { 
      name: "Robotics", 
      icon: <Bot className="h-4 w-4" />
    },
    { 
      name: "Art", 
      icon: <Palette className="h-4 w-4" />
    },
    { 
      name: "AI", 
      icon: <Brain className="h-4 w-4" />
    },
    { 
      name: "Education", 
      icon: <GraduationCap className="h-4 w-4" />
    },
    { 
      name: "Finance", 
      icon: <DollarSign className="h-4 w-4" />
    },
    { 
      name: "Gaming", 
      icon: <Gamepad2 className="h-4 w-4" />
    },
    { 
      name: "Programming", 
      icon: <Code className="h-4 w-4" />
    },
  ];
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to make search sticky
  useEffect(() => {
    const handleScroll = () => {
      if (!searchContainerRef.current) return;
      
      const { top } = searchContainerRef.current.getBoundingClientRect();
      if (top <= 0 && !isSearchSticky) {
        setIsSearchSticky(true);
      } else if (top > 0 && isSearchSticky) {
        setIsSearchSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearchSticky]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    // Reset visible range when search changes
    setVisibleRange({ start: 0, end: 40 });
    // Reset selection when search changes
    setSelectedPersonIndex(null);
    // Reset tag selection when searching
    setSelectedTag(null);
  };

  // Handle tag selection
  const handleTagSelect = (tagName: string) => {
    if (tagName === "All" || tagName === selectedTag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tagName);
      // In the future, this would filter by tag
    }
    // Reset visible range when tag changes
    setVisibleRange({ start: 0, end: 40 });
  };

  const fuseOptions = {
    keys: ["data.name", "data.response", "data.major"],
    includeScore: true,
    isCaseSensitive: false,
    findAllMatches: true,
    threshold: 0.4, // adjust this to be more lenient with search
  };

  const fuse = useMemo(() => new Fuse(graphData.nodes, fuseOptions), []);

  useEffect(() => {
    // Initialize all people on component mount
    setIsLoading(true);
    
    // Simulate loading for a smoother experience
    setTimeout(() => {
      // Get all people and shuffle them by default
      const initialPeople = graphData.nodes
        .map((node: any) => ({
          ...node,
          data: {
            ...node.data,
            originalResponse: "",
          },
          links: [],
        }))
        .sort(() => Math.random() - 0.5); // Shuffle the array
      
      setAllPeople(initialPeople);
      setIsLoading(false);
    }, 300);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      // If search is empty, show all people
      setSearchResults([]);
    } else {
      const results = fuse.search(searchTerm).map((result: any) => ({
        ...result.item,
        data: {
          ...result.item.data,
          originalResponse: "",
        },
      }));
      setSearchResults(results);
    }
  }, [searchTerm, fuse]);

  // Handle scroll to load more items
  useEffect(() => {
    const handleScroll = () => {
      if (!gridRef.current) return;
      
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const bottomThreshold = 300; // px from bottom
      
      if (scrollHeight - scrollTop - clientHeight < bottomThreshold) {
        const displayedPeople = searchTerm.trim() === "" ? allPeople : searchResults;
        if (visibleRange.end < displayedPeople.length) {
          setVisibleRange(prev => ({
            start: prev.start,
            end: Math.min(prev.end + 20, displayedPeople.length)
          }));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleRange, allPeople, searchResults, searchTerm]);

  // Focus search with keyboard shortcut
  useHotkeys("ctrl+k, cmd+k", (e: KeyboardEvent) => {
    e.preventDefault();
    searchInputRef.current?.focus();
  });

  // Navigate through grid with arrow keys
  useHotkeys("down", () => {
    const displayedPeople = searchTerm.trim() === "" ? allPeople : searchResults;
    if (displayedPeople.length === 0) return;
    
    if (selectedPersonIndex === null) {
      setSelectedPersonIndex(0);
    } else {
      const nextIndex = Math.min(selectedPersonIndex + 4, displayedPeople.length - 1);
      setSelectedPersonIndex(nextIndex);
      
      // Ensure the selected item is in view
      ensureInView(nextIndex);
    }
  }, { preventDefault: true });

  useHotkeys("up", () => {
    if (selectedPersonIndex === null) return;
    const nextIndex = Math.max(selectedPersonIndex - 4, 0);
    setSelectedPersonIndex(nextIndex);
    
    // Ensure the selected item is in view
    ensureInView(nextIndex);
  }, { preventDefault: true });

  useHotkeys("right", () => {
    const displayedPeople = searchTerm.trim() === "" ? allPeople : searchResults;
    if (displayedPeople.length === 0) return;
    
    if (selectedPersonIndex === null) {
      setSelectedPersonIndex(0);
    } else {
      const nextIndex = Math.min(selectedPersonIndex + 1, displayedPeople.length - 1);
      setSelectedPersonIndex(nextIndex);
      
      // Ensure the selected item is in view
      ensureInView(nextIndex);
    }
  }, { preventDefault: true });

  useHotkeys("left", () => {
    if (selectedPersonIndex === null) return;
    const nextIndex = Math.max(selectedPersonIndex - 1, 0);
    setSelectedPersonIndex(nextIndex);
    
    // Ensure the selected item is in view
    ensureInView(nextIndex);
  }, { preventDefault: true });

  useHotkeys("enter", () => {
    if (selectedPersonIndex !== null) {
      setIsDialogOpen(true);
    }
  }, { preventDefault: true });

  useHotkeys("escape", () => {
    if (isDialogOpen) {
      setIsDialogOpen(false);
    } else {
      setSelectedPersonIndex(null);
    }
  }, { preventDefault: true });

  // Ensure selected item is in view
  const ensureInView = (index: number) => {
    if (index < visibleRange.start) {
      setVisibleRange({
        start: Math.max(0, index - 10),
        end: Math.max(40, index + 30)
      });
    } else if (index >= visibleRange.end) {
      setVisibleRange({
        start: Math.max(0, index - 30),
        end: index + 10
      });
    }
  };

  // Determine which list of people to display
  const displayedPeople = searchTerm.trim() === "" ? allPeople : searchResults;
  
  // Get visible people for rendering
  const visiblePeople = useMemo(() => {
    return displayedPeople.slice(visibleRange.start, visibleRange.end);
  }, [displayedPeople, visibleRange]);

  // Function to shuffle people
  const shufflePeople = () => {
    setAllPeople(prev => [...prev].sort(() => Math.random() - 0.5));
    setVisibleRange({ start: 0, end: 40 });
    setIsShuffled(true);
  };

  // Function to truncate long program names
  const formatMajor = (major: string) => {
    if (major.length > 20) {
      return major.substring(0, 18) + '...';
    }
    return major;
  };

  return (
    <div className="font-sans max-w-6xl w-full mx-auto">
      <div ref={searchContainerRef}>
        <div className={`${isSearchSticky ? 'fixed top-0 left-0 right-0 z-20 bg-[#f8f3e3] py-4 px-6 shadow-md' : ''}`}>
          <div className={`relative max-w-6xl mx-auto ${isSearchSticky ? '' : ''}`}>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <input
                ref={searchInputRef}
                className="text-lg mt-4 w-full pl-12 py-3 rounded-full border-2 border-zinc-300 focus:border-zinc-500 focus:ring-2 focus:ring-zinc-200 transition-all bg-white"
                placeholder="Search by name, response, or major (Ctrl+K)"
                onChange={handleSearch}
                value={searchTerm}
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-zinc-400">
                <SearchIcon className="h-5 w-5" />
              </div>
            </motion.div>
            
            {/* Interest Tags */}
            <motion.div
              className="mt-4 overflow-x-auto pb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex flex-wrap gap-2 md:gap-3">
                {interestTags.map((tag, index) => (
                  <motion.button
                    key={tag.name}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedTag === tag.name
                        ? "bg-[#f8f3e3] text-zinc-800 border border-zinc-300"
                        : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50"
                    }`}
                    onClick={() => handleTagSelect(tag.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (index * 0.05),
                      ease: "easeOut"
                    }}
                  >
                    <span className={`${selectedTag === tag.name ? "text-zinc-800" : "text-zinc-500"}`}>
                      {tag.icon}
                    </span>
                    <span>{tag.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Add padding when search is sticky */}
      {isSearchSticky && <div className="h-32"></div>}
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <motion.div 
            className="h-16 w-16 rounded-full border-t-4 border-b-4 border-zinc-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ) : (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <div className="flex justify-between items-center mb-4">
            <motion.div 
              className="text-sm text-zinc-600 font-medium bg-[#f8f3e3] px-3 py-1 rounded-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {searchTerm.trim() !== "" ? (
                <span>Found {displayedPeople.length} {displayedPeople.length === 1 ? 'person' : 'people'} matching "{searchTerm}"</span>
              ) : selectedTag ? (
                <span>Showing {visiblePeople.length} of {displayedPeople.length} people interested in {selectedTag}</span>
              ) : (
                <span>
                  Showing {visiblePeople.length} of {displayedPeople.length} people
                </span>
              )}
            </motion.div>
            
            <motion.button
              className="text-sm flex items-center gap-1 bg-[#f8f3e3] hover:bg-[#f0e9d6] text-zinc-700 px-3 py-1 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shufflePeople}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            >
              <Shuffle className="h-3.5 w-3.5" />
              Shuffle
            </motion.button>
          </div>
          
          {/* People Grid */}
          <div 
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {visiblePeople.map((item, index) => {
              const actualIndex = index + visibleRange.start;
              const isSelected = selectedPersonIndex === actualIndex;
              
              // Get major and color
              const major = item.data.major === "N/A" ? "Other" : titleCase(item.data.major || "");
              const majorColor = majorColors.get(major) || majorColors.get("Other") || pastelColors[0];
              
              // Get node from map to access links
              const node = nodeMap.get(item.id);
              
              return (
                <Dialog key={`entry-${item.id}`} open={isDialogOpen && isSelected} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <div
                      className="h-full flex"
                      onClick={() => {
                        setSelectedPersonIndex(actualIndex);
                        setIsDialogOpen(true);
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          scale: isSelected ? 1.02 : 1
                        }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.2 + (index * 0.05),
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        whileHover={{ 
                          scale: 1.03,
                          transition: { duration: 0.2 } 
                        }}
                        style={{
                          boxShadow: "0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 7px rgba(0, 0, 0, 0.08)"
                        }}
                        className={`h-full w-full p-4 rounded-xl border ${
                          isSelected 
                            ? "border-zinc-400 ring-2 ring-zinc-300 bg-white" 
                            : "border-zinc-200 bg-white hover:border-zinc-300 transition-all"
                        } cursor-pointer`}
                      >
                        <div className="flex flex-col h-full">
                          <div>
                            <h3 className="font-tiempos text-lg font-medium text-zinc-900">
                              {item.data.name}
                            </h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${majorColor} inline-block mt-1 max-w-full truncate`} title={major}>
                              {formatMajor(major)}
                            </span>
                          </div>
                          <div className="mt-2 flex-grow">
                            <p className="text-sm text-zinc-600 line-clamp-4">
                              {item.data.response}
                            </p>
                          </div>
                          <div className="mt-3 pt-2 border-t border-zinc-100 text-xs text-zinc-400">
                            {node?.links.length || 0} connections
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="font-tiempos text-2xl">
                        {item.data.name}
                      </DialogTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${majorColor} inline-block`}>
                          {major}
                        </span>
                      </div>
                    </DialogHeader>
                    
                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-zinc-500 mb-1">Response:</h3>
                      <p className="text-zinc-700">
                        {item.data.response}
                      </p>
                    </div>
                    
                    {node && node.links.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-zinc-500 mb-3">
                          All Connections ({node.links.length}):
                        </h3>
                        <div className="max-h-[300px] overflow-y-auto pr-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {node.links.map((link, linkIndex) => {
                              const connectedNodeId = link.source === item.id ? link.target : link.source;
                              const connectedNode = nodeMap.get(connectedNodeId);
                              
                              if (!connectedNode) return null;
                              
                              const connectedMajor = connectedNode.data.major === "N/A" ? "Other" : titleCase(connectedNode.data.major || "");
                              const connectedColor = majorColors.get(connectedMajor) || majorColors.get("Other") || pastelColors[0];
                              
                              return (
                                <motion.div
                                  key={`connection-${connectedNode.id}-${item.id}-${linkIndex}`}
                                  className="p-3 bg-opacity-30 rounded-lg border border-zinc-200"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ 
                                    duration: 0.3, 
                                    delay: 0.1 + (Math.min(linkIndex, 5) * 0.1),
                                    ease: "easeOut"
                                  }}
                                >
                                  <div className="flex flex-col">
                                    <h4 className="font-medium text-zinc-900 truncate">
                                      {connectedNode.data.name}
                                    </h4>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${connectedColor} inline-block w-fit mt-1 max-w-full truncate`} title={connectedMajor}>
                                      {formatMajor(connectedMajor)}
                                    </span>
                                  </div>
                                  <div className="mt-1">
                                    <p className="text-sm text-zinc-600 line-clamp-1">
                                      {connectedNode.data.response}
                                    </p>
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
          
          {/* Load more indicator */}
          {visibleRange.end < displayedPeople.length && (
            <div className="flex justify-center mt-8">
              <motion.button
                className="px-4 py-2 bg-[#f8f3e3] hover:bg-[#f0e9d6] text-zinc-700 rounded-full text-sm font-medium"
                onClick={() => setVisibleRange(prev => ({
                  start: prev.start,
                  end: Math.min(prev.end + 20, displayedPeople.length)
                }))}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Load more
              </motion.button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}; 