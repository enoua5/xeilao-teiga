import type { Metadata } from "next";
import "./globals.css";
import "@mantine/core/styles.css";
import {
    AppShell,
    AppShellAside,
    AppShellMain,
    AppShellNavbar,
    ColorSchemeScript,
    createTheme,
    MantineProvider,
    NavLink,
    Stack,
} from "@mantine/core";
import {
    Ballpen,
    Home as IconHome,
    Route as IconMapRoute,
    Article as IconArticle,
} from "tabler-icons-react";
import Link from "next/link";
import ClientTableOfContents from "@/component/toc";

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
                    <AppShell
                        header={{ height: "0" }}
                        navbar={{ breakpoint: "xs", width: "25ch" }}
                        aside={{ breakpoint: "xs", width: "25ch" }}
                        padding="sm"
                    >
                        <AppShellNavbar>
                            <Stack gap={0}>
                                <NavLink
                                    component={Link}
                                    label="Home"
                                    href="/"
                                    leftSection={<IconHome />}
                                />
                                <NavLink
                                    component={Link}
                                    label="Campaign home"
                                    href="/campaign"
                                    leftSection={<IconMapRoute />}
                                />
                                <NavLink
                                    component={Link}
                                    label="Wiki"
                                    href="/wiki"
                                    leftSection={<IconArticle />}
                                />
                                <NavLink
                                    component={Link}
                                    label="Tezago text renderer"
                                    href="/text-rendering"
                                    leftSection={<Ballpen />}
                                />
                            </Stack>
                        </AppShellNavbar>
                        <AppShellAside>
                            <ClientTableOfContents />
                        </AppShellAside>
                        <AppShellMain>{children}</AppShellMain>
                    </AppShell>
                </MantineProvider>
            </body>
        </html>
    );
}
