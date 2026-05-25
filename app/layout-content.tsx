"use client";

import ClientTableOfContents from "@/component/toc";
import {
    ActionIcon,
    Affix,
    AppShell,
    AppShellAside,
    AppShellMain,
    AppShellNavbar,
    NavLink,
    Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useLayoutEffect, useState } from "react";
import {
    Ballpen,
    Home as IconHome,
    Route as IconMapRoute,
    Article as IconArticle,
    Menu2 as IconMenu,
} from "tabler-icons-react";

export function LayoutContent({ children }: { children?: React.ReactNode }) {
    const pathname = usePathname();

    const [has_h2, setHasH2] = useState(true);

    useLayoutEffect(() => {
        setHasH2(document.getElementsByTagName("h2").length > 0);
    }, [pathname]);

    const [mobile_menu_open, { toggle: toggleMobileMenuOpen }] =
        useDisclosure(false);

    const is_mobile = useMediaQuery("(max-width: 767px)");

    return (
        <AppShell
            header={{ height: "0" }}
            navbar={{
                breakpoint: "sm",
                width: "25ch",
                collapsed: { mobile: !mobile_menu_open, desktop: false },
            }}
            aside={{
                breakpoint: "md",
                width: "25ch",
                collapsed: { mobile: true, desktop: !has_h2 },
            }}
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
            {is_mobile && (
                <Affix position={{ bottom: "1em", right: "1em" }}>
                    <ActionIcon
                        radius="xl"
                        p="5px"
                        size="lg"
                        onClick={toggleMobileMenuOpen}
                    >
                        <IconMenu />
                    </ActionIcon>
                </Affix>
            )}
        </AppShell>
    );
}
