import { ArrowUpRight, Download, FileCode2 } from "lucide-react";
import { useTypedText } from "../hooks/useTypedText.js";
import { profile } from "../data/profile.js";

function GutterLine({ number, children, highlight }) {
  return (
    <div className="flex gap-4 md:gap-6">
      <span className="select-none text-c-dim font-mono text-[13px] md:text-[14px] w-6 md:w-8 text-right shrink-0 pt-[2px]">
        {number}
      </span>
      <span
        className={`font-mono text-[13px] md:text-[15px] leading-7 min-w-0 break-words ${highlight ? "text-c-accent" : "text-c-text2"}`}
      >
        {children}
      </span>
    </div>
  );
}

function Hero({ reduced, cvAvailable }) {
  const nameTyping = useTypedText(profile.name, 300, reduced);
  const roleTyping = useTypedText(profile.role, 1100, reduced);

  return (
    <section id="home" className="px-6 md:px-16 pt-16 md:pt-24 pb-20 max-w-4xl">
      <h1 className="sr-only">
        {profile.name}, {profile.role}
      </h1>
      <div
        className="font-mono text-[12px] text-c-muted mb-6 flex items-center gap-2"
        aria-hidden="true"
      >
        <FileCode2 className="w-3.5 h-3.5" />
        <span>home.tsx</span>
      </div>
      <div className="space-y-1" aria-hidden="true">
        <GutterLine number={1}>
          <span className="text-c-muted">const</span>{" "}
          <span className="text-c-green">developer</span> = {"{"}
        </GutterLine>
        <GutterLine number={2}>
          <span className="pl-4 text-c-muted">name:</span>{" "}
          <span className="text-c-amber">
            "{nameTyping.text}
            {!nameTyping.done && <span className="animate-pulse">|</span>}"
          </span>
          ,
        </GutterLine>
        <GutterLine number={3} highlight>
          <span className="pl-4 text-c-muted">role:</span>{" "}
          <span className="text-c-amber">
            "{roleTyping.text}
            {roleTyping.text.length > 0 && !roleTyping.done && (
              <span className="animate-pulse">|</span>
            )}
            "
          </span>
        </GutterLine>
        <GutterLine number={4}>{"}"}</GutterLine>
      </div>

      <p className="mt-10 font-sans text-[15px] md:text-[17px] text-c-body leading-relaxed max-w-xl">
        I build responsive, accessible web apps with React and Next.js. I'm a
        Computer Science student at Damietta University, looking for a front-end
        internship or junior role. Below are my projects, written up the way I'd
        walk you through them in an interview: what the problem was, what I
        built, and how it works.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 bg-c-accent text-c-bg font-mono text-[13px] font-medium px-5 py-2.5 rounded-md hover:bg-c-accent-hover transition-colors duration-200"
        >
          View case studies
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 font-mono text-[13px] text-c-body px-5 py-2.5 rounded-md border border-c-line2 hover:border-c-accent hover:text-c-text transition-colors duration-200"
        >
          Get in touch
        </a>
        {cvAvailable && (
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 font-mono text-[13px] text-c-body px-5 py-2.5 rounded-md border border-c-line2 hover:border-c-accent hover:text-c-text transition-colors duration-200"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            Download CV
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;
