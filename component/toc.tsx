"use client";

import { TableOfContents } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export default function ClientTableOfContents() {
    const pathname = usePathname();

    const reinitializeRef = useRef(() => {});

    useLayoutEffect(() => {
        reinitializeRef.current();
    }, [pathname]);

    return (
        <TableOfContents reinitializeRef={reinitializeRef} depthOffset={20} />
    );
}
