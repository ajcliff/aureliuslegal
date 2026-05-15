export default function Attorneys() {
  const lawyers = [
    "Jonathan Aurelius",
    "Sophia Bennett",
    "Michael Harrington",
    "David Kimani",
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-yellow-500/30">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Legal Team
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {lawyers.map((l, i) => (
          <div
            key={i}
            className="border border-white/10 bg-white/5 p-6 rounded-2xl"
          >
            <h2 className="text-xl text-yellow-500 font-semibold">
              {l}
            </h2>

            <p className="text-gray-400 mt-2">
              Senior attorney specializing in high-stakes litigation and advisory work.
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}