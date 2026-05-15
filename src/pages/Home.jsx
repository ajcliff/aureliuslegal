import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const attorneys = [
    {
      name: "Jonathan Aurelius",
      role: "Senior Corporate Attorney",
    },
    {
      name: "Sophia Bennett",
      role: "Criminal Defense Specialist",
    },
    {
      name: "Michael Harrington",
      role: "Family & Civil Litigation",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-yellow-500/30">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[120px] rounded-full -translate-x-1/2"></div>

      {/* NAVBAR */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6 border-b border-white/10">

        <h1 className="text-xl md:text-2xl font-bold tracking-[0.3em]">
          AURELIUS LEGAL
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-300">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/practice" className="hover:text-yellow-500">Practice</Link>
          <Link to="/attorneys" className="hover:text-yellow-500">Attorneys</Link>
          <Link to="/contact" className="hover:text-yellow-500">Contact</Link>
        </div>

        <div className="flex items-center gap-4">

          <button className="hidden md:block border border-yellow-500 text-yellow-500 px-5 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition">
            Consultation
          </button>

          {/* MOBILE BUTTON */}
<button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:text-black transition"
>
  {menuOpen ? "Close" : "Menu"}
</button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-6 text-center z-20">
          <Link to="/">Home</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/attorneys">Attorneys</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28">

        <p className="text-yellow-500 uppercase tracking-[0.4em] text-sm mb-6">
          Elite Legal Representation
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold max-w-5xl leading-tight"
        >
          Defending Rights. <br />
          Delivering Justice.
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mt-8 text-base md:text-lg">
          Aurelius Legal provides strategic legal solutions with precision,
          integrity, and excellence.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-10">

          <button className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Book Consultation
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>

        </div>

      </section>

      {/* STATS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 py-16">

        <div className="border border-white/10 bg-white/5 p-8 rounded-2xl text-center">
          <h3 className="text-4xl text-yellow-500 font-bold">500+</h3>
          <p className="text-gray-400 mt-2">Cases Won</p>
        </div>

        <div className="border border-white/10 bg-white/5 p-8 rounded-2xl text-center">
          <h3 className="text-4xl text-yellow-500 font-bold">98%</h3>
          <p className="text-gray-400 mt-2">Success Rate</p>
        </div>

        <div className="border border-white/10 bg-white/5 p-8 rounded-2xl text-center">
          <h3 className="text-4xl text-yellow-500 font-bold">15+</h3>
          <p className="text-gray-400 mt-2">Years Experience</p>
        </div>

      </section>

      {/* ATTORNEYS */}
      <section className="px-6 md:px-10 py-20">

        <div className="text-center mb-12">
          <p className="text-yellow-500 uppercase tracking-[0.3em] text-sm">
            Our Attorneys
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Legal Experts You Can Trust
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {attorneys.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="border border-white/10 bg-white/5 rounded-2xl p-6 hover:border-yellow-500/40 transition"
            >

              <div className="w-20 h-20 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-500 text-xl font-bold mb-4">
                {a.name[0]}
              </div>

              <h3 className="text-xl font-semibold">{a.name}</h3>
              <p className="text-yellow-500 mt-1">{a.role}</p>

              <p className="text-gray-400 mt-4 text-sm">
                Dedicated to delivering justice with precision and excellence.
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 md:px-10 py-12 mt-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-xl font-bold tracking-[0.3em]">
              AURELIUS LEGAL
            </h2>
            <p className="text-gray-400 mt-3">
              Elite legal representation delivering justice with precision.
            </p>
          </div>

          <div className="text-gray-400 space-y-2">
            <p className="text-yellow-500">Quick Links</p>
            <p>Home</p>
            <p>Practice</p>
            <p>Attorneys</p>
            <p>Contact</p>
          </div>

          <div className="text-gray-400 space-y-2">
            <p className="text-yellow-500">Contact</p>
            <p>Nairobi, Kenya</p>
            <p>+254 703366475</p>
            <p>contact@aureliuslegal.com</p>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-10 text-sm">
          © 2026 Aurelius Legal
        </p>

      </footer>

    </div>
  );
}