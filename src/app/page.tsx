import FeatureCard from "@/components/feature-card";
import InfoSection from "@/components/info-section";
import OrbitalAnimation from "@/components/orbital-animation";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-serif">Symposium Hub</h1>
          <p className="text-sm mt-1">info, for the love of making :)</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="uppercase text-xs font-medium">March 19, 2023</p>
              <p className="uppercase text-xs font-medium">
                Waterloo Rec Center
              </p>
            </div>
            <div>
              <p className="uppercase text-xs font-medium">
                Waterloo Memorial Recreation Complex
              </p>
              <p className="uppercase text-xs font-medium">
                In-person & Virtual
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-white/20"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-white/20"
          >
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-white/20"
          >
            <span className="sr-only">Settings</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-settings"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-none border-white/20"
          >
            <span className="sr-only">Grid</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-layout-grid"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 flex justify-end mt-4">
        <Button className="bg-black text-white border border-white hover:bg-white hover:text-black rounded-none px-6">
          GET TICKETS
        </Button>
      </div>

      {/* Hero Section with Orbital Animation */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <OrbitalAnimation />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Find People"
            description="Short blurb."
            color="blue"
            icon="users"
            contactText="If you have any additional questions please email us. If you need any more information on the day of, please text or call +1 (519) 572-4047."
          />
          <FeatureCard
            title="Stage Demos"
            description="If you have any additional questions please email us. If you need any more information on the day of, please text or call +1 (519) 572-4047."
            color="green"
            icon="presentation"
            contactText="If you have any additional questions please email us. If you need any more information on the day of, please text or call +1 (519) 572-4047."
          />
          <FeatureCard
            title="Matchmaking Graph"
            description="If you have any additional questions please email us. If you need any more information on the day of, please text or call +1 (519) 572-4047."
            color="orange"
            icon="network"
            contactText="If you have any additional questions please email us. If you need any more information on the day of, please text or call +1 (519) 572-4047."
          />
          <FeatureCard
            title="Booth Demos"
            description="If you have any additional questions please email us. If you need any more information on the day of, please text or call +1 (519) 572-4047."
            color="red"
            icon="presentation-play"
            contactText="If you have any additional questions please email us. If you need any more information on the day of, please text or call +1 (519) 572-4047."
          />
        </div>
      </section>

      {/* Feature Buttons */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Button className="bg-black/50 backdrop-blur-sm border border-white/10 text-white rounded-none py-6 flex items-center gap-2 hover:bg-black/70 hover:border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            FIND PEOPLE
          </Button>
          <Button className="bg-black/50 backdrop-blur-sm border border-white/10 text-white rounded-none py-6 flex items-center gap-2 hover:bg-black/70 hover:border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-presentation"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>
            STAGE DEMOS
          </Button>
          <Button className="bg-black/50 backdrop-blur-sm border border-white/10 text-white rounded-none py-6 flex items-center gap-2 hover:bg-black/70 hover:border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-network"
            >
              <rect x="16" y="16" width="6" height="6" rx="1" />
              <rect x="2" y="16" width="6" height="6" rx="1" />
              <rect x="9" y="2" width="6" height="6" rx="1" />
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              <path d="M12 12V8" />
            </svg>
            MATCHMAKING GRAPH
          </Button>
          <Button className="bg-black/50 backdrop-blur-sm border border-white/10 text-white rounded-none py-6 flex items-center gap-2 hover:bg-black/70 hover:border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-presentation"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>
            BOOTH DEMOS
          </Button>
        </div>
      </section>

      {/* Socratica Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-16">
          <h2 className="text-8xl font-serif">Socratica</h2>
          <div className="ml-4">
            <Image
              src="/placeholder.svg?height=100&width=100"
              alt="Burrito icon"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfoSection
            title="GETTING TO WATERLOO"
            description="IN-PERSON & VIRTUAL"
            hasArrow={true}
          />
          <InfoSection
            title="ACCOMMODATION"
            description="SOME HOTELS NEAR WATERLOO"
            hasArrow={true}
          />
          <InfoSection
            title="CALENDAR"
            description="EVENTS BOARD"
            hasArrow={true}
          />
          <InfoSection
            title="LOCAL ATTRACTIONS & DINING"
            description="THINGS TO DO COURTESY OF DRSCH"
            hasArrow={true}
          />
          <InfoSection
            title="ABOUT SOCRATICA"
            description="LEARN MORE ABOUT SOCRATICA AND THE SOCRATICA COMMONS"
            hasArrow={true}
          />
          <InfoSection
            title="OUR CODE OF CONDUCT"
            description="SET OF GUIDELINES YOU'LL NEED TO ADHERE TO AT OUR EVENTS"
            hasArrow={true}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-16 border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="uppercase text-sm font-medium mb-4">Navigation</h3>
          </div>
          <div>
            <h3 className="uppercase text-sm font-medium mb-4">Questions?</h3>
            <p className="text-sm text-gray-400 mb-4">
              If you have any additional questions please{" "}
              <a href="mailto:email@example.com" className="underline">
                email us
              </a>
              . If you need any more urgent information on the day of, please
              text or call +1 (519) 572-4047.
            </p>
          </div>
          <div>
            <h3 className="uppercase text-sm font-medium mb-4">Discord</h3>
            <p className="text-sm text-gray-400 mb-4">
              Looking to meet other attendees during the week? Want to know what
              events happening throughout the week without checking the
              calendar? Join the Symposium Discord!
            </p>
          </div>
        </div>
      </footer>

      {/* Sponsors */}
      <section className="container mx-auto px-4 py-16 text-center">
        <p className="uppercase text-xs text-gray-400 mb-8">
          This event would not be possible without...
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12">
          <Image
            src="/placeholder.svg?height=60&width=150"
            alt="Shopify"
            width={150}
            height={60}
          />
          <Image
            src="/placeholder.svg?height=40&width=100"
            alt="Sponsor"
            width={100}
            height={40}
          />
          <Image
            src="/placeholder.svg?height=40&width=100"
            alt="Vercel"
            width={100}
            height={40}
          />
        </div>
        <p className="text-xs text-gray-400 mt-12">
          DESIGN HELEN + DEV FREEDOM
        </p>
      </section>
    </main>
  );
}
