import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronUp, FileText, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/huquo-logo.png";
const hero1 = { url: "/assets/hero-1.jpg" };
const hero2 = { url: "/assets/hero-2.jpg" };
const hero3 = { url: "/assets/hero-3.png" };
const hero4 = { url: "/assets/hero-4.jpg" };
const heroMobile1 = { url: "/assets/hero-mobile-1.jpg" };
const heroMobile2 = { url: "/assets/hero-mobile-2.jpg" };
const analyticalAsset = { url: "/assets/working-on-project-analytics-2021-08-27-09-54-44-utc-1.png" };
const whyIcon = { url: "/assets/group-95.png" };
const g2 = { url: "/assets/gallery-2.jpg" };
const g6 = { url: "/assets/gallery-6.jpg" };
const g7 = { url: "/assets/gallery-7.jpg" };
const g9 = { url: "/assets/gallery-9.jpg" };
const g10 = { url: "/assets/gallery-10.jpg" };
const g11 = { url: "/assets/gallery-11.jpg" };
const g12 = { url: "/assets/gallery-12.jpg" };
import { SiteHeader } from "@/components/SiteHeader";

export default function Index() {
  useEffect(() => {
    document.title = "HuQuo - Analysing The Human Quotient";
  }, []);
  const desktopSlides = [hero1.url, hero2.url, hero3.url, hero4.url];
  const mobileSlides = [heroMobile1.url, heroMobile2.url];
  const [slide, setSlide] = useState(0);
  const slideCount = Math.max(desktopSlides.length, mobileSlides.length);
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slideCount), 5000);
    return () => clearInterval(id);
  }, [slideCount]);
  return (
    <div className="min-h-screen bg-white text-[#333]">
      {/* Header */}
      <SiteHeader />

      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        {Array.from({ length: slideCount }).map((_, i) => {
          const d = desktopSlides[i % desktopSlides.length];
          const m = mobileSlides[i % mobileSlides.length];
          return (
            <picture
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ${slide === i ? "opacity-100" : "opacity-0"}`}
            >
              <source media="(min-width: 768px)" srcSet={d} />
              <img
                src={m}
                alt="HuQuo"
                className="h-full w-full object-cover"
                width={1920}
                height={900}
                loading={i === 0 ? "eager" : "lazy"}
                decoding={i === 0 ? "sync" : "async"}
                fetchPriority={i === 0 ? "high" : "low"}
              />
            </picture>
          );
        })}
        {/* Dark overlay only on mobile */}
        <div className="absolute inset-0 bg-black/45 md:bg-transparent" />
        <div className="absolute inset-0 flex items-end justify-center pb-16 md:items-center md:justify-end md:pb-0">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mx-auto max-w-xl text-center md:ml-auto md:mr-0 md:text-right">
              <h1 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl md:text-[#1FB6D4] lg:text-6xl">
                Next Stage In The Evolution of HR
              </h1>
              <Link to="/about" className="mt-6 inline-block border-2 border-white bg-transparent px-8 py-3 text-base font-medium text-white transition hover:bg-white hover:text-[#1FB6D4] md:mt-8 md:border-[#1FB6D4] md:text-[#1FB6D4] md:hover:bg-[#1FB6D4] md:hover:text-white">
                Know More
              </Link>
            </div>
          </div>
        </div>
        {/* Slide dots */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {Array.from({ length: slideCount }).map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all ${slide === i ? "w-6 bg-white" : "w-2 bg-white/60"}`}
            />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <img src={logo} alt="HuQuo logo" className="w-80 max-w-full" loading="lazy" width={400} height={120} />
          </div>
          <div className="space-y-5 text-[17px] leading-relaxed text-[#333]">
            <p>
              <strong>HuQuo (derived from Human Quotient)</strong> is the next stage in the evolution of HR. In an industry thirsty for innovation, HuQuo is a fresh perspective towards people and organisations. At HUQUO, we do not look at human beings as mere resources, but as an ocean of untapped potential.
            </p>
            <p>
              Human Quotient goes beyond IQ and EQ. It's the holistic representation of all human potential. We strategically manage this Human Quotient.
            </p>
          </div>
        </div>
      </section>

      {/* Analytical Approach */}
      <section className="bg-white pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <img src={analyticalAsset.url} alt="Analytical approach" className="w-full rounded-sm object-cover" loading="lazy" width={1200} height={700} />
          <div>
            <h2 className="text-3xl font-bold uppercase text-[#1FB6D4] sm:text-4xl">An Analytical Approach</h2>
            <div className="mt-4 h-[2px] w-24 bg-gray-300" />
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-[#333]">
              <p>
                Many organizations struggle to achieve results because the relationship between their goals and their people processes are foggy or non-existent. With the use of a proprietary strategy decoder, our talent consulting services provide an intensive, efficient, and collaborative process that enables you to first hone in on the talent implications of your core business strategies, and then confidently define, prioritize, and sequence the critical talent capabilities needed to activate strategies and drive their execution.
              </p>
              <p className="font-medium text-[#1a3b6e]">
                The net result is senior leadership buy-in with your emergent talent strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-[#1FB6D4] py-20 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_2fr]">
          <div className="flex justify-center">
            <img src={whyIcon.url} alt="Why it matters" className="h-64 w-64 object-contain" loading="lazy" width={300} height={300} />
          </div>
          <div>
            <h2 className="text-3xl font-bold uppercase sm:text-4xl">Why It Matters?</h2>
            <div className="mt-4 h-[2px] w-24 bg-white/60" />
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed">
              <p>
                For ages recruiting has been more about the jobs than the people fulfilling these roles. It has been a haphazard mess of moulding adaptable human quotients into odd shaped holes in order to fill a need gap.
              </p>
              <p>
                At Huquo we find the right fix for the right role. We believe that when individuals find the right place to belong to – it helps both the individual and the business vertical flourish.
              </p>
              <p>Huquo is about supporting businesses and individuals optimise their growth potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section id="jobs" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold uppercase text-[#6c6c6c] sm:text-4xl">Career With HuQuo</h2>
          <div className="mt-4 h-[2px] w-40 bg-gray-300" />
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            <a href="#" className="flex items-center justify-center gap-4 bg-[#6c6c6c] px-8 py-8 text-xl font-bold uppercase text-white transition hover:opacity-90">
              <FileText className="h-10 w-10" />
              Search And Apply
            </a>
            <Link to="/cv-form" className="flex items-center justify-center gap-4 border-2 border-[#1FB6D4] bg-white px-8 py-8 text-xl font-bold uppercase text-[#1FB6D4] transition hover:bg-[#1FB6D4] hover:text-white">
              <FileText className="h-10 w-10" />
              Drop Your CV Here
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-[#f4f4f4] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-[#6c6c6c] sm:text-4xl">Photo Gallery</h2>
          <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[g2, g6, g7, g9, g10, g11, g12].map((a, i) => (
              <img key={i} src={a.url} alt={`Gallery ${i + 1}`} className="aspect-[4/3] w-full object-cover shadow-md" loading="lazy" width={800} height={600} />
            ))}
          </div>
        </div>
      </section>

      {/* How Can We Help */}
      <section id="contact" className="bg-[#6c6c6c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold uppercase sm:text-4xl">How Can We Help You?</h2>
          <p className="mt-6 text-lg">
            <a href="mailto:info@huquo.com" className="font-bold uppercase text-[#1FB6D4] underline">Get In Touch</a> With Us.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <img src={logo} alt="HuQuo" className="h-12 w-auto" loading="lazy" width={180} height={48} />
            <nav className="flex flex-wrap items-center gap-8 text-sm font-medium uppercase tracking-wide text-[#6c6c6c]">
            <Link to="/about" className="hover:text-[#1FB6D4]">About Us</Link>
              <Link to="/leadership" className="hover:text-[#1FB6D4]">Leadership Team</Link>
              <Link to="/verticals" className="hover:text-[#1FB6D4]">Value Verticals</Link>
              <a href="#jobs" className="hover:text-[#1FB6D4]">Job Boards</a>
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
            <p className="mt-1">Designed and Developed by <span className="text-[#1FB6D4]">HuQuo Team</span>.</p>
          </div>
        </div>
        <a href="#top" className="fixed bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center bg-[#1FB6D4] text-white shadow-lg hover:opacity-90">
          <ChevronUp className="h-5 w-5" />
        </a>
      </footer>
    </div>
  );
}
