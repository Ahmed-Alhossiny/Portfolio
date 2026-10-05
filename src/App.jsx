import { useEffect, useRef, useState } from "react";
import EditorChrome from "./components/EditorChrome.jsx";
import Hero from "./components/Hero.jsx";
import WorkSection from "./components/WorkSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import ProjectPage from "./components/ProjectPage.jsx";
import Footer from "./components/Footer.jsx";
import { useReducedMotion } from "./hooks/useReducedMotion.js";
import { useHashRoute } from "./hooks/useHashRoute.js";
import { useTheme } from "./hooks/useTheme.js";
import { profile } from "./data/profile.js";

const SECTION_ORDER = ["home", "work", "about", "contact"];

function App() {
  const reduced = useReducedMotion();
  const route = useHashRoute();
  const themeState = useTheme();
  const cvAvailable = true;
  const [activeSection, setActiveSection] = useState("home");
  const pendingSection = useRef(null);
  const previousPage = useRef(route.page);

  useEffect(
    function () {
      if (route.page === "project") {
        setActiveSection("work");
        return;
      }

      let ticking = false;

      function updateActiveSection() {
        let current = SECTION_ORDER[0];
        for (let i = 0; i < SECTION_ORDER.length; i++) {
          const node = document.getElementById(SECTION_ORDER[i]);
          if (node && node.getBoundingClientRect().top <= 120) {
            current = SECTION_ORDER[i];
          }
        }
        setActiveSection(current);
        ticking = false;
      }

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(updateActiveSection);
          ticking = true;
        }
      }

      window.addEventListener("scroll", onScroll, { passive: true });
      return function () {
        window.removeEventListener("scroll", onScroll);
      };
    },
    [route.page],
  );

  useEffect(
    function () {
      if (previousPage.current === "project" && route.page === "home") {
        const target = pendingSection.current || "work";
        pendingSection.current = null;
        const node = document.getElementById(target);
        if (node) {
          node.scrollIntoView({ behavior: "instant", block: "start" });
          setActiveSection(target);
        }
      }
      previousPage.current = route.page;
    },
    [route.page],
  );

  function handleNavClick(id) {
    if (route.page === "project") {
      pendingSection.current = id;
      window.location.hash = "#" + id;
      return;
    }
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      });
    }
    setActiveSection(id);
  }

  function handleSkipClick(event) {
    event.preventDefault();
    const main = document.getElementById("main-content");
    if (main) {
      main.focus();
    }
  }

  function handleBack() {
    handleNavClick("work");
  }

  const isProject = route.page === "project";
  let locationLabel = "~/" + activeSection;
  if (isProject && route.slug) {
    locationLabel = "~/work/" + route.slug;
  }

  let content;
  if (isProject) {
    content = <ProjectPage slug={route.slug} onBack={handleBack} />;
  } else {
    content = (
      <>
        <Hero reduced={reduced} cvAvailable={cvAvailable} />
        <WorkSection reduced={reduced} />
        <AboutSection reduced={reduced} />
        <ContactSection cvAvailable={cvAvailable} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-c-bg text-c-text">
      <a
        href="#main-content"
        onClick={handleSkipClick}
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-c-accent focus:text-c-bg focus:px-4 focus:py-2 focus:rounded-md focus:font-mono focus:text-[13px]"
      >
        Skip to content
      </a>
      <EditorChrome
        activeSection={activeSection}
        onNavClick={handleNavClick}
        locationLabel={locationLabel}
        theme={themeState.theme}
        onToggleTheme={themeState.toggleTheme}
      />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
