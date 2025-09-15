import { useState } from "react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({ name: "", email: "", date: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Submitted! Check your email for confirmation.");
        setFormData({ name: "", email: "", date: "" });
      } else {
        setStatus(`❌ ${data.message || "Something went wrong, please try again."}`);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("❌ Network error, please check your connection and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded">
        Schedule Appointment
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}

  

    
