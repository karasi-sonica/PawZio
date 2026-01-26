import Navbar from "../components/layout/Navbar";
import PawCard from "../components/cards/PawCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-12 py-10 max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <section className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Smart care for pets,
            <span className="text-rose-500"> made with love 🐾</span>
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            PawzIO helps pet owners manage health, appointments, and AI-powered
            care — all in one calm, friendly platform.
          </p>
        </section>

        {/* FEATURE CARDS */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PawCard
              title="Book a Vet"
              description="Schedule appointments with trusted veterinarians in seconds."
              accent="rose"
              href="/vet/doctors"
            />

            <PawCard
              title="AI Pet Assistant"
              description="Instant guidance based on your pet’s symptoms and behavior."
              accent="emerald"
              href="/dashboard/owner"
            />

            <PawCard
              title="Pet Health Records"
              description="All vaccinations, visits, and reports stored securely."
              accent="blue"
              href="/dashboard/owner"
            />
          </div>
        </section>
      </main>
    </>
  );
}
