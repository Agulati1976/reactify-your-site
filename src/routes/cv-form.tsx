import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronUp, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/huquo-logo.png";
import { SiteHeader } from "@/components/SiteHeader";

type FormState = {
  name: string;
  email: string;
  mobile: string;
  outsideIndia: boolean;
  location: string;
  country: string;
  experience: string;
  resume: File | null;
  noResume: boolean;
  company: string;
  designation: string;
  ugCourse: string;
  ugSpec: string;
  pgCourse: string;
  pgCourseOther: string;
  pgSpec: string;
  ctc: string;
  ctcCurrency: "inr" | "usd";
  ctcExample: string;
};

const initial: FormState = {
  name: "",
  email: "",
  mobile: "",
  outsideIndia: false,
  location: "",
  country: "",
  experience: "",
  resume: null,
  noResume: false,
  company: "",
  designation: "",
  ugCourse: "B.Tech/B.E.",
  ugSpec: "",
  pgCourse: "M.Tech",
  pgCourseOther: "",
  pgSpec: "",
  ctc: "",
  ctcCurrency: "inr",
  ctcExample: "",
};

const experienceOptions = [
  "0-1 Years", "1-3 Years", "3-5 Years", "5-7 Years", "7-10 Years",
  "10-15 Years", "15-20 Years", "20+ Years",
];

const ugCourses = [
  "B.Tech/B.E.", "B.Sc", "B.Com", "B.A", "B.B.A", "B.C.A", "B.Pharma", "LLB", "MBBS", "Other",
];
const ugSpecs = ["Computer Science", "Information Technology", "Electronics", "Mechanical", "Civil", "Electrical", "Chemical", "Other"];
const pgCourses = ["M.Tech", "M.Sc", "M.Com", "M.A", "MBA/PGDM", "M.C.A", "M.Pharma", "LLM", "Other", "None"];
const pgSpecs = ["Computer Science", "Marketing", "Finance", "HR", "Operations", "Other"];

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "Singapore",
  "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Malaysia", "Thailand",
  "Philippines", "Indonesia", "Vietnam", "Japan", "South Korea", "China", "Hong Kong",
  "Netherlands", "Sweden", "Switzerland", "Italy", "Spain", "South Africa", "Nigeria",
  "Kenya", "Brazil", "Mexico", "Argentina", "New Zealand", "Ireland", "Belgium", "Other",
];

export default function CvFormPage() {
  useEffect(() => { document.title = "Drop Your CV - HuQuo"; }, []);
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.location.trim() || !form.company.trim() || !form.designation.trim() || !form.ugCourse.trim()) return;
    setErrorMsg(null);
    setSending(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, val]) => {
        if (k === "resume") return;
        if (typeof val === "boolean") fd.append(k, val ? "true" : "false");
        else fd.append(k, String(val ?? ""));
      });
      if (form.resume) fd.append("resume", form.resume);
      const res = await fetch("/send-cv.php", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) throw new Error(data?.error || "Failed to send");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const labelCls = "block text-[15px] font-bold text-[#1a1a1a]";
  const req = <span className="text-red-500"> *</span>;
  const inputCls = "mt-2 w-full border border-gray-300 bg-white px-4 py-2.5 text-[15px] text-[#333] outline-none placeholder:text-gray-400 focus:border-[#1FB6D4]";
  const selectCls = `${inputCls} appearance-none`;

  return (
    <div className="min-h-screen bg-white text-[#333]">
      <SiteHeader />

      {/* Banner */}
      <section className="bg-[#1FB6D4] py-10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl lg:text-5xl">Drop Your CV</h1>
          <p className="mt-3 text-white/90">Share your details and our team will reach out for relevant opportunities.</p>
        </div>
      </section>

      <section className="bg-[#f5f5f5] py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="bg-white p-6 shadow-sm sm:p-10">
                {submitted ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl font-bold text-[#1a1a1a]">Thanks for submitting your CV!</h2>
                <p className="mt-3 text-[#555]">Our team will get in touch with you shortly.</p>
                <button onClick={() => { setForm(initial); setSubmitted(false); }} className="mt-6 rounded-full bg-[#1FB6D4] px-8 py-2.5 font-medium text-white hover:opacity-90">Submit another</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <label className={labelCls}>Name :{req}</label>
                  <input required maxLength={100} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Enter your name" className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>Email :{req}</label>
                  <input type="email" required maxLength={255} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="Enter your email" className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>Mobile No :</label>
                  <div className="mt-2 flex items-stretch border border-gray-300 bg-white focus-within:border-[#1FB6D4]">
                    <span className="flex items-center gap-1 border-r border-gray-300 px-3 text-sm">
                      <span aria-hidden>🇮🇳</span>
                      <span className="text-gray-500">▾</span>
                    </span>
                    <input type="tel" inputMode="numeric" maxLength={15} value={form.mobile} onChange={(e) => set("mobile", e.target.value.replace(/[^0-9+]/g, ""))} placeholder="Enter your Mobile No." className="w-full px-4 py-2.5 text-[15px] outline-none placeholder:text-gray-400" />
                  </div>
                  <label className="mt-3 inline-flex items-center gap-2 text-sm text-[#333]">
                    <input type="checkbox" checked={form.outsideIndia} onChange={(e) => set("outsideIndia", e.target.checked)} />
                    Outside India
                  </label>
                </div>

                <div>
                  <label className={labelCls}>Current location :{req}</label>
                  <input required maxLength={120} value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="Tell us about your current location" className={inputCls} />
                </div>

                {form.outsideIndia && (
                  <div>
                    <label className={labelCls}>Select Country</label>
                    <select value={form.country} onChange={(e) => set("country", e.target.value)} className={selectCls}>
                      <option value="">Select Country</option>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                )}

                <div>
                  <label className={labelCls}>Total Experience :</label>
                  <select value={form.experience} onChange={(e) => set("experience", e.target.value)} className={selectCls}>
                    <option value="">Select</option>
                    {experienceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-start">
                  <div>
                    <label className={labelCls}>Attach Resume :</label>
                    <input type="file" accept=".pdf,.doc,.docx" disabled={form.noResume} onChange={(e) => set("resume", e.target.files?.[0] ?? null)} className="mt-2 block w-full text-sm file:mr-3 file:border file:border-gray-300 file:bg-gray-100 file:px-3 file:py-1.5 file:text-sm" />
                  </div>
                  <label className="mt-7 inline-flex items-center gap-2 text-sm text-[#333]">
                    <input type="checkbox" checked={form.noResume} onChange={(e) => set("noResume", e.target.checked)} />
                    I don't have <span className="text-red-500">Resume</span>
                  </label>
                </div>

                <div>
                  <label className={labelCls}>Company :{req}</label>
                  <input required maxLength={150} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Enter current company name" className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>Designation :{req}</label>
                  <input required maxLength={150} value={form.designation} onChange={(e) => set("designation", e.target.value)} placeholder="Enter current designation" className={inputCls} />
                </div>

                <div>
                  <label className={labelCls}>UG Course :{req}</label>
                  <select required value={form.ugCourse} onChange={(e) => set("ugCourse", e.target.value)} className={selectCls}>
                    {ugCourses.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>UG Spec :</label>
                  <select value={form.ugSpec} onChange={(e) => set("ugSpec", e.target.value)} className={selectCls}>
                    <option value="">Select UG Spec</option>
                    {ugSpecs.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label className={labelCls}>PG Course :</label>
                  <select value={form.pgCourse} onChange={(e) => set("pgCourse", e.target.value)} className={selectCls}>
                    {pgCourses.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  <input value={form.pgCourseOther} onChange={(e) => set("pgCourseOther", e.target.value)} placeholder="Enter Course" className={`${inputCls} mt-3`} />
                </div>

                <div>
                  <label className={labelCls}>PG Spec :</label>
                  <select value={form.pgSpec} onChange={(e) => set("pgSpec", e.target.value)} className={selectCls}>
                    <option value="">Select PG Spec</option>
                    {pgSpecs.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelCls}>CTC :</label>
                    <div className="mt-2 flex items-stretch border border-gray-300 bg-white focus-within:border-[#1FB6D4]">
                      <select
                        value={form.ctcCurrency}
                        onChange={(e) => set("ctcCurrency", e.target.value as "inr" | "usd")}
                        className="border-r border-gray-300 bg-gray-50 px-3 py-2.5 text-sm outline-none"
                      >
                        <option value="inr">₹ (INR)</option>
                        <option value="usd">$ (USD)</option>
                      </select>
                      <input value={form.ctc} onChange={(e) => set("ctc", e.target.value.replace(/[^0-9,]/g, ""))} className="w-full px-4 py-2.5 text-[15px] outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className={labelCls}>Eg.4,50,000</label>
                    <input value={form.ctcExample} onChange={(e) => set("ctcExample", e.target.value)} placeholder="Eg.4,50,000" className={inputCls} />
                  </div>
                </div>

                <div className="pt-2">
                  {errorMsg && <p className="mb-3 text-sm text-red-600">{errorMsg}</p>}
                  <button type="submit" disabled={sending} className="rounded-full bg-[#1FB6D4] px-10 py-2.5 font-semibold text-white hover:opacity-90 disabled:opacity-60">{sending ? "Sending..." : "Submit"}</button>
                </div>
              </form>
            )}
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
              <Link to="/leadership" className="hover:text-[#1FB6D4]">Leadership Team</Link>
              <Link to="/verticals" className="hover:text-[#1FB6D4]">Value Verticals</Link>
              <Link to="/#jobs" className="hover:text-[#1FB6D4]">Job Boards</Link>
              <Link to="/contact" className="hover:text-[#1FB6D4]">Contact Us</Link>
            </nav>
          </div>
          <div className="mt-8 flex items-center gap-5 text-[#6c6c6c]">
            <a href="#" aria-label="Instagram"><Instagram className="h-6 w-6" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="h-6 w-6" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="h-6 w-6" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
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