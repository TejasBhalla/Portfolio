import GridOverlay from "./components/GridOverlay";

export default function Page() {
  return (
    <>
      {/* Grid overlay */}
      <GridOverlay />
      {/* Your actual content */}
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          My Portfolio
        </h1>
      </section>
    </>
  );
}
