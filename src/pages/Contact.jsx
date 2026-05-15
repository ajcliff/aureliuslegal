import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }

    // simulate backend
    const existing = JSON.parse(localStorage.getItem("cases") || "[]");
    localStorage.setItem("cases", JSON.stringify([...existing, form]));

    toast.success("Consultation request submitted!");

    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-yellow-500/30">

      <h1 className="text-4xl font-bold text-center mb-10">
        Book Consultation
      </h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col gap-4">

        <input
          className="bg-white/5 border border-white/10 p-4 rounded-xl"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="bg-white/5 border border-white/10 p-4 rounded-xl"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <textarea
          className="bg-white/5 border border-white/10 p-4 rounded-xl h-40"
          placeholder="Case description"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />

        <button className="bg-yellow-500 text-black py-4 rounded-full font-bold hover:scale-105 transition">
          Submit
        </button>

      </form>

    </div>
  );
}