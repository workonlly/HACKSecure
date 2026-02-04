"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY);

      toast.success("Message sent successfully!");
      setSubmitted(true);

      // Clear inputs
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log("FAILED...", error.text);
      toast.error("Failed to send message. Please try again!");
    }

    setLoading(false);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: ["hack.csec.nith25@gmail.com"],
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
      question: "How do I register?",
      answer:
        "Just click that big, shiny \"Register Now\" button on our website, fill in your details, and boom—you're in! Don't wait too long though; spots fill up fast!",
    },
    {
      question: "Who can participate?",
      answer:
        "Whether you're a coding ninja, a design wizard, or just someone with crazy ideas—everyone's welcome!",
    },
    {
      question: "What is the procedure for participation?",
      answer:
        "Choose one of the 5 problem statements, optionally upload a proposal or video, then wait for shortlisting.",
    },
    {
      question: "Will the problem statements change during the hackathon?",
      answer:
        "Yes. New statements will be revealed on the spot during the hackathon.",
    },
    {
      question: "Is there any registration fee?",
      answer: "No, participation in HACKSECURE'26 is completely free!",
    },
    {
      question: "What about accommodation?",
      answer:
        "On-campus accommodation will be provided for outstation students!",
    },
    {
      question: "Can I use old problem statements?",
      answer:
        "No. Final hackathon problems will be newly given; old ones are only for shortlisting.",
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <div className="container mx-auto px-4 py-20 lg:py-12">
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

      {/* Contact Info */}
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

      {/* Form + Sidebar */}
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
                  Thank you! Your message has been sent.
                </p>
              </div>
            )}

            <form onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-[#5A2A25] mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  disabled={loading}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg"
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
                  disabled={loading}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg"
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
                  disabled={loading}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#5A2A25] mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  disabled={loading}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border-2 border-[#E8A87C]/50 rounded-lg resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-semibold py-3 px-6 rounded-lg border-2 border-[#E8A87C] text-white transition-colors duration-300 ${
                  loading
                    ? "bg-[#7a4c46] cursor-not-allowed"
                    : "bg-[#5A2A25] hover:bg-[#4A1C18]"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 100 16v-4l-3.5 3.5L12 24v-4a8 8 0 01-8-8z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-[#3E1714] text-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-[#E8A87C]">
            <h3 className="text-[#E8A87C] text-lg font-semibold mb-4">
              Quick Contact Info
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-[#F2D5C4] text-sm mb-2 font-semibold">
                  Primary Email
                </p>
                <a
                  href="mailto:hack.csec.nith25@gmail.com"
                  className="text-[#E3AFA0] underline"
                >
                  hack.csec.nith25@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[#F2D5C4] text-sm mb-2 font-semibold">
                  Alternative Email
                </p>
                <a href="mailto:csec@nith.ac.in" className="text-[#E3AFA0]">
                  csec@nith.ac.in
                </a>
              </div>

              <div>
                <p className="text-[#F2D5C4] text-sm mb-2 font-semibold">
                  Address
                </p>
                <p className="text-[#E3AFA0] text-sm">
                  NIT Hamirpur
                  <br />
                  Hamirpur, HP 177005
                  <br />
                  India
                </p>
              </div>

              <div className="border-t border-[#E8A87C]/30 pt-6">
                <p className="text-[#F2D5C4] text-sm mb-2 font-semibold">
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

      {/* FAQ Section */}
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
                className="w-full px-6 py-4 bg-white hover:bg-[#F5D7C8]/20 flex justify-between items-center"
              >
                <h3 className="font-semibold text-[#5A2A25]">{faq.question}</h3>
                <span
                  className={`text-[#E8A87C] text-xl transition-transform ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {expandedFaq === index && (
                <div className="px-6 py-4 bg-[#F5D7C8]/20">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-[#F5D7C8]/20 border-2 border-[#E8A87C]/30 rounded-lg text-center">
          <p className="text-[#33110E] font-semibold">
            Got more questions? Reach out at{" "}
            <a
              href="mailto:hack.csec.nith25@gmail.com"
              className="text-[#5A2A25] underline"
            >
              hack.csec.nith25@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
