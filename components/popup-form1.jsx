"use client"

import { useState } from "react"

export default function QuoteModal({ plan, region, isOpen, onClose }) {
  const [form, setForm] = useState({
    firstname: "", lastname: "", phone: "", company: "", email: ""
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate all fields
    for (const key in form) {
      if (form[key].trim() === "") {
        alert("Please fill out all fields before submitting the form.")
        return
      }
    }

    setSubmitting(true)

    const payload = {
      ...form,
      planName: plan.name,
      region,
      features: plan.features.map(f => f.name),
    }

    try {
      await fetch("/api/plan-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })
      alert("Quote request submitted successfully")
      onClose()
    } catch {
      alert("Failed to submit quote")
    } finally {
      setSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>✕</button>
        <h2 className="text-xl font-bold mb-4">Request a Quote — {plan.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {submitting ? "Submitting..." : "Submit Quote"}
          </button>
        </form>
      </div>
    </div>
  )
}
