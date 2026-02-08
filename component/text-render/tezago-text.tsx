"use client";

import React, {
    RefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { renderTezago, TezagoRenderOptions } from "./render-tezago";
import { useComputedColorScheme } from "@mantine/core";

export interface TezagoTextProps extends TezagoRenderOptions {
    text: string;
    ruby?: boolean;
}

/**
 * Tezago text-rendering box
 */
export default function TezagoText({
    text,
    ruby,
    ...options
}: TezagoTextProps) {
    const image_ref: RefObject<HTMLImageElement | null> = useRef(null);
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
    const dark_mode = useComputedColorScheme("light") == "dark";
    const color = (options.color ?? dark_mode) ? "white" : "black";

    useEffect(() => setCanvas(document.createElement("canvas")), []);

    const renderImageRef = useCallback(
        (image: HTMLImageElement | null) => {
            image_ref.current = image;
            if (image && canvas) {
                renderTezago(canvas, text, {
                    ...options,
                    color,
                });
                image.src = canvas.toDataURL();
            }
        },
        [canvas, color, options, text]
    );

    useEffect(() => {
        renderImageRef(image_ref.current);
    }, [renderImageRef]);

    // eslint-disable-next-line @next/next/no-img-element
    const image = (
        <img
            ref={renderImageRef}
            src="#"
            alt={text}
            style={{ display: "inline", height: 16 }}
        />
    );

    if (ruby) {
        return (
            <ruby>
                {image}
                <rp>(</rp>
                <rt style={{ paddingBottom: "0.4em" }}>{text}</rt>
                <rp>)</rp>
            </ruby>
        );
    } else {
        return image;
    }
}
