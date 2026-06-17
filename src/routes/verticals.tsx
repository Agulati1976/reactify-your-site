import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  ChevronUp, Linkedin, Instagram, Twitter, Facebook,
  Users, Settings, Smartphone, Lightbulb, Network, FileCheck, HandHelping, BarChart3, UsersRound,
} from "lucide-react";
import logo from "@/assets/huquo-logo.png";
const banner = { url: "/assets/verticals-banner-new.png" };
import { SiteHeader } from "@/components/SiteHeader";

const verticals = [
  { Icon: Users, title: "Huquo Highs", sub: "Strategic and Leadership Hiring", desc: "Huquo Highs is the business unit led by seasoned search executives with rich exposure. Our experts will first understand the organisation's expectations from the new leader. And then bring a befitting match on board after extensive research and assessment." },
  { Icon: Settings, title: "Huquo Heads", sub: "Business and Operational Level Hiring", desc: "Huquo Heads vertical caters to middle managerial and line level hiring across various industries." },
  { Icon: Smartphone, title: "Huquo Hikes", sub: "Quick Post & Hire, App-based Online Recruitment Solutions", desc: "Huquo Hikes will offer portal, digtal and apps based platform to clients to reach out to talent pool in economical and fastest manner to meet the hiring numbers." },
  { Icon: Lightbulb, title: "Huquo Hires", sub: "An extensive Skill – based Mass Hiring", desc: "Huquo Hires team of recruitment experts under Huquo Hires acts as an extended arm to support our clients to help in getting required numbers." },
  { Icon: Network, title: "Huquo Heroes", sub: "Flexi Staffing & Contingent Hiring", desc: "Huquo Heroes will offer portal, digital and apps based platform to clients to reach out to talent pool in economical and fastest manner to meet the hiring numbers." },
  { Icon: FileCheck, title: "Huquo Hunts", sub: "Build, Hire & Transfer", desc: "Huquo Hunts is the connect between Corporate and talent to understand future requirement." },
  { Icon: HandHelping, title: "Huquo HR General Management", sub: "", desc: "Human capital is biggest disruption in todays business world-through strategic intervention, we assist our clients in building indigenous HR ecosystem to address these challenges across all the sub function in human resources department." },
  { Icon: BarChart3, title: "Huquo Analytics", sub: "", desc: "We assist our client in deciphering human capital issues and designing programme to address the same." },
  { Icon: UsersRound, title: "Huquo Business Associates", sub: "", desc: "Associates are business partners located in various locations (including Global locations) to increase delivery reach for our clients." },
];

export default function VerticalsPage() {
  useEffect(() => { document.title = "Value Verticals - HuQuo"; }, []);
  return (
    <div className="min-h-screen bg-white text-[#333]">
      {/* Header */}
      <SiteHeader active={'verticals'} />

      {/* Banner */}
      <section className="relative">
        <img src={banner.url} alt="Value Verticals" className="h-[40vh] w-full object-cover md:h-[55vh]" width={1920} height={700} />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <h1 className="max-w-md text-5xl font-bold uppercase leading-tight text-[#1FB6D4] sm:text-6xl lg:text-7xl">Value<br />Verticals</h1>
          </div>
        </div>
      </section>

      {/* Verticals list */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        {verticals.map(({ Icon, title, sub, desc }, i) => (
          <section key={title} className={`py-12 ${i !== verticals.length - 1 ? "border-b border-gray-200" : ""}`}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#1FB6D4]">
                <Icon className="h-12 w-12 text-white" strokeWidth={1.5} />
              </div>
              <h2 className="text-3xl font-bold text-[#1FB6D4] sm:text-4xl">{title}</h2>
              {sub && <p className="mt-3 text-lg text-[#333]">{sub}</p>}
              <div className="my-6 flex items-center gap-2">
                <span className="h-px w-16 bg-gray-400" />
                <span className="h-3 w-3 rounded-full border-2 border-gray-500" />
                <span className="h-px w-16 bg-gray-400" />
              </div>
              <p className="max-w-3xl leading-relaxed text-[#1a3b6e]">{desc}</p>
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <img src={logo} alt="HuQuo" className="h-12 w-auto" loading="lazy" width={180} height={48} />
            <nav className="flex flex-wrap items-center gap-8 text-sm font-medium uppercase tracking-wide text-[#6c6c6c]">
              <Link to="/about" className="hover:text-[#1FB6D4]">About Us</Link>
              <Link to="/leadership" className="hover:text-[#1FB6D4]">Leadership Team</Link>
              <Link to="/verticals" className="text-[#1FB6D4]">Value Verticals</Link>
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