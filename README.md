# Wikipedia Article Template

Interactive UX prototype template for Wikipedia article pages, built with Vue 3 and Wikimedia Codex design system.

## Overview

This template replicates the Wikipedia article experience with both **Read** and **Edit** modes, designed for UX testing and prototyping. It prioritizes design fidelity over production code quality.

## Features

### Read Mode
- Wikipedia header with search functionality
- Article layout with text content and infobox
- Table of Contents sidebar on the left and Tools panel on the right (Vector22)
- Minerva (mobile skin) layout with accordion sections and related content
- Skin switcher in the header (Vector22 / Minerva)
- Responsive behavior (sidebar panels collapse at breakpoint-tablet from 1119px screens)

### Edit Mode
- Loading overlay with ProgressBar on mode switch
- Editor toolbar with options
- Editable article content with automatic change detection

## Tech Stack

- **Vue 3** (Composition API with `<script setup>`)
- **Wikimedia Codex** - Official design system
- **Vite** - Build tool
- **Custom CSS** - No Tailwind or other CSS frameworks

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

Open the local dev URL shown in the terminal.

## Project Structure

```
src/
├── components/
│   └── WikipediaPage.vue    # Main article component
├── assets/
│   └── lorde-1980.png        # Local infobox image
├── App.vue                   # App wrapper
└── style.css                 # Global styles
```

## Customization

### Content
Edit article content directly in `WikipediaPage.vue`:
- Text sections (intro, Early life, Career)
- Infobox data
- Images (update `audreImage` constant)
  
### Skins
- Vector22 is the default skin
- Minerva (mobile) is selectable via the header menu

### Codex Design System
This project uses the Codex Wikimedia design system. Reference:
- [Codex Design Tokens](https://doc.wikimedia.org/codex/latest/design-tokens/)
- [Codex Components](https://doc.wikimedia.org/codex/latest/components/overview.html)
- [Codex Icons](https://doc.wikimedia.org/codex/latest/icons/all-icons.html)

## Contributing

This is a UX prototype template. When making changes:
1. Keep design fidelity as the top priority
2. Use Codex components and tokens
3. Test on different screen sizes
4. Avoid over-engineering - this is for user testing

## License

This template is for internal UX prototyping and testing.

---

**Note**: This is an interactive prototype, not production code. It uses fake data and simplified interactions for UX testing purposes.
