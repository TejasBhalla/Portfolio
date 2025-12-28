import GridOverlay from "./components/GridOverlay";

export default function Page() {
  return (
    <main className=" min-h-screen bg-black text-white overflow-hidden">
      {/* Grid overlay (background) */}
      <GridOverlay />

      {/* HERO SECTION */}
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          My Portfolio
        </h1>
      </section>

      {/* PROJECTS SECTION (ABOVE GRID) */}
      <section className="relative min-h-screen bg-[#18181b] flex items-center justify-center">
        <h1 className="text-3xl font-bold text-black">
          Projects
        </h1>
      </section>
    </main>
  );
}
