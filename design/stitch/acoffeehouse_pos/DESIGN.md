---
name: ACoffeeHouse POS
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#20201f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4c4b7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9c8e82'
  outline-variant: '#50453b'
  surface-tint: '#f0bd8b'
  primary: '#f2be8c'
  on-primary: '#482904'
  primary-container: '#d4a373'
  on-primary-container: '#5b3912'
  inverse-primary: '#7d562d'
  secondary: '#e1c298'
  on-secondary: '#402d0f'
  secondary-container: '#594323'
  on-secondary-container: '#cfb088'
  tertiary: '#c3cca6'
  on-tertiary: '#2c3318'
  tertiary-container: '#a8b18c'
  on-tertiary-container: '#3c4427'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcbd'
  primary-fixed-dim: '#f0bd8b'
  on-primary-fixed: '#2c1600'
  on-primary-fixed-variant: '#623f18'
  secondary-fixed: '#ffddb2'
  secondary-fixed-dim: '#e1c298'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#594323'
  tertiary-fixed: '#dee7bf'
  tertiary-fixed-dim: '#c2cba4'
  on-tertiary-fixed: '#171e06'
  on-tertiary-fixed-variant: '#424a2d'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin: 24px
  gutter: 16px
  touch-target-min: 48px
  sidebar-width: 280px
---

## Brand & Style

The brand personality for this design system is rooted in the "Modern Craft" aesthetic—balancing the warmth of a neighborhood cafe with the high-efficiency requirements of a professional Point of Sale (POS) environment. It is designed for baristas and shop managers who require speed, clarity, and reliability.

The UI follows a **Tactile / Modern** design style. It utilizes subtle depth and soft physical metaphors to make digital buttons feel "pressable" in a high-activity environment, reducing cognitive load during peak hours. The emotional response should be one of calm focus, rhythmic efficiency, and premium quality.

## Colors

The palette is optimized for a dark-mode-first environment typical of coffee shops with controlled lighting. 

- **Primary:** An artisanal "Roasted Oak" used for main actions and branding.
- **Secondary:** A muted "Milled Bean" for secondary interactive elements.
- **Tertiary:** A "Sage Matcha" used exclusively for success states or organic menu highlights.
- **Neutral:** A deep "Espresso Black" serves as the foundation, reducing eye strain and making primary colors pop.

Surface colors should use varying shades of the neutral base to establish hierarchy, rather than relying on pure black.

## Typography

This design system uses a tri-font approach to balance personality and utility:
- **Be Vietnam Pro** is used for brand moments and large headers, providing a friendly yet contemporary feel.
- **Work Sans** handles the bulk of the interface (menus, descriptions, settings) due to its exceptional legibility and professional tone.
- **JetBrains Mono** is used for "system" data such as prices, order numbers, and SKU codes, giving a precise, technical edge to the financial data.

Maintain high contrast between headers and body text to ensure readability in fast-paced environments.

## Layout & Spacing

The layout utilizes a **Fixed Grid** for tablet landscapes (the primary POS device) and a **Fluid Grid** for mobile management views. 

- **Desktop/Tablet:** A 12-column grid with 24px margins. The layout is split into functional zones: a fixed left sidebar for navigation, a central fluid area for the product menu, and a fixed right sidebar for the current "Cart/Ticket."
- **Mobile:** A single-column flow with bottom-anchored primary actions.
- **Spacing Rhythm:** All spacing must be multiples of 8px. Touch targets must never fall below 48px to accommodate rapid, sometimes imprecise, physical interaction.

## Elevation & Depth

Visual hierarchy in the ACoffeeHouse POS is achieved through **Tonal Layers** and **Ambient Shadows**. 

1. **Base Layer:** The darkest neutral (#1A1A1A).
2. **Surface Layer:** One step lighter, used for cards and menu items.
3. **Elevated Layer:** Uses a soft, diffused shadow (12% opacity black, 16px blur) to indicate active state or modals.

Avoid heavy borders; instead, use subtle 1px inner strokes (lightened neutrals) to define edges on dark backgrounds, creating a sophisticated, high-end feel.

## Shapes

The shape language is consistently **Rounded**. This softens the technical nature of a POS and aligns with the organic nature of coffee. 

- Standard components (Buttons, Inputs) use a 0.5rem (8px) corner radius.
- Large containers and cards use a 1rem (16px) radius.
- Interactive tags or "Add-on" indicators should use fully rounded pill shapes to distinguish them from primary action buttons.

## Components

- **Buttons:** Primary buttons use the Roasted Oak color with bold, centered text. Hover/Tap states should slightly brighten the fill.
- **Menu Cards:** Use a subtle inner glow and 16px padding. Images should have a 12px radius.
- **Inputs:** Fields should have a dark, recessed appearance with a 1px border that glows when focused.
- **Chips/Add-ons:** Used for coffee modifiers (e.g., "Oat Milk," "Extra Shot"). These use the pill-shape style with a secondary color outline.
- **The "Ticket" (List):** Items in the order list should use JetBrains Mono for prices, aligned to the right, with high-contrast dividers between entries.
- **Modals:** Centered on screen with a heavy backdrop blur (10px) to pull focus to the customization options.