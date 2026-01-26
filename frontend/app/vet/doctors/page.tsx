import Navbar from "@/components/layout/Navbar";
import DoctorCard from "@/components/cards/DoctorCard";

export default function DoctorsPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">
          Verified Veterinarians 🩺
        </h1>

        <p className="text-slate-600 mb-8">
          Choose a trusted veterinarian and book an appointment easily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DoctorCard
            id="1"
            name="Dr. Aditi Sharma"
            specialization="Small Animal Specialist"
            experience="8 years experience"
          />

          <DoctorCard
            id="2"
            name="Dr. Rahul Verma"
            specialization="Veterinary Surgeon"
            experience="12 years experience"
          />

          <DoctorCard
            id="3"
            name="Dr. Neha Iyer"
            specialization="Pet Nutrition & Care"
            experience="6 years experience"
          />
        </div>
      </main>
    </>
  );
}
