import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: {
        template: "%s | XT Wiki",
        default: "Zeilao Teiga Wiki",
    },
};

export default function WikiLayout({ children }: { children?: ReactNode }) {
    return <>{children}</>;
}
