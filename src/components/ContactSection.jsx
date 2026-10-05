import { Download, Github, Linkedin, Mail, MessageSquare } from "lucide-react";
import { profile } from "../data/profile.js";

const ICON_BUTTON =
  "inline-flex items-center justify-center w-11 h-11 rounded-md border border-c-line2 text-c-body hover:border-c-accent hover:text-c-text transition-colors duration-200";

function ContactSection({ cvAvailable }) {
  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-20 max-w-4xl border-t border-c-line"
    >
      <div className="font-mono text-[12px] text-c-muted mb-3 flex items-center gap-2">
        <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
        <span>contact.tsx</span>
      </div>
      <h2 className="font-sans text-[26px] md:text-[32px] font-semibold text-c-text mb-4">
        Let's talk
      </h2>
      <p className="font-sans text-[15px] text-c-body leading-relaxed max-w-xl mb-8">
        Have a role, a project, or just a question about how one of these was
        built? The fastest way to reach me is email.
      </p>

      <div className="rounded-lg border border-c-line bg-c-bg p-5 md:p-6 font-mono text-[13px] mb-8 break-words">
        <p className="text-c-green">$ contact --ahmed</p>
        <p className="text-c-muted mt-2">Resolving preferred channel...</p>
        <p className="text-c-text mt-1">
          &gt; email: <span className="text-c-amber">{profile.email}</span>
        </p>
        <p className="text-c-text mt-1">
          &gt; phone: <span className="text-c-amber">{profile.phone}</span>
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <a
          href={"mailto:" + profile.email}
          className="inline-flex items-center gap-2 bg-c-accent text-c-bg font-mono text-[13px] font-medium px-5 py-2.5 rounded-md hover:bg-c-accent-hover transition-colors duration-200"
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          Email me
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile (opens in a new tab)"
          className={ICON_BUTTON}
        >
          <Github className="w-[18px] h-[18px]" aria-hidden="true" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile (opens in a new tab)"
          className={ICON_BUTTON}
        >
          <Linkedin className="w-[18px] h-[18px]" aria-hidden="true" />
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

export default ContactSection;
