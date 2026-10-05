import { User } from "lucide-react";
import { skills } from "../data/skills.js";
import { useScrollReveal } from "../hooks/useScrollReveal.js";

function AboutSection({ reduced }) {
  const reveal = useScrollReveal(1);
  const isVisible = reduced ? true : reveal.visible[0];

  const skillChips = [];
  for (let i = 0; i < skills.length; i++) {
    skillChips.push(
      <li
        key={skills[i]}
        className="font-mono text-[12.5px] px-3 py-1.5 rounded-full border border-c-line2 text-c-body hover:border-c-accent hover:text-c-text transition-colors duration-200"
      >
        {skills[i]}
      </li>,
    );
  }

  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 max-w-4xl border-t border-c-line"
    >
      <div className="font-mono text-[12px] text-c-muted mb-3 flex items-center gap-2">
        <User className="w-3.5 h-3.5" aria-hidden="true" />
        <span>about.tsx</span>
      </div>
      <div
        ref={reveal.setRef(0)}
        className={`transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <h2 className="font-sans text-[26px] md:text-[32px] font-semibold text-c-text mb-6">
          About
        </h2>
        <p className="font-sans text-[15px] md:text-[16px] text-c-body leading-relaxed max-w-2xl mb-4">
          I'm a Computer Science student at Damietta University who likes taking
          a project from a rough idea to something people can actually click
          through. I build with React, Next.js and TypeScript, and my CS
          background in data structures, algorithms, databases and networking
          helps me reason about how a front end behaves once real data arrives.
        </p>
        <p className="font-sans text-[15px] md:text-[16px] text-c-body leading-relaxed max-w-2xl mb-8">
          I care about pages that load fast and work with a keyboard. I'm based
          in Damietta, Egypt, and I'm looking for a front-end internship or
          junior role (remote, hybrid or on-site) where I can learn from a team
          and ship real features.
        </p>
        <ul
          className="flex flex-wrap gap-2.5 list-none p-0 m-0"
          aria-label="Skills"
        >
          {skillChips}
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
