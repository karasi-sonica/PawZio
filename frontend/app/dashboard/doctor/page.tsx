import Navbar from "@/components/layout/Navbar";

export default function DoctorDashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">
          Doctor Dashboard 🩺
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Today’s Appointments" value="12" />
          <StatCard title="Pending Reviews" value="5" />
          <StatCard title="Total Patients" value="148" />
        </div>

        {/* APPOINTMENTS */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Appointments
          </h2>

          <table className="w-full text-sm">
            <thead className="text-slate-500 border-b">
              <tr>
                <th className="py-3 text-left">Pet</th>
                <th className="text-left">Owner</th>
                <th className="text-left">Time</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <AppointmentRow pet="Buddy" owner="Ananya" time="10:30 AM" />
              <AppointmentRow pet="Milo" owner="Rahul" time="11:15 AM" />
              <AppointmentRow pet="Luna" owner="Kiran" time="1:00 PM" />
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

/* --- Small components --- */

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

function AppointmentRow({
  pet,
  owner,
  time,
}: {
  pet: string;
  owner: string;
  time: string;
}) {
  return (
    <tr className="border-b last:border-0">
      <td className="py-3 font-medium">{pet}</td>
      <td>{owner}</td>
      <td>{time}</td>
      <td>
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs">
          Confirmed
        </span>
      </td>
    </tr>
  );
}
