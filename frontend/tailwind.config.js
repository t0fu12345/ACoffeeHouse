/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          "colors": {
              "surface-container": "#20201f",
              "on-secondary-container": "#cfb088",
              "background": "#131313",
              "tertiary": "#c3cca6",
              "on-surface-variant": "#d4c4b7",
              "on-secondary-fixed-variant": "#594323",
              "inverse-primary": "#7d562d",
              "surface": "#131313",
              "surface-bright": "#393939",
              "inverse-on-surface": "#313030",
              "on-tertiary-fixed": "#171e06",
              "error": "#ffb4ab",
              "outline": "#9c8e82",
              "on-tertiary-fixed-variant": "#424a2d",
              "on-secondary": "#402d0f",
              "inverse-surface": "#e5e2e1",
              "on-background": "#e5e2e1",
              "on-primary-fixed-variant": "#623f18",
              "on-tertiary-container": "#3c4427",
              "secondary-container": "#594323",
              "primary-fixed-dim": "#f0bd8b",
              "on-primary": "#482904",
              "error-container": "#93000a",
              "on-secondary-fixed": "#291800",
              "on-surface": "#e5e2e1",
              "on-error": "#690005",
              "outline-variant": "#50453b",
              "tertiary-fixed-dim": "#c2cba4",
              "surface-container-highest": "#353535",
              "primary": "#f2be8c",
              "secondary-fixed-dim": "#e1c298",
              "on-error-container": "#ffdad6",
              "tertiary-fixed": "#dee7bf",
              "surface-variant": "#353535",
              "primary-container": "#d4a373",
              "surface-tint": "#f0bd8b",
              "tertiary-container": "#a8b18c",
              "primary-fixed": "#ffdcbd",
              "on-primary-fixed": "#2c1600",
              "on-tertiary": "#2c3318",
              "surface-dim": "#131313",
              "surface-container-lowest": "#0e0e0e",
              "surface-container-high": "#2a2a2a",
              "secondary-fixed": "#ffddb2",
              "on-primary-container": "#5b3912",
              "surface-container-low": "#1c1b1b"
          },
          "borderRadius": {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
          "spacing": {
              "container-margin": "24px",
              "sidebar-width": "280px",
              "touch-target-min": "48px",
              "gutter": "16px",
              "unit": "8px"
          },
          "fontFamily": {
              "title-md": ["Work Sans"],
              "body-lg": ["Work Sans"],
              "label-caps": ["JetBrains Mono"],
              "display-lg": ["Be Vietnam Pro"],
              "headline-lg-mobile": ["Be Vietnam Pro"],
              "headline-lg": ["Be Vietnam Pro"],
              "body-sm": ["Work Sans"]
          },
          "fontSize": {
              "title-md": ["18px", {"lineHeight": "24px", "fontWeight": "500"}],
              "body-lg": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
              "label-caps": ["12px", {"lineHeight": "16px", "fontWeight": "500"}],
              "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
              "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
              "headline-lg": ["32px", {"lineHeight": "40px", "fontWeight": "600"}],
              "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
          }
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
