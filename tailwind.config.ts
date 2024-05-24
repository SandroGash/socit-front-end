import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      white: "#ffffff",
      primary: {
        200: "#79952c",
        300: "#708d23",
        400: "#68851a",
        DEFAULT: "#5f7d0f",
        600: "#577402",
      },
      secondary: {
        200: "#9d8933",
        300: "#94812b",
        400: "#8b7923",
        DEFAULT: "#83711a",
        600: "#7a6911",
      },
      gray: {
        400: "#f2f2f2",
        500: "#e5e5e5",
        600: "#b2b2b2",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },
    },
    fontSize: {
      "8xl": [
        "120px",
        {
          lineHeight: "120px",
          letterSpacing: "-6px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "72px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "55px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "48px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.600000023841858px",
          fontWeight: "500",
        },
      ],
      "4xl": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.2000000476837158px",
          fontWeight: "500",
        },
      ],
      "3xl": [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "-0.800000011920929px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      xl: [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      lg: [
        "21px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.800000011920929px",
          fontWeight: "400",
        },
      ],
      base: [
        "17px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.699999988079071px",
          fontWeight: "400",
        },
      ],
      sm: [
        "15px",
        {
          lineHeight: "23px",
          letterSpacing: "-0.6000000238418579px",
          fontWeight: "400",
        },
      ],
      caption1: [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6000000238418579px",
          fontWeight: "400",
        },
      ],
      caption2: [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.30000001192092896px",
          fontWeight: "400",
        },
      ],
      caption3: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],
      caption4: [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2000000198023224px",
          fontWeight: "400",
        },
      ],
    },

    borderRadius: {
      DEFAULT: "10px",
      full: "9999PiX",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
