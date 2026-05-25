import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { LayoutContent } from "./layout-content";

export const metadata: Metadata = {
    title: {
        template: "%s | XT",
        default: "Xeilao Teiga",
    },
    description: "Xeilao Teiga information archive",
};

const theme = createTheme({
    white: "#ffffff",
    black: "#171717",
    colors: {},
    primaryColor: "green",
    autoContrast: true,
    luminanceThreshold: 0.5,
    respectReducedMotion: true,
    fontFamily: "noto sans"
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ColorSchemeScript defaultColorScheme="auto" />
                <MantineProvider theme={theme} defaultColorScheme="auto">
                    <LayoutContent>{children}</LayoutContent>
                </MantineProvider>
            </body>
        </html>
    );
}
