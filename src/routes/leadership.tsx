import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ChevronUp, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/huquo-logo.png";
const banner = { url: "/assets/leaders-banner.png" };
const manoj = { url: "/assets/manoj-sharma.jpg" };
const arpana = { url: "/assets/arpana-sharma.jpg" };
import { SiteHeader } from "@/components/SiteHeader";

export default function LeadershipPage() {
  useEffect(() => { document.title = "Leadership Team - HuQuo"; }, []);
  return (
    <div className="min-h-screen bg-white text-[#333]">
      {/* Header */}
      <SiteHeader active={'leadership'} />

      {/* Banner */}
      <section className="relative">
        <img src={banner.url} alt="Our Leaders" className="h-[45vh] w-full object-cover md:h-[60vh]" width={1920} height={700} />
        <div className="absolute inset-0 bg-[#1FB6D4]/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl lg:text-7xl">Our Leaders</h1>
        </div>
      </section>

      {/* CEO - Manoj Sharma */}
      <section className="relative py-20">
        <div className="absolute left-0 top-1/2 hidden h-64 w-32 -translate-y-1/2 bg-[#1FB6D4] lg:block" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <img src={manoj.url} alt="Manoj Sharma" className="aspect-square w-80 max-w-full rounded-full object-cover shadow-lg" loading="lazy" width={500} height={500} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#1a1a1a] sm:text-5xl">Manoj Sharma</h2>
            <p className="mt-3 text-2xl text-[#1a1a1a]">Chief Executive Officer (CEO)</p>
            <p className="mt-8 leading-relaxed text-[#1a3b6e]">
              "Human resources isn't a thing we do. It's the thing that runs our business. We help our clients enhance growth &amp; profitability by providing all human capital services like talent acquisition, HR analytics, flexible staffing, and HR general management on time with global standards, which is one of the prime disruptions these days for the client in meeting their respective client expectation and delivery on time."
            </p>
            <a href="#" aria-label="LinkedIn" className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1FB6D4] text-white hover:opacity-90">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* MD - Arpana */}
      <section className="relative py-20">
        <div className="absolute right-0 top-1/2 hidden h-64 w-32 -translate-y-1/2 bg-[#1FB6D4] lg:block" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold text-[#1a1a1a] sm:text-5xl">Arpana M. Sharma</h2>
            <p className="mt-3 text-2xl text-[#1a1a1a]">Managing Director (MD)</p>
            <p className="mt-8 leading-relaxed text-[#1a3b6e]">
              "Talent Management Is the Systematic Process of Creating and Sustaining Individual Capabilities. That Will Help the Business Deliver Strategy. You can dream, create, design and build the most wonderful place in the world…but it requires people to make the dream a reality- We do it for our clients in HuQuo &amp; enable our clients to run their business."
            </p>
            <a href="#" aria-label="LinkedIn" className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1FB6D4] text-white hover:opacity-90">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="order-1 flex justify-center lg:order-2">
            <img src={arpana.url} alt="Arpana M. Sharma" className="aspect-square w-80 max-w-full rounded-full object-cover shadow-lg" loading="lazy" width={500} height={500} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <img src={logo} alt="HuQuo" className="h-12 w-auto" loading="lazy" width={180} height={48} />
            <nav className="flex flex-wrap items-center gap-8 text-sm font-medium uppercase tracking-wide text-[#6c6c6c]">
              <Link to="/about" className="hover:text-[#1FB6D4]">About Us</Link>
              <Link to="/leadership" className="text-[#1FB6D4]">Leadership Team</Link>
              <Link to="/verticals" className="hover:text-[#1FB6D4]">Value Verticals</Link>
              <Link to="/#jobs" className="hover:text-[#1FB6D4]">Job Boards</Link>
              <Link to="/contact" className="hover:text-[#1FB6D4]">Contact Us</Link>
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