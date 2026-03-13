# Portfolio Website

Personal portfolio website built with React and Vite, deployed to Firebase Hosting.

## Tech Stack

- **Framework:** React 19 (class components)
- **Bundler:** Vite 6 (dev server on port 3000)
- **UI Library:** MUI (Material UI) v7 with Emotion styling
- **Routing:** React Router DOM v7
- **Animations:** AOS (Animate On Scroll), react-simple-typewriter
- **Icons:** react-icons, @mui/icons-material
- **CSS:** Plain CSS (per-component `.css` files), stylelint with standard config
- **Hosting:** Firebase Hosting (builds to `dist/`)

## Project Structure

```
src/
  App.jsx              # Root component (class-based)
  main.jsx             # Entry point
  Components/
    Navigation/        # Nav bar
    Homepage/          # Hero/landing section
    Education/         # Education timeline
    Experience/        # Work experience
    Skills/            # Skills section
    Projects/          # Projects showcase
    Certifications/    # Certifications display
    Contact/           # Contact form/info
```

Each component has its own `.jsx` and `.css` file in a co-located folder.

## Commands

- `npm run dev` — Start Vite dev server on port 3000
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview production build

## Important Rules

- **Do NOT run npm commands.** The user will handle all npm operations themselves.
- CSS uses 2-space indentation and double quotes (enforced by stylelint).
