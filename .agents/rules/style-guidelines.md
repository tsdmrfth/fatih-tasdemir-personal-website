---
alwaysApply: true
---

# Style Guidelines

## ⚡ Global Architecture (Unique to this Project)

**⚠️ CRITICAL:** This project uses **Tailwind CSS via CDN** script in `index.html`. 
-   **DO NOT** attempt to install `tailwindcss` via npm.
-   **DO NOT** look for `tailwind.config.js` or `postcss.config.js`.
-   **Configuration Truth:** The Tailwind configuration is defined **inline** in `index.html` within the `<script>` tag. Modifying the theme requires editing `index.html`.

## 🎨 Cyberpunk Theme System

### Color Palette (`bg-cyber-*`, `text-cyber-*`)
The following custom colors are defined in the globally injected configuration:

| Name | Color | Hex | Usage |
| :--- | :--- | :--- | :--- |
| `cyber-black` | ⚫ | `#050505` | Main page background |
| `cyber-dark` | 🌑 | `#0a0a0f` | Scrollbar tracks, darker panels |
| `cyber-panel` | ⬛ | `#12121a` | Card/Section backgrounds |
| `cyber-cyan` | 🔵 | `#00f0ff` | Primary accent, glows, active states |
| `cyber-magenta` | 🔴 | `#ff003c` | Secondary accent, labels, highlights |
| `cyber-yellow` | 🟡 | `#fcee0a` | Warnings, special highlights |
| `cyber-dim` | 🌫️ | `rgba(0, 240, 255, 0.1)` | Subtle overlaps |

### Typography
-   **Primary (UI/Body):** `font-sans` -> **Inter**
-   **Technical (Code/Data):** `font-mono` -> **JetBrains Mono**

## 💅 Styling Patterns

### 1. Neon Glow Effects
Achieve the signature cyberpunk glow using shadows or specific classes.
-   **Text Glow:** `.glow-text` (defined in `index.html` styles) or drop-shadows.
-   **Box Glow (Cyan):** `shadow-[0_0_10px_#00f0ff]` or `shadow-[0_0_20px_rgba(0,0,0,0.5)]` for depth.
-   **Borders:** Subtle borders `border border-white/10` are used on almost all cards. Active borders use `border-cyber-cyan/50`.

### 2. Glassmorphism & Overlays
-   **Glass:** `bg-cyber-black/80 backdrop-blur-md` (used in Navbar).
-   **Scanlines:** The global `.scanline` class handles the CRT monitor effect overlay.
-   **Grid:** A fixed background grid overlay is present in `App.tsx` using `bg-grid-pattern`.

### 3. Layout & Structure
-   **Container:** `max-w-5xl mx-auto` is the standard content width.
-   **Section Spacing:** `py-20` is the standard vertical spacing for sections.
-   **Clean Lines:** Use `1px` borders (`h-[1px]`) for section dividers.

### 4. Interactive Elements
-   **Hover States:**
    -   Text: `text-gray-400 group-hover:text-gray-200`
    -   Accents: `group-hover:text-cyber-cyan`
-   **Transitions:** Always include `transition-colors duration-300` or similar for soft UI changes.
-   **Scrollbar:** Custom cyberpunk scrollbar is globally defined (`::-webkit-scrollbar`).

## 🚫 Anti-Patterns

1.  **Avoid Standard Colors:** Do not use `bg-blue-500` or `text-red-500`. Use `cyber-cyan` and `cyber-magenta` instead.
2.  **No Component CSS:** Avoid creating new `.css` files for components. Use Tailwind utilities or, if absolutely necessary, add to the `<style>` block in `index.html`.
3.  **No Light Mode:** This is a strictly dark-mode/cyberpunk aesthetic application.

## 🛠️ Modifying the Theme
If you need to add a new color or animation:
1.  Open `index.html`.
2.  Locate the `tailwind.config` object in the script tag.
3.  Add the new property to the `extend` object.
