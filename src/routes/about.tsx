import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, ChevronUp, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/huquo-logo.png";
import banner from "@/assets/about-banner.png.asset.json";
import whoWeAre from "@/assets/who-we-are.png.asset.json";
import indiaMap from "@/assets/india-map.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - HuQuo" },
      { name: "description", content: "HuQuo is a young HR Management organisation founded in 2016, headquartered in Gurgaon, India." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#333]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="HuQuo" className="h-12 w-auto" width={180} height={48} />
          </Link>
          <nav className="hidden items-center gap-10 text-[15px] font-medium uppercase tracking-wide text-[#6c6c6c] lg:flex">
            <Link to="/about" className="text-[#1FB6D4]">About Us</Link>
            <Link to="/" hash="leadership" className="hover:text-[#1FB6D4]">Leadership Team</Link>
            <Link to="/" hash="verticals" className="hover:text-[#1FB6D4]">Value Verticals</Link>
            <Link to="/" hash="jobs" className="hover:text-[#1FB6D4]">Job Boards</Link>
            <Link to="/" hash="contact" className="hover:text-[#1FB6D4]">Contact Us</Link>
          </nav>
          <div className="hidden items-center gap-5 text-[#6c6c6c] lg:flex">
            <a href="tel:+911234567890" aria-label="Call"><Phone className="h-5 w-5" /></a>
            <a href="mailto:info@huquo.com" aria-label="Email"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="relative">
        <img src={banner.url} alt="HuQuo About" className="h-[40vh] w-full object-cover md:h-[55vh]" width={1920} height={700} />
      </section>

      {/* Who We Are */}
      <section className="bg-[#f4f4f4]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-0 lg:grid-cols-2">
          <div className="px-6 py-16 lg:px-16 lg:py-24">
            <h1 className="text-4xl font-bold text-[#1a1a1a] sm:text-5xl">Who We Are</h1>
            <p className="mt-8 text-[16px] leading-relaxed text-[#1a3b6e]">
              We are Young HR Management organisation founded in 2016 by Seasoned industry leaders passed out of premier business schools with vision to established HR Company on the lines of Mckinsey, A T Kearney, BCG in HR domain, which can serve industry by providing path-breaking HR Services by deeply understanding the human quotient (by helping clients in identifying their human capital issues in the organization and assist in addressing the same) of organizations we work with, and to evolve the industry and make it future ready.
            </p>
          </div>
          <img src={whoWeAre.url} alt="Team meeting" className="h-full w-full object-cover" loading="lazy" width={1200} height={800} />
        </div>
      </section>

      {/* HuQuo Consulting in India */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <img src={indiaMap.url} alt="HuQuo in India" className="w-full max-w-md" loading="lazy" width={520} height={620} />
          </div>
          <div>
            <p className="text-lg font-semibold uppercase tracking-wide text-[#1a1a1a]">HuQuo Consulting</p>
            <h2 className="mt-2 text-4xl font-bold text-[#1a1a1a] sm:text-5xl">in India.</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-[#1a3b6e]">
              We are Gurgaon Headquartered HR Management organisation that help clients enhance growth &amp; profitability by providing all human capital services like Recruitment, HR General Management and HR Analytics, on time with global standard, which is one of the prime disruption these days for client/s in meeting client expectation and disruption these days for client/s in meeting client expectation and delivery on time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <img src={logo} alt="HuQuo" className="h-12 w-auto" loading="lazy" width={180} height={48} />
            <nav className="flex flex-wrap items-center gap-8 text-sm font-medium uppercase tracking-wide text-[#6c6c6c]">
              <Link to="/about" className="text-[#1FB6D4]">About Us</Link>
              <Link to="/" hash="leadership" className="hover:text-[#1FB6D4]">Leadership Team</Link>
              <Link to="/" hash="verticals" className="hover:text-[#1FB6D4]">Value Verticals</Link>
              <Link to="/" hash="jobs" className="hover:text-[#1FB6D4]">Job Boards</Link>
              <Link to="/" hash="contact" className="hover:text-[#1FB6D4]">Contact Us</Link>
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