import { profile } from '../data/profile.js'

function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 border-t border-c-line">
      <p className="font-mono text-[11px] text-c-faint break-words">
        // last deployed 2026 — built with React &amp; Tailwind, by {profile.name}
      </p>
    </footer>
  )
}

export default Footer
