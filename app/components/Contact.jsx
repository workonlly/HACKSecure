"use client";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (API call)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: ["hack@nith.ac.in"],
    },
    {
      icon: "📍",
      title: "Location",
      details: ["NIT Hamirpur", "Hamirpur, Himachal Pradesh", "177 005, India"],
    },
    {
      icon: "🕐",
      title: "Response Time",
      details: [
        "We typically respond within 24-48 hours",
        "Business hours: 9 AM - 5 PM IST",
      ],
    },
  ];

  const faqs = [
    {
      question: "How do I register for the hackathon?",
      answer:
        'You can register through our online registration form available on the Registration page. Just click that big, shiny "Register Now" button on our website, fill in your details, and boom—you are in! Do not wait too long though; spots fill up fast!',
    },
    {
      question: "What is the team size limit?",
      answer:
        "Teams can have 2-4 members. You can also register individually if you prefer to work alone or find teammates during the event.",
    },
    {
      question: "Is there a registration fee?",
      answer: `No, HACKSECURE'26 is completely free! Just register and you are in. There are no registration fees or hidden charges.`,
    },
    {
      question: "Can I participate from a different state/country?",
      answer:
        "Yes! Participation is open to individuals and teams from across India and internationally. Online rounds are conducted for broader accessibility.",
    },
    {
      question: "When is the final hackathon event?",
      answer:
        "The final hackathon will be held on March 10-11, 2026 at NIT Hamirpur. Check the Timeline section for detailed dates of all rounds.",
    },
    {
      question: "Do we need to submit a project proposal?",
      answer:
        "Yes, in Phase 1, teams need to submit their idea and approach. Selected teams will be invited to develop prototypes in hackathon.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      {/* Page Title */}
      <div className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#5A2A25] mb-4">
          Get in Touch
        </h1>
        <p className="text-base sm:text-lg text-[#33110E] max-w-2xl">
          Have questions about the hackathon? Need assistance with registration
          or accommodation? We're here to help!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className="bg-white border-2 border-[#E8A87C] rounded-lg p-6 shadow-md"
          >
            <div className="text-4xl mb-4">{info.icon}</div>
            <h3 className="text-lg font-semibold text-[#5A2A25] mb-3">
              {info.title}
            </h3>
            <div className="space-y-1 text-sm text-[#33110E]">
              {info.details.map((detail, idx) => (
                <p key={idx}>{detail}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Main Content and Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-[#F5D7C8]/20 rounded-lg border-2 border-[#E8A87C]/30 p-8">
            <h2 className="text-2xl font-bold text-[#5A2A25] mb-6">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-500 rounded-lg text-green-700">
                <p className="font-semibold">
                  Thank you! Your message has been sent successfully.
                </p>
                <p className="text-sm">We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#5A2A25] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg focus:outline-none focus:border-[#E8A87C] focus:ring-2 focus:ring-[#E8A87C]/20 text-[#33110E] placeholder:text-[#999]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5A2A25] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg focus:outline-none focus:border-[#E8A87C] focus:ring-2 focus:ring-[#E8A87C]/20 text-[#33110E] placeholder:text-[#999]"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5A2A25] mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg focus:outline-none focus:border-[#E8A87C] focus:ring-2 focus:ring-[#E8A87C]/20 text-[#33110E] placeholder:text-[#999]"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5A2A25] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg focus:outline-none focus:border-[#E8A87C] focus:ring-2 focus:ring-[#E8A87C]/20 text-[#33110E] placeholder:text-[#999] resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5A2A25] hover:bg-[#4A1C18] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 border-2 border-[#E8A87C]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="bg-[#3E1714] text-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-[#E8A87C]">
            <h3 className="text-[#E8A87C] text-lg font-semibold mb-4">
              Quick Contact Info
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-[#F2D5C4] font-semibold text-sm mb-2">
                  Primary Email
                </p>
                <a
                  href="mailto:hack@nith.ac.in"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors break-all"
                >
                  hack@nith.ac.in
                </a>
              </div>

              <div>
                <p className="text-[#F2D5C4] font-semibold text-sm mb-2">
                  Alternative Email
                </p>
                <a
                  href="mailto:csec@nith.ac.in"
                  className="text-[#E3AFA0] hover:text-[#E8A87C] transition-colors break-all"
                >
                  csec@nith.ac.in
                </a>
              </div>

              <div>
                <p className="text-[#F2D5C4] font-semibold text-sm mb-2">
                  Address
                </p>
                <p className="text-[#E3AFA0] text-sm leading-relaxed">
                  NIT Hamirpur
                  <br />
                  Hamirpur, HP 177005
                  <br />
                  India
                </p>
              </div>

              <div className="border-t border-[#E8A87C]/30 pt-6">
                <p className="text-[#F2D5C4] font-semibold text-sm mb-2">
                  Event Details
                </p>
                <p className="text-[#E3AFA0] text-sm">
                  <strong>When:</strong> March 10-11, 2026
                  <br />
                  <strong>Where:</strong> NIT Hamirpur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="bg-[#F5D7C8]/10 rounded-lg border-2 border-[#E8A87C]/20 p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#5A2A25] mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-[#E8A87C]/30 rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full px-6 py-4 bg-white hover:bg-[#F5D7C8]/20 text-left flex items-center justify-between transition-colors"
              >
                <h3 className="font-semibold text-[#5A2A25]">{faq.question}</h3>
                <span
                  className={`text-[#E8A87C] text-xl transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </button>

              {expandedFaq === index && (
                <div className="px-6 py-4 bg-[#F5D7C8]/20 border-t-2 border-[#E8A87C]/30">
                  <p className="text-[#33110E] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
