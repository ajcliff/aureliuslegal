import { toast } from "react-hot-toast";

export default function Practice() {
  const areas = [
    "Corporate Law",
    "Criminal Defense",
    "Family Law",
    "Real Estate",
    "Immigration",
    "Civil Litigation",
  ];

  return (
   <div className="min-h-screen bg-black text-white antialiased selection:bg-yellow-500/30">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Practice Areas
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {areas.map((a, i) => (
          <div
            key={i}
            className="border border-white/10 bg-white/5 p-6 rounded-2xl hover:border-yellow-500/40 transition"
            onClick={() => toast.success(`Selected: ${a}`)}
          >
            <h2 className="text-xl font-semibold text-yellow-500">{a}</h2>
            <p className="text-gray-400 mt-2 text-sm">
              Strategic legal support in {a.toLowerCase()}.
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}