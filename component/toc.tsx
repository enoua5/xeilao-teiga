"use client";

import { TableOfContents, Text } from "@mantine/core";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export default function ClientTableOfContents() {
    const pathname = usePathname();

    const reinitializeRef = useRef(() => {});

    useLayoutEffect(() => {
        reinitializeRef.current();
    }, [pathname]);

    return (
        <TableOfContents
            reinitializeRef={reinitializeRef}
            depthOffset={20}
            minDepthToOffset={2}
            scrollSpyOptions={{
                selector: "h1,h2,h3",
            }}
            getControlProps={({ data }) => ({
                onClick: () => data.getNode().scrollIntoView(),
                style: {
                    paddingBlock: 0,
                },
                children: (
                    <Text
                        style={
                            data.depth >= 3
                                ? {
                                      borderLeft:
                                          "2px solid var(--app-shell-border-color)",
                                      paddingLeft: "10px",
                                  }
                                : data.depth === 1
                                  ? {
                                        fontWeight: "bold",
                                    }
                                  : {}
                        }
                    >
                        {data.value.replaceAll(/^\(|\)$/g, "")}
                    </Text>
                ),
            })}
        />
    );
}
