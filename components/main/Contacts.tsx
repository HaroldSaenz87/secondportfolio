"use client";

import { AlertCircle, CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

const contactInformation: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "joshu4nick19@gmail.com",
    href: "mailto:joshu4nick19@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(239) 321-2726",
    href: "tel:2393212726",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Orlando, FL",
  },
];

export const Contacts = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });

    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden flex flex-col items-center justify-center z-20">

      
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-700/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-cyan-500 py-10">
        Contact Me
      </h1>

      <p className="text-gray-400 text-lg max-w-xl text-center mb-12 px-6">
        Have a project in mind? I&apos;d love to hear about it. Send me a message
        and let&apos;s discuss how we can work together.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl w-full px-10">

        {/* ── Form Card ── */}
        <div className="glass rounded-3xl p-8 border border-[#7042f861]">

          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Send className="w-5 h-5 text-[#b49bff]" />
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#0300145e] border border-[#7042f861] text-white placeholder:text-gray-500 focus:border-[#7042f8] focus:ring-1 focus:ring-[#7042f8] outline-none transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-xl bg-[#0300145e] border border-[#7042f861] text-white placeholder:text-gray-500 focus:border-[#7042f8] focus:ring-1 focus:ring-[#7042f8] outline-none transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-[#0300145e] border border-[#7042f861] text-white placeholder:text-gray-500 focus:border-[#7042f8] focus:ring-1 focus:ring-[#7042f8] outline-none transition-all resize-none text-sm"
              />
            </div>

            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm bg-linear-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border border-[#7042f861] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-[0.98] cursor-pointer"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Status message */}
            {submitStatus.type && (
              <div className={`flex items-center gap-3 p-4 rounded-xl text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}>
                {submitStatus.type === "success"
                  ? <CheckCircle className="w-5 h-5 shrink-0" />
                  : <AlertCircle className="w-5 h-5 shrink-0" />
                }
                <p>{submitStatus.message}</p>
              </div>
            )}

          </form>
        </div>

        {/* ── Right Column ── */}
        <div className="flex flex-col gap-6">

          
          <div className="glass rounded-3xl p-8 border border-[#7042f861]">
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-3">
              {contactInformation.map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-[#7042f820] border border-[#7042f861] flex items-center justify-center group-hover:bg-[#7042f840] transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-[#b49bff]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                      <div className="text-sm font-medium text-gray-200">{item.value}</div>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-[#7042f815] transition-colors group"
                  >
                    {inner}
                  </a>
                ) : (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3.5 rounded-xl group cursor-default"
                  >
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>

          
          <div className="glass rounded-3xl p-8 border border-[#7042f861]">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </div>
              <span className="font-medium text-white">Currently Available</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Open to full-time roles and internships in software engineering. I&apos;m committed to writing clean, thoughtful code and growing alongside a strong team.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacts;