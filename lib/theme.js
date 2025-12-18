import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Refined Pink-Beige Palette (Chvker-inspired)
        pastelPink: {
          50: { value: "#FFFAF9" },    // Almost white with hint of pink
          100: { value: "#FFF4F2" },   // Very light blush
          200: { value: "#FFE7E1" },   // Soft pink-beige
          300: { value: "#FFD4C8" },   // Light pink-beige
          400: { value: "#FFC1B0" },   // Medium pink-beige
          500: { value: "#D4A59A" },   // Main muted pink-beige
          600: { value: "#B8897E" },   // Deeper pink-beige
          700: { value: "#9C6D62" },
          800: { value: "#805147" },
          900: { value: "#64352B" },   // Deep brown-pink
        },
        // Neutral beige tones
        softCream: {
          50: { value: "#FFFCFA" },
          100: { value: "#FFF8F5" },
          200: { value: "#FFF0E8" },
          300: { value: "#FFE8DC" },
          400: { value: "#F5DDD0" },
          500: { value: "#E8D0C4" },
        },
        // Refined grays
        softGray: {
          50: { value: "#FAFAF9" },
          100: { value: "#F5F5F4" },
          200: { value: "#E7E5E4" },
          300: { value: "#D6D3D1" },
          400: { value: "#A8A29E" },
          500: { value: "#78716C" },
          600: { value: "#57534E" },
          700: { value: "#44403C" },
          800: { value: "#292524" },
          900: { value: "#1C1917" },
        },
      },
      fonts: {
        heading: { value: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, system-ui, sans-serif" },
        body: { value: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, system-ui, sans-serif" },
      },
      fontSizes: {
        xs: { value: "0.75rem" },      // 12px
        sm: { value: "0.875rem" },     // 14px
        md: { value: "1rem" },         // 16px
        lg: { value: "1.125rem" },     // 18px
        xl: { value: "1.25rem" },      // 20px
        "2xl": { value: "1.5rem" },    // 24px
        "3xl": { value: "1.875rem" },  // 30px
        "4xl": { value: "2.25rem" },   // 36px
      },
      letterSpacings: {
        tight: { value: "-0.015em" },
        normal: { value: "0" },
        wide: { value: "0.025em" },
      },
      shadows: {
        subtle: { value: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" },
        soft: { value: "0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04)" },
        medium: { value: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)" },
      },
    },
    semanticTokens: {
      colors: {
        // Clean, minimal color tokens
        bg: {
          DEFAULT: { value: "{colors.white}" },
          subtle: { value: "{colors.softCream.50}" },
          muted: { value: "{colors.softCream.100}" },
        },
        fg: {
          DEFAULT: { value: "{colors.softGray.900}" },
          muted: { value: "{colors.softGray.600}" },
          subtle: { value: "{colors.softGray.500}" },
        },
        border: {
          DEFAULT: { value: "{colors.softGray.200}" },
          subtle: { value: "{colors.softGray.100}" },
        },
        // Brand colors - muted pink-beige
        brand: {
          solid: { value: "{colors.pastelPink.500}" },
          contrast: { value: "white" },
          fg: { value: "{colors.pastelPink.600}" },
          muted: { value: "{colors.pastelPink.200}" },
          subtle: { value: "{colors.pastelPink.100}" },
          emphasized: { value: "{colors.pastelPink.700}" },
        },
      },
    },
  },
  globalCss: {
    "*": {
      borderColor: "border.DEFAULT",
    },
    body: {
      bg: "bg.DEFAULT",
      color: "fg.DEFAULT",
      fontFamily: "body",
      lineHeight: "1.7",
      fontSize: "md",
      fontWeight: "400",
      letterSpacing: "normal",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    h1: {
      fontWeight: "300",
      letterSpacing: "tight",
    },
    h2: {
      fontWeight: "300",
      letterSpacing: "tight",
    },
    h3: {
      fontWeight: "400",
      letterSpacing: "tight",
    },
    "::selection": {
      bg: "pastelPink.100",
      color: "softGray.900",
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
