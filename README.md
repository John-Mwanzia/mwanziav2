# Terminal Portfolio

A clean, terminal-style developer portfolio inspired by authentic command-line interfaces. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🖥️ Clean terminal aesthetic with bordered blocks
- ⌨️ Interactive command prompt with history (↑/↓)
- 📝 Tab autocomplete
- 📱 Fully responsive
- ⚡ Next.js 15 + React 19
- 🎨 Minimalist design, no flashy effects

## Quick Start

```bash
cd terminal-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization Guide

### 1. Update Personal Info

Edit `app/page.tsx`:

- Change `YOUR_NAME` in the hero section
- Update language percentages in the skills grid
- Modify GitHub stats (repos, followers)
- Add your actual projects with descriptions
- Update contributing section with your OSS work

### 2. Interactive Terminal Commands

Edit `lib/commands.tsx` to customize command outputs:

- `whoami` - Your intro/tagline
- `about` - Your story
- `skills` - Tech stack
- `projects` - Project list
- `contact` - Contact info
- `electronics` - Hobbies (or rename/remove)

### 3. Styling

Colors are in `app/globals.css`:

- Green: `#00ff00`
- Blue: `#00d9ff`
- Yellow: `#ffff00`
- Red: `#ff5555`
- Gray borders: `#333`

### 4. Add New Commands

In `lib/commands.tsx`:

```tsx
export const commands: Record<
  string,
  (args: string[]) => JSX.Element | string
> = {
  // ... existing commands

  blog: () => (
    <div>
      <div>Recent posts:</div>
      <div className="ml-4">→ How I built this portfolio</div>
    </div>
  ),
};
```

Don't forget to add it to the help command!

## Structure

```
terminal-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with font
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation links
│   ├── TerminalBlock.tsx   # Bordered terminal container
│   └── CommandPrompt.tsx   # Interactive terminal
└── lib/
    └── commands.tsx        # Command definitions
```

## Deploy

### Vercel (Recommended)

```bash
npm run build
# Then push to GitHub and connect to Vercel
```

### Other Platforms

Works on any platform that supports Next.js:

- Netlify
- Railway
- Fly.io
- Your own VPS

## Tips

- Keep the terminal blocks clean and readable
- Use consistent spacing between sections
- Don't overdo the effects - simplicity is key
- Test on mobile - terminal UIs can be tricky on small screens
- Add real data instead of placeholders for authenticity

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- JetBrains Mono font

## License

MIT - Feel free to use this as a template for your own portfolio!
# mwanziav2
