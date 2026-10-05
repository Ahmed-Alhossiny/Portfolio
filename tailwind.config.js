export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        c: {
          bg: "var(--c-bg)",
          panel: "var(--c-panel)",
          line: "var(--c-line)",
          line2: "var(--c-line2)",
          text: "var(--c-text)",
          text2: "var(--c-text2)",
          body: "var(--c-body)",
          soft: "var(--c-soft)",
          muted: "var(--c-muted)",
          faint: "var(--c-faint)",
          dim: "var(--c-dim)",
          accent: "var(--c-accent)",
          "accent-hover": "var(--c-accent-hover)",
          green: "var(--c-green)",
          amber: "var(--c-amber)",
          red: "var(--c-red)",
          added: "var(--c-added)",
          removed: "var(--c-removed)",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
