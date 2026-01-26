import Navbar from "@/components/layout/Navbar";

export default function OwnerDashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">
          My Pets 🐾
        </h1>

        {/* PET CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <PetCard name="Buddy" type="Golden Retriever" />
          <PetCard name="Luna" type="Persian Cat" />
        </div>

        {/* PET SERVICES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <OwnerFeature title="Medical Reports" />
          <OwnerFeature title="Live Camera Access" />
          <OwnerFeature title="AI Care Suggestions" />
        </div>
      </main>
    </>
  );
}

function PetCard({ name, type }: { name: string; type: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-slate-500 text-sm">{type}</p>
    </div>
  );
}

function OwnerFeature({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">
        Access all information related to your pet easily.
      </p>
    </div>
  );
}
