---
name: Artisan Brew POS
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#504442'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#7a5649'
  on-secondary: '#ffffff'
  secondary-container: '#fdcdbc'
  on-secondary-container: '#795548'
  tertiary: '#1d1815'
  on-tertiary: '#ffffff'
  tertiary-container: '#322c29'
  on-tertiary-container: '#9c938f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ebbcac'
  on-secondary-fixed: '#2e150b'
  on-secondary-fixed-variant: '#603f33'
  tertiary-fixed: '#ece0dc'
  tertiary-fixed-dim: '#cfc4c0'
  on-tertiary-fixed: '#201a18'
  on-tertiary-fixed-variant: '#4c4542'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  espresso-deep: '#3E2723'
  mocha-accent: '#795548'
  latte-warm: '#D7CCC8'
  cream-base: '#F5F5F5'
  status-active: '#2E7D32'
  status-inactive: '#757575'
  status-low-stock: '#D84315'
  status-occupied: '#A1887F'
  pos-surface: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  pos-num-lg:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  touch-target-min: 48px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
  container-max: 1440px
---

## Brand & Style

The design system is crafted for a high-end, professional coffee shop environment. It balances the warmth of a traditional café with the precision of a modern management system. The aesthetic is **Modern Tactile**, prioritizing high-speed touch interactions for POS users while maintaining a data-rich, structured environment for administrators.

### Design Principles
- **Reliability:** Solid, structured layouts that convey enterprise-grade stability.
- **Warmth:** Using organic tones to reduce the "coldness" of digital management tools.
- **Efficiency:** Minimized cognitive load through clear visual hierarchies and large touch targets.
- **Tactility:** Buttons and interactive elements use subtle depth to invite physical interaction, crucial for busy baristas.

### Style Choice: Modern Tactile
This system utilizes a refined blend of **Minimalism** for clarity and **Tonal Layering** for depth. Elements feature soft, extruded qualities (influenced by Neomorphism but restrained for professional use) to ensure that interactive components are immediately recognizable on touchscreens. High contrast is reserved for status indicators and primary actions to drive operational speed.

## Colors

The palette is rooted in the "Coffee Brown" spectrum, transitioning from deep roasts to creamy foams.

- **Primary (Espresso Deep):** Used for typography, sidebars, and critical structural elements to ground the UI.
- **Secondary (Mocha Accent):** Used for primary actions, buttons, and highlighting interactive states.
- **Tertiary (Latte Warm):** Used for secondary buttons, card backgrounds, and dividers.
- **Neutral (Cream Base):** The foundation for all backgrounds, providing a soft, low-strain canvas for long shifts.

**Functional Colors:**
- **Active/Success:** A deep forest green that complements the brown palette without clashing.
- **Low Stock/Alert:** A burnt orange/terracotta to signal urgency while remaining within the organic color family.
- **Occupied/Warning:** A mid-tone brown used specifically for POS table states.

## Typography

This system uses a dual-font approach to balance brand elegance with operational legibility.

- **Brand Elements (Serif):** *Source Serif 4* is used for headlines, section titles, and brand-facing text. It evokes the feeling of a printed menu and adds an authoritative, classic touch to the management system.
- **Interface Elements (Sans-Serif):** *Hanken Grotesk* is used for all functional UI components, data tables, and POS buttons. Its sharp, modern geometry ensures high legibility on lower-resolution tablets and screens.
- **POS Specifics:** The `pos-num-lg` style is specifically for pricing and quantities in the cart and checkout screens, ensuring these critical numbers are visible at a glance.

## Layout & Spacing

The layout is designed for a **12-column fluid grid** that adapts into functional zones based on the user's role.

### POS Layout (Tablet Optimized)
- Uses a **Fixed Zone** model:
  - **Sidebar:** 80px - 100px for icon-only navigation or 20% for area filtering.
  - **Main Content:** Flexible grid for `ProductCards` or `TableCards`.
  - **Action Panel (Cart/Checkout):** Fixed 30% - 35% width on the right to ensure the "Order" and "Pay" buttons are always in the same ergonomic position for the right hand.
  
### Admin Layout (Desktop Optimized)
- Standard **Header + Sidebar** configuration.
- **Content Area:** 12-column grid with 24px gutters.
- **Data Tables:** High-density rows (40px height) to maximize information visibility without scrolling.

### Spacing Rhythm
A strict **8px base unit** is used. POS elements (buttons, inputs) must maintain a minimum height of **48px** to remain touch-friendly even during high-traffic periods.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Subtle Ambient Shadows**.

- **Level 0 (Background):** `cream-base` (#F5F5F5). The foundation of the application.
- **Level 1 (Cards/Surfaces):** White (#FFFFFF) with a very soft, 1px border in `latte-warm` or a 4px blur shadow (Color: #3E2723 at 5% opacity).
- **Level 2 (Interactive/Floating):** Used for Modals and active Product Cards. Features a 12px blur shadow (Color: #3E2723 at 10% opacity) to "lift" the element closer to the user's finger.
- **Tactile Feedback:** When pressed, buttons should "sink" visually by removing their shadow and shifting 1px downward, providing immediate confirmation of a touch event.
- **Kitchen Mode:** For the Kitchen/Barista view, elevation is inverted using a dark-mode theme where depth is conveyed through lighter surface shades rather than shadows.

## Shapes

The design system uses **Rounded (0.5rem / 8px)** corners as the default for most UI elements. This strikes a balance between the sharp professionalism of an enterprise tool and the friendly, approachable nature of a café.

- **Buttons & Inputs:** 8px radius.
- **Large Cards (TableCard, ProductCard):** 16px (rounded-lg) to create a softer, more distinct container.
- **Status Chips:** Full pill-shape (rounded-full) to distinguish them from interactive buttons.
- **Data Tables:** Sharp corners on internal cells, but 8px rounding on the outer container.

## Components

### POS Buttons
- **Primary:** High-contrast `espresso-deep` background with white text. Height: 56px minimum.
- **Product Cards:** Large image area (top), title and price (bottom). The entire card is a hit area.
- **Modifier Selectors:** Large radio blocks (minimum 64px height) instead of standard small radio circles to accommodate fast tapping.

### Admin Components
- **Data Tables:** Zebra-striping using `cream-base` on even rows. Headers are sticky and use `label-lg` typography.
- **Status Indicators:** 
  - **Active:** Green border with light green tint background.
  - **Low Stock:** Red/Orange text with an icon prefix.
- **Input Fields:** Outlined style with `latte-warm` borders. On focus, the border thickens and changes to `mocha-accent`.

### Navigation
- **Admin Sidebar:** Dark background (`espresso-deep`) with latte-colored icons. Active states use a "left-border" highlight in `mocha-accent`.
- **POS Category Tabs:** Large, scrollable horizontal pills. The active category is filled with `mocha-accent`, others are outlined.

### Feedback
- **Toast Notifications:** Minimalist bars at the top-center. Use `mocha-accent` for neutral info and `status-active` for completed payments.