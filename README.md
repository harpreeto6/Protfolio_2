
# Portfolio (Protfolio_2)

This is my personal portfolio website.

If you only know Java (and not frontend): think of this project as a program that starts in one “main file”, then builds the page by calling a bunch of UI functions (components) like `Hero()`, `About()`, `Projects()`, etc.

## What’s Inside (Simple Explanation)

### Vite
Vite is the “tool that runs and builds the website”.

- In development it starts a local server (like running your program locally).
- In production it bundles/optimizes everything into a `dist/` folder (like producing a release build).

### React
React is the UI library.

- You write the page as reusable components (functions) that return UI.
- React updates the page when state changes (similar idea to updating objects and re-rendering a view).

### TypeScript
TypeScript is JavaScript with types.

- It helps catch mistakes earlier (similar to the difference between Java and plain JavaScript).

### Tailwind CSS
Tailwind is a styling system.

- Instead of writing lots of CSS files, you write utility class names like `text-xl`, `py-20`, `bg-background`.

### shadcn/ui + Radix UI
These are prebuilt UI components (buttons, cards, dialogs, etc.).

- shadcn/ui gives you copy-pasteable components that live in your repo under `src/components/ui/`.
- Radix UI provides the accessible behavior under the hood.

### React Router
This handles pages/routes.

- This portfolio mostly uses one route (`/`) and is built as a single scrolling page.

### TanStack React Query (React Query)
This is a data-fetching / caching helper.

- It’s already wired up in the app provider.
- You can use it later if you add API calls (not required for the current static portfolio content).

## How The Website Runs (Step-by-Step)

1. The browser loads `index.html`.
2. React starts in [src/main.tsx](src/main.tsx) (this is the closest thing to a “main method”).
3. [src/App.tsx](src/App.tsx) sets up providers (toasts, tooltips, React Query) and routing.
4. The route `/` renders [src/pages/Index.tsx](src/pages/Index.tsx).
5. [src/pages/Index.tsx](src/pages/Index.tsx) renders the sections in order:
   - Navigation → Hero → About → Projects → Experience → Contact → Footer
6. The navbar links use anchors like `#about` to jump/scroll to sections.

## Where To Change Content

- Page layout order: [src/pages/Index.tsx](src/pages/Index.tsx)
- Hero section text + resume button: [src/components/Hero.tsx](src/components/Hero.tsx)
- About (skills + education arrays): [src/components/About.tsx](src/components/About.tsx)
- Projects list (projects array): [src/components/Projects.tsx](src/components/Projects.tsx)
- Work experience list (experiences array): [src/components/Experience.tsx](src/components/Experience.tsx)
- Contact info + form UI: [src/components/Contact.tsx](src/components/Contact.tsx)
- Footer links: [src/components/Footer.tsx](src/components/Footer.tsx)

## Styling / Theme

- The site colors are CSS variables in [src/index.css](src/index.css) (for example `--background`, `--primary`).
- Tailwind reads those variables through classes like `bg-background` and `text-foreground`.

## Running Locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (this project uses port `8080` by default).

## How To Stop / Close The App

When you run `npm run dev` (or `npm run preview`), the website keeps running because the terminal is hosting a local server.

- To stop it: click the terminal and press `Ctrl + C`.
- To close it: you can also just close the terminal window/tab (but `Ctrl + C` is the normal way).

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo is set up to deploy to GitHub Pages using `gh-pages`.

1. Make sure the base path matches your repo name:
   - Vite base is set in [vite.config.ts](vite.config.ts)
   - React Router basename is set in [src/App.tsx](src/App.tsx)
2. Deploy:

```bash
npm run deploy
```

Note: `predeploy` copies `dist/index.html` to `dist/404.html` to support refreshing deep links on GitHub Pages.

## Resume PDF

The resume download links point to `/Harpreet_Singh_Resume.pdf`.
Place that file in [public](public) so it is served from the site root.

