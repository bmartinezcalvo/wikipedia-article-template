# Codex · UX Prototyping Rules

## Context
This project contains **UX prototypes for design validation and usability testing**.
This is **not production code**.

## Design System
- Use **Wikimedia Codex Design System** as the single source of truth.
- Prefer existing Codex components, patterns, and conventions.
- Use **Codex design tokens** for spacing, typography, colors, and borders.
- Do NOT invent custom styles if a Codex equivalent exists.

## Fidelity to Design
- **Fidelity to Figma is the top priority**.
- Do NOT redesign, modernize, or visually reinterpret layouts.
- Do NOT simplify layouts or merge sections unless explicitly requested.
- Match hierarchy, spacing, alignment, and proportions as closely as possible.
- If something is unclear or missing, **ask before deciding**.

## Prototyping Constraints
- No backend.
- No real APIs.
- Use mock data and fake interactions.
- Code can be simple, repetitive, or non-optimized if it helps fidelity.
- This prototype is meant to *feel* correct to users.

## Layout & Interaction
- Layout behavior (e.g. grid shifts, panels opening, content moving) must match the provided Figma or GIF exactly.
- Prefer **CSS Grid and Flexbox** over absolute positioning unless required.
- Use simple boolean state flags (e.g. `isOpen`, `isActive`) to model UI behavior.
- Transitions should be subtle and functional, not decorative.

## Working Style for Codex
- Work in clear, self-contained blocks (components or sections).
- Touch only the files necessary for the requested change.
- Do not refactor unrelated code.
- For non-trivial changes, briefly explain the intended approach before implementing.

## Reminder
This is a **design validation prototype**.
Do not optimize, abstract, or “improve” the design beyond what is explicitly requested.
