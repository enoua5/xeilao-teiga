import TezagoText from "@/component/text-render/tezago-text";
import { Stack, Title } from "@mantine/core";

export default function CosmologyPage() {
    return (
        <Stack>
            <Title>Cosmology and Creation Myths</Title>
            <Title order={2}>The Multiverse</Title>
            <Title order={3}>
                <TezagoText text="Kyavei no Xeilao" ruby /> — The River of Souls
            </Title>
            <Title order={3}>
                <TezagoText text="Fotsi Meinya" ruby /> — The World Tree
            </Title>
            <Title order={3}>Nearby Universes</Title>

            <Title order={2}>The early universe</Title>
            <Title order={3}>
                <TezagoText text="Xeilao Teiga" ruby /> — The Elder Spirit
            </Title>
            <Title order={3}>
                <TezagoText text="Dyaxo Teiga" ruby /> — The Elder Dragon
            </Title>
            <Title order={3}>
                <TezagoText text="Dyaxo Vilei" ruby /> — The High Dragons
            </Title>
            <Title order={3}>
                <TezagoText text="Zekiucai li Gayudxai" ruby /> — Elementals and Demons
            </Title>

            <Title order={2}>
                Life
            </Title>
            <Title order={3}>
                Solarians
            </Title>
            <Title order={4}>Humans</Title>
            <Title order={4}>Haiseni</Title>
            <Title order={4}>Androids</Title>
            <Title order={3}>
                Tl<ruby>a<rt>s</rt></ruby><ruby>k<rt>a</rt></ruby>p<ruby>e<rt>r</rt></ruby>
            </Title>
            <Title order={3}>
                Nyrix
            </Title>
            <Title order={3}>
                Gleam
            </Title>
            <Title order={3}>
                S&#x02bb;hàkw᷾a
            </Title>
            <Title order={4}>Tropical</Title>
            <Title order={4}>Fantail</Title>
            <Title order={4}>Polar</Title>
        </Stack>
    );
}
