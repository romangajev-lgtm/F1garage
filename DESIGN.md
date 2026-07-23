---
name: Grand Prix Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#e9bcb5'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#af8781'
  outline-variant: '#5e3f3a'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#680200'
  primary-container: '#e10600'
  on-primary-container: '#fff2f0'
  inverse-primary: '#c00500'
  secondary: '#ffb5a0'
  on-secondary: '#601400'
  secondary-container: '#ff5625'
  on-secondary-container: '#541100'
  tertiary: '#c8c6c5'
  on-tertiary: '#303030'
  tertiary-container: '#717070'
  on-tertiary-container: '#f8f5f4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410100'
  on-primary-fixed-variant: '#930300'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#872000'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1b1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 80px
  max-width: 1440px
---

## Brand & Style

This design system embodies the high-velocity, high-precision world of Formula 1. It is engineered for a premium automotive service center in Batumi, targeting owners of high-performance and luxury vehicles who demand technical excellence and mechanical transparency.

The aesthetic is **Technological Minimalism** fused with **High-Contrast Brutalism**. It utilizes a dark-mode-first approach to evoke the atmosphere of a high-end night garage or a paddock. The emotional response is one of absolute reliability, speed, and elite craftsmanship. Visuals are dominated by rigid geometric structures, thin technical lines inspired by telemetry data and track layouts, and aggressive "Racing Red" accents that punctuate the dark canvas.

## Colors

The palette is rooted in the "Paddock Dark" philosophy.

- **Primary (Racing Red):** Used strictly for critical actions, key branding moments, and active states. It represents the heat of the engine and the urgency of speed.
- **Secondary (Ignition Orange):** Used for hover states and secondary accents to provide a gradient-like transition from the primary red.
- **Background & Surface:** The core of the UI uses `#121212` (Graphite) for the base layer and `#1E1E1E` (Charcoal) for cards and elevated sections. 
- **Typography:** Pure White is reserved for headings and primary information to ensure maximum contrast. Light Gray is used for technical specs and labels to maintain a clean hierarchy.

## Typography

The typography system strikes a balance between "Impact" and "Precision."

- **Headlines:** Montserrat ExtraBold is used to mirror the sturdiness of automotive engineering. Large display titles should use tight letter-spacing and uppercase styling to evoke a cinematic, high-performance feel.
- **Body:** Inter provides a neutral, technical clarity. It is highly legible against dark backgrounds, ensuring service descriptions and technical specifications are easily digestible.
- **Labels:** Use uppercase Inter with increased letter-spacing for category tags, currency notations (₾), and small UI metadata to mimic technical blueprints.

## Layout & Spacing

The layout follows a **Rigid Technical Grid**.

- **Grid:** A 12-column fluid grid for desktop with 24px gutters. Content should feel structured and aligned to hard edges.
- **Rhythm:** Spacing is strictly mathematical, based on an 8px scale.
- **Borders:** Use thin (1px) borders in `#333333` to separate sections, mimicking the precision of track markings. 
- **Padding:** High internal padding in cards (32px+) creates a premium, spacious feel despite the dark color palette.

## Elevation & Depth

This system avoids traditional soft shadows in favor of **Tonal Layering** and **Glassmorphism**.

- **Surface Tiers:** Background is the deepest level. Cards use a slightly lighter charcoal.
- **Glassmorphism:** For overlays and sticky headers, use a backdrop blur (20px) with a semi-transparent dark tint (rgba(18, 18, 18, 0.8)). This maintains the high-end feel while showing hints of the mechanical photography beneath.
- **Accents:** Depth is also communicated through "Glow" effects. Primary buttons and active states may use a subtle red outer glow (drop-shadow) to simulate illuminated dashboard buttons or brake lights.

## Shapes

The shape language is **Aggressive and Geometric**.

- **Corners:** Use sharp 0px corners for all primary containers, buttons, and input fields to emphasize precision and mechanical rigidity.
- **Angles:** Incorporate 45-degree chamfered corners on decorative elements or specific CTA buttons to mimic aerodynamic components of an F1 car.
- **Lines:** Use horizontal and vertical rules that are 1px thick to define the "Safe Zones" of the UI.

## Components

- **Primary Buttons:** Solid Racing Red backgrounds with white uppercase text. On hover, the color shifts to the Secondary Orange-Red with a sharp 2px white border inset.
- **Service Cards:** Use high-resolution mechanical photography as backgrounds with a dark gradient overlay (bottom-to-top). Pricing (e.g., "ОТ 150 ₾") should be anchored to the bottom-right in Montserrat Bold.
- **Input Fields:** Sharp-edged boxes with a 1px `#333333` border. On focus, the border turns Racing Red.
- **Price Lists:** Minimalist rows with a 1px bottom border. The service name is left-aligned, and the price is right-aligned in a bold red weight.
- **Social Media Cards:** Glassmorphic squares with centered icons, using subtle red strokes to indicate interactivity.
- **Status Indicators:** Use "Paddock Lights" — small, circular glows (Green for "Available", Red for "Full") to indicate service bay availability.