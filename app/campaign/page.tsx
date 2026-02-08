import TezagoText from "@/component/text-render/tezago-text";
import { Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Campaign",
};

export default function CampaignHome() {
    return (
        <Stack>
            <Title>
                <TezagoText text="Dasu nai 'iva no Xeilao Teiga" ruby />
            </Title>
            <Text>
                You are the crew and passengers aboard the AZS Vanguard (
                <TezagoText text="Veina Tezago" ruby />
                ). The ship has been chartered to the Solarian Federation (
                <TezagoText text="Meinato ki Sol" ruby />
                ) as a research vessel. Under the command of Captain Tsalain (
                <TezagoText text="Tsalain" />
                ), it carries out its mission to explore uncharted regions of
                space, to establish peaceful contact with unknown civilizations,
                and to advance the Federation&apos;s understanding of the
                universe.
            </Text>
        </Stack>
    );
}
