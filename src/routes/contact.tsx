import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, ChevronUp, Linkedin, Instagram, Twitter, Facebook, Send, MapPin } from "lucide-react";
import logo from "@/assets/huquo-logo.png";
const banner = { url: "/assets/contact-banner.png" };
const timeSquare = { url: "/assets/time-square.png" };
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  useEffect(() => { document.title = "Contact Us - HuQuo"; }, []);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const navLink = "hover:text-[#1FB6D4]";
  const navLinkActive = "text-[#1FB6D4]";

  return (
    <div className="min-h-screen bg-white text-[#333]">
      {/* Header */}
      <SiteHeader active={'contact'} />

      {/* Banner */}
      <section className="relative bg-[#1FB6D4]">
        <img src={banner.url} alt="Stay Connected" className="h-[40vh] w-full object-cover md:h-[55vh]" width={1920} height={700} />
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 bg-[#1FB6D4] py-8 md:py-12">
          <h1 className="text-center text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl lg:text-7xl">Stay Connected</h1>
        </div>
      </section>

      {/* Contact form + building */}
      <section className="bg-[#f5f5f5] py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-10 text-4xl font-bold text-[#1a1a1a]">Contact us</h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="text" placeholder="Name*" required maxLength={100} value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 bg-white px-5 py-4 text-base outline-none focus:border-[#1FB6D4]" />
              <input type="email" placeholder="Email*" required maxLength={255} value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 bg-white px-5 py-4 text-base outline-none focus:border-[#1FB6D4]" />
              <input type="text" placeholder="Subject" maxLength={200} value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border border-gray-300 bg-white px-5 py-4 text-base outline-none focus:border-[#1FB6D4]" />
              <textarea placeholder="Message*" required maxLength={1000} rows={6} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 bg-white px-5 py-4 text-base outline-none focus:border-[#1FB6D4]" />
              <button type="submit" className="bg-[#1FB6D4] px-10 py-3 font-medium text-white hover:opacity-90">Submit</button>
              {submitted && <p className="text-green-600">Thanks! We'll be in touch shortly.</p>}
            </form>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6c6c6c] text-white hover:bg-[#1FB6D4]"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6c6c6c] text-white hover:bg-[#1FB6D4]"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6c6c6c] text-white hover:bg-[#1FB6D4]"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <img src={timeSquare.url} alt="Time Square - HuQuo HQ" className="h-full w-full object-cover" loading="lazy" width={900} height={700} />
          </div>
        </div>
      </section>

      {/* Company details */}
      <section className="bg-[#f5f5f5] pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-extrabold uppercase tracking-wide text-[#1a1a1a]">Huquo Consulting Pvt. Ltd.</h2>
          <p className="mt-6 font-bold text-[#1a1a1a]">COMPANY NUMBER (UNITED KINGDOM): <span className="font-normal">16752854</span></p>
          <p className="mt-4 font-bold text-[#1a1a1a]">CIN No. (Govt. of India): <span className="font-normal">U74999DL2016PTC298892</span></p>
          <p className="mt-2 font-bold text-[#1a1a1a]">Udyam Registration No. (Govt. of India): <span className="font-normal">UDYAM-10-0030343</span></p>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            <OfficeCard
              title="India Office Headquarters"
              rows={[
                { Icon: Phone, text: "+91 124 455 9224" },
                { Icon: Send, text: "contact@huquo.com  business.india@huquo.com" },
                { Icon: MapPin, text: "4th Floor, Time Square,\nB-Block, Sushant Lok-1,\nGurgaon-122002 (India)" },
              ]}
            />
            <OfficeCard
              title="US Office"
              rows={[
                { Icon: Send, text: "business.usa@huquo.com" },
                { Icon: MapPin, text: "174 Nassau Street, Suite 104,\nPrinceton, NJ 08542 (US)" },
              ]}
            />
            <OfficeCard
              title="UK Office"
              rows={[
                { Icon: Send, text: "business.uk@huquo.com" },
                { Icon: MapPin, text: "167-169, Great Portland Street, 5th Floor London,\nUnited Kingdom, W1W 5PF" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <img src={logo} alt="HuQuo" className="h-12 w-auto" loading="lazy" width={180} height={48} />
            <nav className="flex flex-wrap items-center gap-8 text-sm font-medium uppercase tracking-wide text-[#6c6c6c]">
              <Link to="/about" className={navLink}>About Us</Link>
              <Link to="/leadership" className={navLink}>Leadership Team</Link>
              <Link to="/verticals" className={navLink}>Value Verticals</Link>
              <Link to="/#jobs" className={navLink}>Job Boards</Link>
              <Link to="/contact" className={navLinkActive}>Contact Us</Link>
            </nav>
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <a href="#" className="bg-[#1FB6D4] px-8 py-3 font-medium text-white hover:opacity-90">Register OR Login</a>
            <div className="flex items-center gap-5 text-[#6c6c6c]">
              <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></a>
              <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-sm text-[#6c6c6c]">
            <p>©2026 HUQUO. All rights reserved.</p>
          </div>
        </div>
        <a href="#top" className="fixed bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center bg-[#1FB6D4] text-white shadow-lg hover:opacity-90">
          <ChevronUp className="h-5 w-5" />
        </a>
      </footer>
    </div>
  );
}

function OfficeCard({ title, rows }: { title: string; rows: { Icon: React.ComponentType<{ className?: string }>; text: string }[] }) {
  return (
    <div className="border-t-2 border-[#1FB6D4] pt-5">
      <h3 className="text-2xl text-[#1a1a1a]">{title}</h3>
      <div className="mt-6 space-y-5">
        {rows.map(({ Icon, text }, i) => (
          <div key={i} className="flex items-start gap-4">
            <Icon className="mt-1 h-6 w-6 shrink-0 text-[#1FB6D4]" />
            <p className="whitespace-pre-line text-[#1a1a1a]">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}