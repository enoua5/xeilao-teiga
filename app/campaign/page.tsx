import TezagoText from "@/component/text-render/tezago-text";
import { List, ListItem, Stack, Text, Title } from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";
import { AzsVanguardText } from "../wiki/ship/azs-vanguard/page";

export const metadata: Metadata = {
    title: "Campaign",
};

export default function CampaignHome() {
    return (
        <Stack>
            <Title>
                <TezagoText text="Dasu nai 'iva no Xeilao Teiga" ruby />
            </Title>
            <Title order={2}>Intro</Title>
            <Text>
                It is the 433rd <Link href="/wiki/todo">Year of Peace</Link>,
                and the{" "}
                <Link href="/wiki/ship/azs-vanguard">
                    <AzsVanguardText />
                </Link>{" "}
                is preparing for a jump into deep space. The ship has been
                chartered to the{" "}
                <Link href="/wiki/todo">
                    Solarian Federation (
                    <TezagoText text="Meinato ki Sol" />)
                </Link>{" "}
                as a research vessel. Under the command of{" "}
                <Link href="/wiki/todo">
                    Captain Tsalain (
                    <TezagoText text="Tsalain" />)
                </Link>
                , it carries out its mission to explore uncharted regions of
                space, to establish peaceful contact with unknown civilizations,
                and to advance the Federation&apos;s understanding of the
                universe.
            </Text>
            <Title order={2}>System rules</Title>
            <Text>
                We&apos;ll be using a custom bespoke system for this campaign.
                You can find the rules for that system{" "}
                <Link href="/system">here</Link>. Note that because this system
                was created for this campaign, it will be a little short on
                content. Don&apos;t be afraid to ask me to work with you to fill
                in details as needed for your character&apos;s needs.
            </Text>
            <Title order={2}>Lore</Title>
            <Text>
                I have put together these introductions to various aspects of
                the setting. You are not required to read them to play the
                campaign, but I would recommend it. These pages will also link
                to the <Link href="/wiki">wiki</Link>. You are not expected to
                explore the wiki at all, but you are free to do so if you are
                curious.
            </Text>
            <List>
                <ListItem>
                    <Link href="campaign/cosmology">
                        Cosmology and Creation Myths
                    </Link>
                </ListItem>
                <ListItem>History</ListItem>
                <ListItem>Major locations and political entities</ListItem>
            </List>
        </Stack>
    );
}
