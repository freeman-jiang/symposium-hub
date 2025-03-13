import { Button } from "@/components/Button";
import { InfoLink } from "@/components/InfoLink";
import NavigationBar from "@/components/NavigationBar";
import { Presentation, Sparkles, Users, Waypoints } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-black">
      <div className="bg-[#f8f3e3]">
        {/* Top section */}
        <NavigationBar />
        {/* Main content */}
        <div className="max-w-6xl mx-auto mt-8 px-6 pb-12">
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
              <img src="BoothDemos.svg" className="w-full rotate-6" />
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

      {/* Socratica Section */}
      <section className="container mx-auto px-4 py-16">
        <img src="/g1.svg" className="w-full px-4" />
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-1 text-white">
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
      </section>

      {/* Sponsors */}
      <footer className="container mx-auto px-4 py-16 text-center bg-[#f8f3e3]">
        <p className="uppercase text-xs text-zinc-600 mb-8 font-5by7 font-bold tracking-wider">
          This event would not be possible without...
        </p>
        <img
          src="/ShopifyGuy.svg"
          alt="Shopify"
          className="mx-auto h-[6.3rem] w-auto"
        />
        <div className="items-center justify-between md:justify-center md:gap-6 flex flex-row px-2 mt-10">
          <a href="https://vapi.ai/" target="_blank" rel="noopener noreferrer">
            <img
              src="/VAPI.svg"
              className="transition-transform duration-300 hover:scale-105 h-[18px]"
            />
          </a>
          <div className="bg-zinc-400 h-[24px] w-[1px]"></div>
          <a
            href="https://www.velocityincubator.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/velocity.png"
              className="transition-transform duration-300 hover:scale-105 h-[26px] invert-0 brightness-0 mb-1"
            />
          </a>
          <div className="bg-zinc-400 h-[24px] w-[1px]"></div>
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/VercelLogo.svg"
              className="transition-transform duration-300 hover:scale-105 h-[20px] text-black invert-0 brightness-0"
            />
          </a>
        </div>

        <div
          className="mt-12 px-4 py-2.5 border border-[#A4A4A4]/30 bg-white transition-shadow duration-300 font-5by7 font-medium uppercase tracking-wider w-fit mx-auto text-zinc-600"
          style={{
            boxShadow:
              "0px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 7px rgba(0, 0, 0, 0.08);",
          }}
        >
          <p className="text-xs">
            DEV <span className="font-semibold">FREEMAN</span> ✗ DESIGN{" "}
            <span className="font-semibold">AILEEN</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
