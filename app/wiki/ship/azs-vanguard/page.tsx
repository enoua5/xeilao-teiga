import TezagoText from "@/component/text-render/tezago-text";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AZS Vanguard",
};

export const AZS_VANGUARD = <>
    AZS Vanguard (
        <TezagoText text="Veina Tezago" ruby />
    )
</>

export default function AzsVanguard() {
    return (
        <Stack>
            <Title>
                {AZS_VANGUARD}
            </Title>
            <Text>The AZS Vanguard is a ***-class ship built in 418</Text>
        </Stack>
    );
}
