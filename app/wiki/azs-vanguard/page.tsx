import TezagoText from "@/component/text-render/tezago-text";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AZS Vanguard",
};

export default function AzsVanguard() {
    return (
        <Stack>
            <Title>
                AZS Vanguard (
                <TezagoText text="Veina Tezago" ruby />)
            </Title>
            <Text>The AZS vanguard is a ***-class ship built in 418</Text>
        </Stack>
    );
}
