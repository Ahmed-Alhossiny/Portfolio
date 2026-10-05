import { useEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, FileCode2, Github } from 'lucide-react'
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies.js'
import { profile } from '../data/profile.js'
import { projectHref } from '../hooks/useHashRoute.js'
import DiffBlock from './DiffBlock.jsx'

const PRIMARY_BUTTON =
  'inline-flex items-center gap-2 bg-c-accent text-c-bg font-mono text-[13px] font-medium px-5 py-2.5 rounded-md hover:bg-c-accent-hover transition-colors duration-200'

const SECONDARY_BUTTON =
  'inline-flex items-center gap-2 font-mono text-[13px] text-c-body px-5 py-2.5 rounded-md border border-c-line2 hover:border-c-accent hover:text-c-text transition-colors duration-200'

function ProjectPage({ slug, onBack }) {
  const study = getCaseStudyBySlug(slug)
  const headingRef = useRef(null)

  useEffect(
    function () {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      if (headingRef.current) {
        headingRef.current.focus({ preventScroll: true })
      }
      const previousTitle = document.title
      if (study) {
        document.title = study.title + ' | ' + profile.name
      }
      return function () {
        document.title = previousTitle
      }
    },
    [slug]
  )

  const backButton = (
    <button
      type="button"
      onClick={onBack}
      className="inline-flex items-center gap-2 font-mono text-[13px] text-c-muted hover:text-c-text transition-colors duration-200 mb-8"
    >
      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
      All case studies
    </button>
  )

  if (!study) {
    return (
      <section className="px-6 md:px-16 pt-12 md:pt-16 pb-20 max-w-4xl">
        {backButton}
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="font-sans text-[26px] md:text-[34px] font-semibold text-c-text mb-4 focus:outline-none"
        >
          Project not found
        </h1>
        <p className="font-sans text-[15px] text-c-body leading-relaxed max-w-xl">
          This case study doesn't exist. Go back to the list to pick one of the three projects.
        </p>
      </section>
    )
  }

  const featureItems = []
  for (let i = 0; i < study.features.length; i++) {
    featureItems.push(
      <li key={i} className="flex gap-3 font-sans text-[14px] md:text-[15px] text-c-body leading-relaxed">
        <span className="font-mono text-c-green shrink-0" aria-hidden="true">
          +
        </span>
        <span>{study.features[i]}</span>
      </li>
    )
  }

  const stackRows = []
  for (let i = 0; i < study.stackTable.length; i++) {
    const row = study.stackTable[i]
    stackRows.push(
      <div key={row.area} className="grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-6 py-3 border-b border-c-line">
        <dt className="font-mono text-[12.5px] text-c-muted">{row.area}</dt>
        <dd className="font-sans text-[14px] text-c-body leading-relaxed m-0">{row.tools}</dd>
      </div>
    )
  }

  let nextStudy = caseStudies[0]
  for (let i = 0; i < caseStudies.length; i++) {
    if (caseStudies[i].slug === study.slug) {
      nextStudy = caseStudies[(i + 1) % caseStudies.length]
    }
  }

  return (
    <section className="px-6 md:px-16 pt-12 md:pt-16 pb-20 max-w-4xl">
      {backButton}

      <div className="font-mono text-[12px] text-c-muted mb-3 flex items-center gap-2">
        <FileCode2 className="w-3.5 h-3.5" aria-hidden="true" />
        <span>work/{study.slug}.tsx</span>
      </div>
      <h1
        ref={headingRef}
        tabIndex={-1}
        className="font-sans text-[26px] md:text-[34px] font-semibold text-c-text mb-5 focus:outline-none"
      >
        {study.title}
      </h1>
      <p className="font-sans text-[15px] md:text-[16px] text-c-body leading-relaxed max-w-2xl mb-7">
        {study.description}
      </p>

      <div className="flex flex-wrap items-center gap-4 mb-12">
        <a href={study.demo} target="_blank" rel="noopener noreferrer" className={PRIMARY_BUTTON}>
          Live demo
          <span className="sr-only"> (opens in a new tab)</span>
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
        <a href={study.repo} target="_blank" rel="noopener noreferrer" className={SECONDARY_BUTTON}>
          <Github className="w-4 h-4" aria-hidden="true" />
          Source code
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-c-red mb-2">Problem</h2>
          <p className="font-sans text-[14px] text-c-body leading-relaxed">{study.problem}</p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-c-green mb-2">Solution</h2>
          <p className="font-sans text-[14px] text-c-body leading-relaxed">{study.solution}</p>
        </div>
        <div>
          <h2 className="font-mono text-[11px] uppercase tracking-wider text-c-amber mb-2">Result</h2>
          <p className="font-sans text-[14px] text-c-body leading-relaxed">{study.result}</p>
        </div>
      </div>

      <h2 className="font-sans text-[20px] font-semibold text-c-text mb-1">What changed</h2>
      <DiffBlock lines={study.diff} />

      <h2 className="font-sans text-[20px] font-semibold text-c-text mt-12 mb-4">Features</h2>
      <ul className="space-y-2.5 list-none p-0 m-0 max-w-2xl">{featureItems}</ul>

      <h2 className="font-sans text-[20px] font-semibold text-c-text mt-12 mb-3">Tech stack</h2>
      <dl className="m-0 border-t border-c-line">{stackRows}</dl>

      <div className="mt-14 pt-8 border-t border-c-line flex flex-wrap items-center justify-between gap-4">
        <button type="button" onClick={onBack} className={SECONDARY_BUTTON}>
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          All case studies
        </button>
        <a href={projectHref(nextStudy.slug)} className={SECONDARY_BUTTON}>
          Next: {nextStudy.title}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default ProjectPage
