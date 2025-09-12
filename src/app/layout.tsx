import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "styled-components";
import { Plus_Jakarta_Sans } from "next/font/google";
import StyledComponentsRegistry from "@/styles/registry";
import GlobalStyles from "@/styles/global.styled";
import { lightTheme } from "@/styles/themes";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kanban App",
  description:
    "Kanban task management app frontend built with Next.js and Styled Components. State managed using Redux Toolkit, tested with Jest, React Testing Library and Cypress, and developed with Storybook for UI consistency. ",
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
