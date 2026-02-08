import TezagoText from "@/component/text-render/tezago-text";
import { Stack, Title } from "@mantine/core";
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
        </Stack>
    );
}
