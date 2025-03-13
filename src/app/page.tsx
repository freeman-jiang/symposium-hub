import { Button } from "@/components/Button";
import NavigationBar from "@/components/NavigationBar";
import { Presentation, Sparkles, Users, Waypoints } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3e3] text-black md:p-8">
      {/* Top section */}
      <NavigationBar />

      {/* Main content */}
      <div className="max-w-6xl mx-auto mt-8 px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-tiempos tracking-tight font-normal">
          Symposium Hub
        </h1>
        {/* <p className="text-lg mt-2">info, for the love of making ;)</p> */}

        <div className="mt-8 space-y-12 font-5by7 font-bold uppercase tracking-wider opacity-90 text-sm">
          <div className="uppercase">
            MARCH 19, 2025
            <br />
            <div className="text-zinc-500">WATERLOO REC CENTER</div>
          </div>

          <div className="">
            WATERLOO MEMORIAL RECREATION COMPLEX
            <br />
            <div className="text-zinc-500">IN-PERSON & VIRTUAL</div>
          </div>

          <div
            id="buttons"
            className="w-full items-center flex flex-row gap-[16px]"
          >
            <div className="glassmorphic-button border-[1px] border-[#FFFFFF52] bg-zinc-950 gap-3 justify-center px-12">
              <img src="socraticalogo.svg" className="w-[16px]" />
              <div className="text-[#F5F1E2] tracking-widest font-5by7 font-bold uppercase text-[11px] sm:text-[16px]">
                Get tickets
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Orbital Animation */}
      <section className="relative h-[500px] w-full overflow-hidden bg-indigo-700 flex items-center justify-center text-white">
        Graphic
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto py-16 bg-zinc-950 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-4">
          <div>
            <div className="px-12">
              <img src="FindPeople.svg" className="w-full -rotate-6" />
            </div>
            <div className="mt-5">
              <h3 className="font-tiempos text-2xl">Find People</h3>
              <p>Short blurb.</p>
              <Button
                icon={<Users className="size-4" />}
                text="Find people"
                className="mt-4"
              />
            </div>
          </div>
          <div>
            <div className="px-12">
              <img src="StageDemos.svg" className="w-full rotate-6" />
            </div>
            <div className="mt-5">
              <h3 className="font-tiempos text-2xl">Stage Demos</h3>
              <p>Short blurb.</p>
              <Button
                icon={<Sparkles className="size-4" />}
                text="Stage Demos"
                className="mt-4"
              />
            </div>
          </div>
          <div>
            <div className="px-12">
              <img src="MatchmakingGraph.svg" className="w-full -rotate-6" />
            </div>
            <div className="mt-5">
              <h3 className="font-tiempos text-2xl">Matchmaking Graph</h3>
              <p>Short blurb.</p>
              <Button
                icon={<Waypoints className="size-4" />}
                text="Matchmaking Graph"
                className="mt-4"
              />
            </div>
          </div>
          <div>
            <div className="px-12">
              <img src="BoothDemos.svg" className="w-full -rotate-6" />
            </div>
            <div className="mt-5">
              <h3 className="font-tiempos text-2xl">Booth Demos</h3>
              <p>Short blurb.</p>
              <Button
                icon={<Presentation className="size-4" />}
                text="Booth Demos"
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Buttons */}
      {/* <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureButton
            icon={
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
            }
          >
            FIND PEOPLE
          </FeatureButton>
          <FeatureButton
            icon={
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
            }
          >
            STAGE DEMOS
          </FeatureButton>
          <FeatureButton
            icon={
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
            }
          >
            MATCHMAKING GRAPH
          </FeatureButton>
          <FeatureButton
            icon={
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
            }
          >
            BOOTH DEMOS
          </FeatureButton>
        </div>
      </section> */}

      {/* Socratica Section */}
      {/* <section className="container mx-auto px-4 py-16">
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
      </section> */}

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
