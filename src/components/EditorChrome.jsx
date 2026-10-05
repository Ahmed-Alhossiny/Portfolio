import { Circle, Moon, Sun, Terminal } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "home.tsx" },
  { id: "work", label: "work.tsx" },
  { id: "about", label: "about.tsx" },
  { id: "contact", label: "contact.tsx" },
];

function EditorChrome({
  activeSection,
  onNavClick,
  locationLabel,
  theme,
  onToggleTheme,
}) {
  const tabs = [];
  for (let i = 0; i < NAV_ITEMS.length; i++) {
    const item = NAV_ITEMS[i];
    const isActive = item.id === activeSection;
    tabs.push(
      <button
        key={item.id}
        type="button"
        onClick={function () {
          onNavClick(item.id);
        }}
        aria-current={isActive ? "true" : undefined}
        className={`shrink-0 whitespace-nowrap px-4 py-3 text-[13px] font-mono border-r border-c-line transition-colors duration-200 border-t-2 focus-visible:outline-offset-[-2px] ${
          isActive
            ? "bg-c-bg text-c-text border-t-c-accent"
            : "bg-c-panel text-c-muted hover:text-c-body border-t-transparent"
        }`}
      >
        {item.label}
      </button>,
    );
  }

  const isDark = theme === "dark";
  const toggleLabel = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="sticky top-0 z-50 bg-c-panel border-b border-c-line">
      <div className="flex items-center justify-between gap-3 px-4 h-9 border-b border-c-line">
        <div className="flex items-center gap-2 shrink-0">
          <Circle
            className="w-[10px] h-[10px] fill-[#FF5F57] text-[#FF5F57]"
            aria-hidden="true"
          />
          <Circle
            className="w-[10px] h-[10px] fill-[#FEBC2E] text-[#FEBC2E]"
            aria-hidden="true"
          />
          <Circle
            className="w-[10px] h-[10px] fill-[#28C840] text-[#28C840]"
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center justify-center gap-1.5 min-w-0 flex-1 text-[12px] font-mono text-c-muted">
          <Terminal className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate">ahmed@portfolio: {locationLabel}</span>
        </div>
        <div className="flex justify-end shrink-0 w-[52px]">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={toggleLabel}
            title={toggleLabel}
            className="inline-flex items-center justify-center w-7 h-7 rounded-md text-c-muted hover:text-c-text hover:bg-c-line transition-colors duration-200"
          >
            {isDark ? (
              <Sun className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Moon className="w-4 h-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <nav aria-label="Section navigation" className="flex">
        {tabs}
      </nav>
    </header>
  );
}

export default EditorChrome;
