import { ArrowUpRight, Github } from 'lucide-react'
import DiffBlock from './DiffBlock.jsx'
import { projectHref } from '../hooks/useHashRoute.js'

function CaseStudyCard({ study, isVisible, setRef }) {
  const chips = []
  for (let i = 0; i < study.stack.length; i++) {
    chips.push(
      <span key={study.stack[i]} className="font-mono text-[11px] px-2 py-1 rounded border border-c-line2 text-c-soft">
        {study.stack[i]}
      </span>
    )
  }

  return (
    <article
      ref={setRef}
      className={`rounded-lg border border-c-line bg-c-panel overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="flex items-center justify-between gap-3 px-5 md:px-7 py-4 border-b border-c-line">
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-[13px] text-c-accent shrink-0">{study.tag}</span>
          <span className="font-mono text-[13px] text-c-muted truncate">{study.name}</span>
        </div>
        <span className="font-mono text-[11px] text-c-green hidden sm:inline shrink-0">{study.metric}</span>
      </div>

      <div className="px-5 md:px-7 py-6">
        <h3 className="font-sans text-[19px] md:text-[22px] font-semibold text-c-text mb-5">{study.title}</h3>

        <div className="grid md:grid-cols-3 gap-5 mb-2">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-c-red mb-2">Problem</p>
            <p className="font-sans text-[14px] text-c-body leading-relaxed">{study.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-c-green mb-2">Solution</p>
            <p className="font-sans text-[14px] text-c-body leading-relaxed">{study.solution}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-c-amber mb-2">Result</p>
            <p className="font-sans text-[14px] text-c-body leading-relaxed">{study.result}</p>
          </div>
        </div>

        <DiffBlock lines={study.diff} />

        <div className="flex flex-wrap gap-2 mt-5">{chips}</div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 pt-5 border-t border-c-line">
          <a
            href={projectHref(study.slug)}
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-c-accent hover:text-c-accent-hover transition-colors duration-200"
          >
            Read case study
            <span className="sr-only"> for {study.title}</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={study.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-c-body hover:text-c-text transition-colors duration-200"
          >
            Live demo
            <span className="sr-only"> of {study.title} (opens in a new tab)</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href={study.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[13px] text-c-body hover:text-c-text transition-colors duration-200"
          >
            <Github className="w-4 h-4" aria-hidden="true" />
            GitHub
            <span className="sr-only"> repository for {study.title} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  )
}

export default CaseStudyCard
