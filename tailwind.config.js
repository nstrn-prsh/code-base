/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
   theme: {
      screens: {
         xl: { max: "1279px" },
         // => @media (max-width: 1279px) { ... }

         lg: { max: "1023px" },
         // => @media (max-width: 1023px) { ... }

         md: { max: "767px" },
         // => @media (max-width: 767px) { ... }

         sm: { max: "639px" },
         // => @media (max-width: 639px) { ... }
      },
      extend: {
         colors: {
            card: "#27272A",
            title: "#FBCB56",
            primaryTitle: "#F8F8F8",
            disabledTitle: "#6B6B73",
         },
         /*   screens: {
            laptop: { min: "768px" },
            mobile: { max: "767px" },
         }, */
         /*     gridTemplateColumns: {
            13: "2fr repeat(12, minmax(0, 1fr))",
         }, */
         /* gridTemplateRows: {
            8: "repeat(8, minmax(0, 1fr))",
         }, */
         /*   colors: {
            primary: {
               100: "var(--primary-100-color)",
               200: "var(--primary-200-color)",
               300: "var(--primary-300-color)",
               400: "var(--primary-400-color)",
               500: "var(--primary-500-color)",
               600: "var(--primary-600-color)",
               700: "var(--primary-700-color)",
               800: "var(--primary-800-color)",
            },
            secondary: {
               100: "var(--secondary-100-color)",
               200: "var(--secondary-200-color)",
               300: "var(--secondary-300-color)",
               400: "var(--secondary-400-color)",
               500: "var(--secondary-500-color)",
               600: "var(--secondary-600-color)",
               700: "var(--secondary-700-color)",
               800: "var(--secondary-800-color)",
            },
            background: {
               50: "var(--background-50-color)",
               100: "var(--background-100-color)",
               200: "var(--background-200-color)",
               300: "var(--background-300-color)",
               400: "var(--background-400-color)",
               500: "var(--background-500-color)",
               600: "var(--background-600-color)",
               700: "var(--background-700-color)",
               800: "var(--background-800-color)",
               900: "var(--background-900-color)",
            },
            natural: {
               50: "var(--natural-50-color)",
               100: "var(--natural-100-color)",
               200: "var(--natural-200-color)",
               300: "var(--natural-300-color)",
               400: "var(--natural-400-color)",
               500: "var(--natural-500-color)",
               600: "var(--natural-600-color)",
               700: "var(--natural-700-color)",
               800: "var(--natural-800-color)",
            },
            danger: {
               50: "var(--danger-50-color)",
               100: "var(--danger-100-color)",
               200: "var(--danger-200-color)",
               300: "var(--danger-300-color)",
               400: "var(--danger-400-color)",
               500: "var(--danger-500-color)",
               600: "var(--danger-600-color)",
               700: "var(--danger-700-color)",
            },
            success: {
               50: "var(--success-50-color)",
               100: "var(--success-100-color)",
               200: "var(--success-200-color)",
               300: "var(--success-300-color)",
               400: "var(--success-400-color)",
               500: "var(--success-500-color)",
               600: "var(--success-600-color)",
               700: "var(--success-700-color)",
            },
            warning: {
               50: "var(--warning-50-color)",
               100: "var(--warning-100-color)",
               200: "var(--warning-200-color)",
               300: "var(--warning-300-color)",
               400: "var(--warning-400-color)",
               500: "var(--warning-500-color)",
               600: "var(--warning-600-color)",
               700: "var(--warning-700-color)",
            },
            info: {
               50: "var(--info-50-color)",
               100: "var(--info-100-color)",
               200: "var(--info-200-color)",
               300: "var(--info-300-color)",
               400: "var(--info-400-color)",
               500: "var(--info-500-color)",
               600: "var(--info-600-color)",
               700: "var(--info-700-color)",
            },
            text: {
               100: "var(--text-100-color)",
               200: "var(--text-200-color)",
               300: "var(--text-300-color)",
               400: "var(--text-400-color)",
               500: "var(--text-500-color)",
               600: "var(--text-600-color)",
               700: "var(--text-700-color)",
            },
         }, */
         /*  boxShadow: {
            100: "var(--shadow-100)",
            200: "var(--shadow-200)",
            300: "var(--shadow-300)",
            400: "var(--shadow-400)",
            500: "var(--shadow-500)",
            600: "var(--shadow-600)",
            700: "var(--shadow-700)",
            800: "var(--shadow-800)",
         }, */
         /*  spacing: {
            1: "0px",
            2: "2px",
            3: "4px",
            4: "6px",
            5: "8px",
            6: "10px",
            7: "12px",
            8: "14px",
            9: "16px",
            10: "24px",
            11: "32px",
            12: "40px",
            13: "48px",
            14: "56px",
            15: "64px",
            16: "72px",
            17: "80px",
            18: "88px",
            19: "96px",
            20: "104px",
         }, */
         /*  borderRadius: {
            xs: "4px",
            s: "8px",
            m: "12px",
            l: "16px",
            xl: "800px",
         }, */
         /*  fontSize: {
            // singleLine: {
            h1: [
               "26px",
               {
                  lineHeight: "40px",
                  fontWeight: "700",
               },
            ],
            h2: [
               "24px",
               {
                  lineHeight: "24px",
                  fontWeight: "700",
               },
            ],
            h3: [
               "20px",
               {
                  lineHeight: "24px",
                  fontWeight: "700",
               },
            ],
            h4: [
               "18px",
               {
                  lineHeight: "24px",
                  fontWeight: "700",
               },
            ],
            h5: [
               "16px",
               {
                  lineHeight: "24px",
                  fontWeight: "700",
               },
            ],
            Label01: [
               "16px",
               {
                  lineHeight: "24px",
                  fontWeight: "600",
               },
            ],
            Label02: [
               "14px",
               {
                  lineHeight: "20px",
                  fontWeight: "600",
               },
            ],
            Label03: [
               "12px",
               {
                  lineHeight: "16px",
                  fontWeight: "600",
               },
            ],
            Label04: [
               "10px",
               {
                  lineHeight: "16px",
                  fontWeight: "600",
               },
            ],
            Button01: [
               "16px",
               {
                  lineHeight: "24px",
                  fontWeight: "700",
               },
            ],
            Button02: [
               "14px",
               {
                  lineHeight: "20px",
                  fontWeight: "700",
               },
            ],
            Button03: [
               "12px",
               {
                  lineHeight: "20px",
                  fontWeight: "700",
               },
            ],
            Body01: [
               "16px",
               {
                  lineHeight: "24px",
                  fontWeight: "600",
               },
            ],
            Body02: [
               "14px",
               {
                  lineHeight: "20px",
                  fontWeight: "600",
               },
            ],
            Caption: [
               "12px",
               {
                  lineHeight: "16px",
                  fontWeight: "600",
               },
            ],
            Overline: [
               "10px",
               {
                  lineHeight: "16px",
                  fontWeight: "300",
               },
            ],
            // },
            multiLine_h1: [
               "26px",
               {
                  lineHeight: "64px",
                  fontWeight: "700",
               },
            ],
            multiLine_h2: [
               "24px",
               {
                  lineHeight: "64px",
                  fontWeight: "700",
               },
            ],
            multiLine_h3: [
               "20px",
               {
                  lineHeight: "48px",
                  fontWeight: "700",
               },
            ],
            multiLine_h4: [
               "18px",
               {
                  lineHeight: "48px",
                  fontWeight: "700",
               },
            ],
            multiLine_h5: [
               "16px",
               {
                  lineHeight: "48px",
                  fontWeight: "700",
               },
            ],
            multiLine_Label01: [
               "16px",
               {
                  lineHeight: "48px",
                  fontWeight: "600",
               },
            ],
            multiLine_Label02: [
               "14px",
               {
                  lineHeight: "48px",
                  fontWeight: "600",
               },
            ],
            multiLine_Label03: [
               "12px",
               {
                  lineHeight: "40px",
                  fontWeight: "600",
               },
            ],
            multiLine_Label04: [
               "10px",
               {
                  lineHeight: "32px",
                  fontWeight: "600",
               },
            ],
            multiLine_Button01: [
               "16px",
               {
                  lineHeight: "40px",
                  fontWeight: "700",
               },
            ],
            multiLine_Button02: [
               "14px",
               {
                  lineHeight: "36px",
                  fontWeight: "700",
               },
            ],
            multiLine_Button03: [
               "12px",
               {
                  lineHeight: "32px",
                  fontWeight: "700",
               },
            ],
            multiLine_Body01: [
               "16px",
               {
                  lineHeight: "40px",
                  fontWeight: "600",
               },
            ],
            multiLine_Body02: [
               "14px",
               {
                  lineHeight: "32px",
                  fontWeight: "600",
               },
            ],
            multiLine_Caption: [
               "12px",
               {
                  lineHeight: "32px",
                  fontWeight: "600",
               },
            ],
            multiLine_Overline: [
               "10px",
               {
                  lineHeight: "24px",
                  fontWeight: "300",
               },
            ],
         }, */
      },
   },
   plugins: [
      /* require("@tailwindcss/typography") */
   ],
};
