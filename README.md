# Tree Growth Simulator

This project is a fractal tree simulator built with React and TypeScript. It allows users to control various tree parameters such as branch length, angle, and animation speed. The tree is rendered using only HTML and CSS and animated frame-by-frame for a natural-looking growth effect.

---

## Live Demo

You can try the [live app here](link.link.com).

---

## Features

- Fractal tree generation using DOM elements (no canvas or SVG)
- Real-time controls for:
  - Number of branches per level
  - Initial branch length
  - Branch angle
  - Branch width
  - Scale factor (length reduction per level)
  - Leaf size and color
  - Frame rate (animation speed)
- Start / Pause button to control the growth animation
- Reset button to start over
- Smart rendering: if any key parameter exceeds 50 units, the animation is skipped and the final tree is rendered immediately to avoid performance issues

---

## Tech Stack

| Technology     | Description                         |
|----------------|-------------------------------------|
| React          | For building the UI                 |
| TypeScript     | Strict typing for maintainable code |
| HTML/CSS       | DOM-based tree rendering            |
| No libraries   | All logic built from scratch        |

---

## Project Structure

```bash
src/
├── components/
│   ├── TreeRenderer.tsx      # Recursive tree rendering logic
│   └── ControlPanel.tsx      # UI for controlling parameters
├── types/
│   └── index.ts              # Type definitions for parameters
├── App.tsx                   # Main component with state
├── index.tsx                 # Entry point
└── styles.css                # Base styles
```

---

## Performance

The app can render up to around 500 branches before browser performance begins to degrade. It uses CSS `transform` and `position: absolute` to avoid reflows and keep animations smooth.

Performance triggers:

- If the initial branch length, branch width, angle, or leaf size is over 50 units, the tree is rendered in full immediately rather than animated
- Target frame rate is adjustable via the control panel

---

## Getting Started

Clone the repo and start the dev server:

```bash
git clone https://github.com/sahibsethi17/tree-growth-simulator.git
cd tree-growth-simulator
npm install
npm run dev
```

---

## Deployment

You can deploy this app to Vercel, Netlify, or GitHub Pages.

Example (Vercel):

```bash
npm run build
vercel --prod
```

Make sure to include the `index.html` in the public folder and set up correct base paths for GitHub Pages if applicable.

---

## Optional Improvements

- Option to save the animation as a video or GIF
- More complex leaf shapes or seasonal themes
- Responsiveness for smaller screen sizes

---

## Author

This project was created for the M251 Full Stack Engineering Challenge.

Contact: [your email or GitHub profile]
