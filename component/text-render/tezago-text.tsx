"use client";

import React, {
    RefObject,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import { renderTezago, TezagoRenderOptions } from "./render-tezago";
import { useColorScheme } from "@mantine/hooks";

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

    const color_scheme = useColorScheme();
    const getStyleColor = useCallback(() => {
        const image = image_ref.current;
        if (image) {
            return getComputedStyle(image).color;
        } else {
            return color_scheme === "dark" ? "white" : "black";
        }
    }, [color_scheme]);

    useEffect(() => setCanvas(document.createElement("canvas")), []);

    const renderImage = useCallback(() => {
        const image = image_ref.current;
        if (image && canvas) {
            const style_color = getStyleColor();

            renderTezago(canvas, text, {
                ...options,
                color: options.color ?? style_color,
            });
            image.src = canvas.toDataURL();
        }
    }, [canvas, getStyleColor, options, text]);

    const renderImageRef = useCallback(
        (image: HTMLImageElement | null) => {
            image_ref.current = image;
            renderImage();
        },
        [renderImage]
    );

    useEffect(() => {
        renderImage();
    }, [renderImage]);

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
