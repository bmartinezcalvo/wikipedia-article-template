# Wikipedia Article Template

Interactive UX prototype template for Wikipedia article pages, built with Vue 3 and Wikimedia Codex design system.

## Overview

This template replicates the Wikipedia article experience with both **Read** and **Edit** modes, designed for UX testing and prototyping. It prioritizes design fidelity over production code quality.

## Features

### Read Mode
- Full article layout with Table of Contents sidebar
- Tools panel on the right
- Responsive design (collapses at 1119px breakpoint)
- Wikipedia header with search functionality
- Article infobox with image and metadata

### Edit Mode
- Complete editor toolbar with formatting options
- Editable article content (contenteditable)
- Undo/Redo/Publish buttons (disabled until content is edited)
- Inline infobox editing
- Automatic change detection
- Full-width layout (no sidebars)

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

Open [http://localhost:5174](http://localhost:5174) in your browser.

## Project Structure

```
src/
├── components/
│   └── WikipediaPage.vue    # Main article component
├── App.vue                   # App wrapper
└── style.css                 # Global styles
```

## Customization

### Content
Edit article content directly in `WikipediaPage.vue`:
- Text sections (intro, Early life, Career)
- Infobox data
- Images (update `audreImage` constant)

### Design Tokens
This project uses Codex design tokens. Reference:
- [Codex Design Tokens](https://doc.wikimedia.org/codex/latest/design-tokens/)
- [Codex Components](https://doc.wikimedia.org/codex/latest/components/overview.html)
- [Codex Icons](https://doc.wikimedia.org/codex/latest/icons/all-icons.html)

### Layout Widths
- Page container: 1596px max
- Article (Read mode): 1067px max
- Article (Edit mode): 1532px max
- TOC sidebar: 209px
- Tools sidebar: 208px

## Design Principles

✅ **Fidelity to design** - Match Figma designs exactly  
✅ **Explicit state** - Easy to trigger and observe interactions  
✅ **Fake data** - No backend, uses local state  
❌ **Not production code** - Prioritizes clarity over optimization  
❌ **No abstractions** - Simple, explicit code  

## Contributing

This is a UX prototype template. When making changes:
1. Keep design fidelity as the top priority
2. Use Codex components and tokens
3. Test on different screen sizes (especially 1119px breakpoint)
4. Avoid over-engineering - this is for user testing

## Responsive Behavior

- **≤ 1119px (tablet)**: TOC and Tools panels collapse, toggle buttons appear
- **≤ 768px (mobile)**: Further layout adjustments

## License

This template is for internal UX prototyping and testing.

---

**Note**: This is an interactive prototype, not production code. It uses fake data and simplified interactions for UX testing purposes.

