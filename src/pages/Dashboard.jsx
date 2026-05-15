import { useEffect, useState } from "react";

export default function Dashboard() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cases") || "[]");
    setCases(data);
  }, []);

  return (
   <div className="min-h-screen bg-black text-white antialiased selection:bg-yellow-500/30">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Case Dashboard
      </h1>

      {cases.length === 0 ? (
        <p className="text-gray-500 text-center">No cases submitted yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">

          {cases.map((c, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 p-6 rounded-2xl"
            >
              <h2 className="text-yellow-500 font-bold">{c.name}</h2>
              <p className="text-gray-400 mt-1">{c.email}</p>
              <p className="mt-4 text-sm text-gray-300">
                {c.message}
              </p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}