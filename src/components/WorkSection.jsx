import { useState } from 'react'
import { FileCode2 } from 'lucide-react'
import { caseStudies, getFilterTags } from '../data/caseStudies.js'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import CaseStudyCard from './CaseStudyCard.jsx'

function WorkSection({ reduced }) {
  const reveal = useScrollReveal(caseStudies.length)
  const [activeFilter, setActiveFilter] = useState('All')
  const options = ['All'].concat(getFilterTags())

  const chips = []
  for (let i = 0; i < options.length; i++) {
    const option = options[i]
    const isActive = option === activeFilter
    chips.push(
      <button
        key={option}
        type="button"
        aria-pressed={isActive}
        onClick={function () {
          setActiveFilter(option)
        }}
        className={`font-mono text-[12.5px] px-3.5 py-2 rounded-full border transition-colors duration-200 ${
          isActive
            ? 'border-c-accent text-c-text bg-c-panel'
            : 'border-c-line2 text-c-body hover:border-c-accent hover:text-c-text'
        }`}
      >
        {option}
      </button>
    )
  }

  const cards = []
  let shown = 0
  for (let i = 0; i < caseStudies.length; i++) {
    const study = caseStudies[i]
    const matches = activeFilter === 'All' || study.filters.indexOf(activeFilter) !== -1
    if (matches) {
      shown += 1
    }
    cards.push(
      <div key={study.id} hidden={!matches}>
        <CaseStudyCard
          study={study}
          isVisible={reduced ? true : reveal.visible[i]}
          setRef={reveal.setRef(i)}
        />
      </div>
    )
  }

  return (
    <section id="work" className="px-6 md:px-16 py-20 max-w-4xl border-t border-c-line">
      <div className="font-mono text-[12px] text-c-muted mb-3 flex items-center gap-2">
        <FileCode2 className="w-3.5 h-3.5" aria-hidden="true" />
        <span>work.tsx</span>
      </div>
      <h2 className="font-sans text-[26px] md:text-[32px] font-semibold text-c-text mb-2">Case studies</h2>
      <p className="font-sans text-[14px] text-c-soft mb-6 max-w-xl">
        Three shipped projects, written the way I'd explain them out loud.
      </p>
      <div role="group" aria-label="Filter projects by technology" className="flex flex-wrap gap-2.5 mb-10">
        {chips}
      </div>
      <p role="status" className="sr-only">
        Showing {shown} of {caseStudies.length} projects
      </p>
      <div className="space-y-8">{cards}</div>
    </section>
  )
}

export default WorkSection
