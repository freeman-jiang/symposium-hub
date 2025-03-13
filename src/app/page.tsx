import { Button } from "@/components/Button";
import { InfoLink } from "@/components/InfoLink";
import NavigationBar from "@/components/NavigationBar";
import { Presentation, Sparkles, Users, Waypoints } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-black">
      {/* Header section with improved desktop spacing */}
      <div className="bg-[#f8f3e3]">
        <NavigationBar />

        {/* Main content with improved desktop layout */}
        <div className="max-w-7xl mx-auto mt-8 px-6 pb-16 md:pb-24 md:flex md:items-end md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-tiempos tracking-tight font-normal">
              Symposium Hub
            </h1>
            {/* <p className="text-lg mt-2">info, for the love of making ;)</p> */}
            <div className="mt-8 space-y-6 md:space-y-8 font-5by7 font-bold uppercase tracking-wider opacity-90 text-[0.95rem] md:text-base">
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
            </div>
          </div>

          <div className="mt-10 md:mt-0">
            <div className="glassmorphic-light-button border-[1px] border-[#FFFFFF52] bg-zinc-950 gap-3 justify-center px-12 md:px-16 transition-transform">
              <img src="socraticalogo.svg" className="w-[16px] md:w-[20px]" />
              <div className="text-[#F5F1E2] tracking-widest font-5by7 font-bold uppercase text-[11px] sm:text-[16px]">
                Get tickets
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Orbital Animation - improved height for desktop */}
      <section className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full overflow-hidden bg-indigo-700 flex items-center justify-center text-white">
        Graphic
      </section>

      {/* Feature Cards with improved desktop spacing */}
      <section className="container px-4 mx-auto py-16 md:py-24 lg:py-32 text-white">
        <h2 className="font-tiempos text-3xl md:text-4xl lg:text-5xl text-center mb-16 md:mb-24">
          Welcome to the World&apos;s Best Demo Day.
        </h2>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-8 max-w-7xl mx-auto">
            <div className="flex flex-col items-center md:items-start">
              <div className="px-12 md:px-6 lg:px-12 w-full max-w-[300px]">
                <img
                  src="FindPeople.svg"
                  className="w-full -rotate-6 hover:rotate-0 transition-transform"
                />
              </div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Find People
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Users className="size-4" />}
                  text="Find people"
                  className="mt-4"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="px-12 md:px-6 lg:px-12 w-full max-w-[300px]">
                <img
                  src="StageDemos.svg"
                  className="w-full rotate-6 hover:rotate-0 transition-transform"
                />
              </div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Stage Demos
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Sparkles className="size-4" />}
                  text="Stage Demos"
                  className="mt-4"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="px-12 md:px-6 lg:px-12 w-full max-w-[300px]">
                <img
                  src="MatchmakingGraph.svg"
                  className="w-full -rotate-6 hover:rotate-0 transition-transform"
                />
              </div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Matchmaking Graph
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Waypoints className="size-4" />}
                  text="Graph"
                  className="mt-4"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="px-12 md:px-6 lg:px-12 w-full max-w-[300px]">
                <img
                  src="BoothDemos.svg"
                  className="w-full rotate-6 hover:rotate-0 transition-transform"
                />
              </div>
              <div className="mt-5 text-center md:text-left">
                <h3 className="font-tiempos text-2xl md:text-3xl">
                  Booth Demos
                </h3>
                <p className="mt-2 text-zinc-300">Short blurb.</p>
                <Button
                  icon={<Presentation className="size-4" />}
                  text="Booth Demos"
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socratica Section with improved grid for desktop */}
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <img
            src="/g1.svg"
            className="w-full px-4 md:px-0 md:max-w-4xl md:mx-auto"
          />
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-white">
            <InfoLink
              title="Getting to Waterloo"
              description="In-person & Virtual"
              url="https://www.google.com"
            />
            <InfoLink
              title="Accommodation"
              description="Places to stay in Waterloo."
              url="https://www.google.com"
            />
            <InfoLink
              title="Calendar"
              description="Events board"
              url="https://calendar.symposium.com"
            />
            <InfoLink
              title="Local Attractions & Dining"
              description="Things to do and eat in Waterloo."
              url="https://local.symposium.com"
            />
            <InfoLink
              title="About Socratica"
              description="Learn more about Socratica and the Socratica Commons"
              url="https://socratica.org"
            />
            <InfoLink
              title="Our Code of Conduct"
              description="Set of guidelines you'll need to adhere to at our events."
              url="https://symposium.com/code-of-conduct"
            />
          </div>
        </div>
      </section>

      {/* Sponsors with improved desktop spacing */}
      <div className="bg-[#f8f3e3]">
        <footer className="container mx-auto px-4 py-16 md:py-24 text-center">
          <p className="uppercase text-xs md:text-sm text-zinc-600 mb-8 md:mb-12 font-5by7 font-bold tracking-wider">
            This event would not be possible without...
          </p>
          <img
            src="/ShopifyGuy.svg"
            alt="Shopify"
            className="mx-auto h-[6.3rem] md:h-[8rem] w-auto"
          />
          <div className="items-center justify-between md:justify-center md:gap-10 lg:gap-16 flex flex-row px-2 mt-10 md:mt-16">
            <a
              href="https://vapi.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/VAPI.svg"
                className="transition-transform duration-300 group-hover:scale-110 h-[18px] md:h-[22px]"
              />
            </a>
            <div className="bg-zinc-400 h-[24px] w-[1px]"></div>
            <a
              href="https://www.velocityincubator.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/velocity.png"
                className="transition-transform duration-300 group-hover:scale-110 h-[26px] md:h-[32px] invert-0 brightness-0 mb-1"
              />
            </a>
            <div className="bg-zinc-400 h-[24px] w-[1px]"></div>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="/VercelLogo.svg"
                className="transition-transform duration-300 group-hover:scale-110 h-[20px] md:h-[24px] text-black invert-0 brightness-0"
              />
            </a>
          </div>
          <div
            className="mt-12 md:mt-16 px-4 py-2.5 border border-[#A4A4A4]/30 bg-white transition-shadow duration-300 hover:shadow-lg font-5by7 font-medium uppercase tracking-wider w-fit mx-auto text-zinc-600"
            style={{
              boxShadow:
                "0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 7px rgba(0, 0, 0, 0.08);",
            }}
          >
            <p className="text-xs md:text-sm">
              DEV <span className="font-semibold">FREEMAN</span> ✗ DESIGN{" "}
              <span className="font-semibold">AILEEN</span>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
