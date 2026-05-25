import TezagoText from "@/component/text-render/tezago-text";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AZS Vanguard",
};

export function AzsVanguardText({ ruby }: { ruby?: boolean }) {
    return (
        <>
            AZS Vanguard (
            <TezagoText text="Veina Tezago" ruby={ruby} />)
        </>
    );
}

export default function AzsVanguard() {
    return (
        <Stack>
            <Title>
                <AzsVanguardText ruby />
            </Title>
            <Text>The AZS Vanguard is a ship built in 418</Text>
        </Stack>
    );
}
