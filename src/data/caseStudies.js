export const caseStudies = [
  {
    id: 'cs-01',
    slug: 'bazaro',
    tag: '01',
    name: 'bazaro-market.vercel.app',
    title: 'Bazaro — E-commerce Storefront',
    description:
      'Bazaro is a full-featured e-commerce storefront built with Next.js 16 and React 19. Shoppers can browse and search products, build a cart as a guest, and check out with cash on delivery or by card once they sign in.',
    problem:
      'Many online stores ask shoppers to create an account before they can add a single item, which puts friction in front of the first purchase.',
    solution:
      'Built a full storefront where guests can browse, search and fill a cart right away. Signing in unlocks checkout, and the guest cart is carried over into the account.',
    result:
      'A deployed storefront with product browsing and search, a guest cart, and checkout by cash on delivery or by card once signed in.',
    metric: 'Next.js 16 · React 19',
    diff: [
      { type: 'context', text: 'Cart and checkout' },
      { type: 'removed', text: 'Account required before anything goes in the cart' },
      { type: 'added', text: 'Guests build a cart first and keep it after signing in' },
      { type: 'added', text: 'Checkout by cash on delivery, or by card once signed in' },
      { type: 'context', text: 'Browse and search stay open to everyone' },
    ],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'NextAuth', 'TanStack Query'],
    filters: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Browse and search products',
      'Build a cart as a guest',
      'Checkout with cash on delivery, or by card once signed in',
      'Credentials sign-in with NextAuth and JWT sessions',
      'Server Components, Server Actions and Route Handlers for data',
      'Forms validated with Formik and Zod',
    ],
    stackTable: [
      { area: 'Framework', tools: 'Next.js 16 (App Router), React 19, TypeScript' },
      { area: 'Styling', tools: 'Tailwind CSS 4, shadcn/ui (base-nova), Base UI, lucide-react' },
      { area: 'Auth', tools: 'NextAuth v4 (Credentials provider, JWT sessions)' },
      { area: 'Data fetching', tools: 'Server Components, Server Actions, Route Handlers, TanStack Query 5' },
      { area: 'Forms', tools: 'Formik, Zod 4, zod-formik-adapter' },
      { area: 'UI components', tools: 'embla-carousel' },
      { area: 'Linting', tools: 'ESLint 9 with eslint-config-next' },
    ],
    repo: 'https://github.com/Ahmed-Alhossiny/Bazaro',
    demo: 'https://bazaro-market.vercel.app',
  },
  {
    id: 'cs-02',
    slug: 'wisp',
    tag: '02',
    name: 'wisp-network.vercel.app',
    title: 'Wisp — Social Feed App',
    description:
      'WISP is a social feed app where you can share posts, follow friends, and interact through likes, comments, bookmarks, and shares, all in a fast, single-page React interface.',
    problem:
      'A social feed has to react instantly to small actions like a like, a comment or a bookmark. Full page reloads make that feel slow and break the flow of scrolling.',
    solution:
      'Built a single-page React app with client-side routing, so posting, following, liking, commenting, bookmarking and sharing all happen without leaving the feed.',
    result:
      'A working social feed deployed on Vercel, with forms handled by React Hook Form and feedback through alerts and dialogs.',
    metric: 'React 19 · Vite',
    diff: [
      { type: 'context', text: 'Feed interactions' },
      { type: 'removed', text: 'A full page reload for every action' },
      { type: 'added', text: 'Like, comment, bookmark and share inside the feed' },
      { type: 'added', text: 'Follow friends and share posts from one interface' },
      { type: 'context', text: 'Client-side routing with React Router 7' },
    ],
    stack: ['React 19', 'Vite', 'React Router 7', 'Tailwind CSS 4', 'Axios', 'React Hook Form'],
    filters: ['React', 'Tailwind CSS'],
    features: [
      'Share posts',
      'Follow friends',
      'Like, comment, bookmark and share',
      'Single-page interface with React Router 7',
      'Forms handled with React Hook Form',
      'Alerts and confirmations with SweetAlert2',
    ],
    stackTable: [
      { area: 'Framework', tools: 'React 19 + Vite' },
      { area: 'Routing', tools: 'React Router 7' },
      { area: 'Styling', tools: 'Tailwind CSS 4 + Font Awesome' },
      { area: 'Forms', tools: 'React Hook Form' },
      { area: 'HTTP client', tools: 'Axios' },
      { area: 'Alerts / dialogs', tools: 'SweetAlert2' },
      { area: 'API', tools: 'Route Academy Posts API' },
    ],
    repo: 'https://github.com/Ahmed-Alhossiny/Wisp',
    demo: 'https://wisp-network.vercel.app',
  },
  {
    id: 'cs-03',
    slug: 'voyo',
    tag: '03',
    name: 'voyo-planner.vercel.app',
    title: 'Voyo — Trip Planner',
    description:
      'Voyo is a trip-planning web app that lets you search for a country, explore practical travel information (local time, currency, languages, public holidays, local events, and a live weather forecast) and save the ones you like to a personal "My Plans" dashboard.',
    problem:
      'Checking the basics of a destination, such as local time, currency, languages, public holidays, events and the weather, means visiting several different sites.',
    solution:
      'Built a trip-planning app where you search for a country and see all of that on one page. Signed-in users save the countries they like to a personal My Plans dashboard backed by Supabase.',
    result:
      'A deployed planner that combines country data, public holidays, local events and a live forecast in a single view, with saved plans per user.',
    metric: 'React 19 · Supabase',
    diff: [
      { type: 'context', text: 'Planning a trip' },
      { type: 'removed', text: 'Time, currency, holidays, events and weather on separate sites' },
      { type: 'added', text: 'One country page with all of it' },
      { type: 'added', text: 'Save countries to a personal My Plans dashboard' },
      { type: 'context', text: 'Accounts and data handled by Supabase' },
    ],
    stack: ['React 19', 'Vite', 'Supabase', 'Tailwind CSS 4', 'Open-Meteo', 'Ticketmaster API'],
    filters: ['React', 'Tailwind CSS', 'Supabase'],
    features: [
      'Search for any country',
      'Local time, currency and languages',
      'Public holidays and local events',
      'Live weather forecast',
      'Save countries to a personal My Plans dashboard',
      'Sign-in and saved data with Supabase (Postgres + Auth)',
    ],
    stackTable: [
      { area: 'Framework', tools: 'React 19' },
      { area: 'Build tool', tools: 'Vite' },
      { area: 'Routing', tools: 'React Router 7' },
      { area: 'Styling', tools: 'Tailwind CSS 4' },
      { area: 'Backend / Auth / DB', tools: 'Supabase (Postgres + Auth)' },
      { area: 'HTTP client', tools: 'Axios' },
      { area: 'Icons', tools: 'Lucide React' },
      { area: 'Alerts / modals', tools: 'SweetAlert2' },
      { area: 'Linting', tools: 'ESLint' },
      { area: 'External APIs', tools: 'Country data API, Nager.Date public holidays, Ticketmaster Discovery API, Open-Meteo weather' },
    ],
    repo: 'https://github.com/Ahmed-Alhossiny/Voyo',
    demo: 'https://voyo-planner.vercel.app',
  },
]

export function getCaseStudyBySlug(slug) {
  for (let i = 0; i < caseStudies.length; i++) {
    if (caseStudies[i].slug === slug) {
      return caseStudies[i]
    }
  }
  return null
}

export function getFilterTags() {
  const tags = []
  for (let i = 0; i < caseStudies.length; i++) {
    const list = caseStudies[i].filters
    for (let j = 0; j < list.length; j++) {
      if (tags.indexOf(list[j]) === -1) {
        tags.push(list[j])
      }
    }
  }
  return tags
}
