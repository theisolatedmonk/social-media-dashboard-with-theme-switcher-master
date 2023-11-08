import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { Inter: ["Inter", "sans-serif"] },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        LimeGreen: "hsl(163, 72%, 41%)",
        BrightRed: "hsl(356, 69%, 56%)",
        Facebook: "hsl(208, 92%, 53%)",
        Twitter: "hsl(203, 89%, 53%)",
        Instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
        YouTube: "hsl(348, 97%, 39%)",
        ToggleDark: "linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)",
        ToggleLight: "hsl(230, 22%, 74%)",
        VeryDarkBlueBG: "hsl(230, 17%, 14%)",
        VeryDarkBlueTopBGPattern: "hsl(232, 19%, 15%)",
        DarkDesaturatedBlueCardBG: "hsl(228, 28%, 20%)",
        DesaturatedBlueText: "hsl(228, 34%, 66%)",
        WhiteText: "hsl(0, 0%, 100%)",
        WhiteBG: "hsl(0, 0%, 100%)",
        VeryPaleBlueTopBGPattern: "hsl(225, 100%, 98%)",
        LightGrayishBlueCardBG: "hsl(227, 47%, 96%)",
        DarkGrayishBlueText: "hsl(228, 12%, 44%)",
        VeryDarkBlueText: "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
};
export default config;
