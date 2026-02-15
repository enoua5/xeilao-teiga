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

    useEffect(() => setCanvas(document.createElement("canvas")), []);

    const renderImageRef = useCallback(
        (image: HTMLImageElement | null) => {
            image_ref.current = image;
            if (image && canvas) {
                const style_color = getComputedStyle(image).color;

                renderTezago(canvas, text, {
                    ...options,
                    color: options.color ?? style_color,
                });
                image.src = canvas.toDataURL();
            }
        },
        [canvas, options, text]
    );

    useEffect(() => {
        renderImageRef(image_ref.current);
    }, [renderImageRef]);

    const image = (
        <span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                ref={renderImageRef}
                src="#"
                alt={text}
                style={{ display: "inline", height: "1em" }}
            />
        </span>
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
