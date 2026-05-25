import { Stack, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
    return (
        <Stack>
            <Title>Xeilao Teiga</Title>
            <Text>
                This is a collection of resources for the Xeilao Teiga world and
                campaign setting. You&apos;re probably here for the campaign
                I&apos;m running. See{" "}
                <Link href="/campaign">Campaign Home</Link> for the campaign
                setting and system rules. See also{" "}
                <Link href="/wiki">Wiki</Link> for details on various pieces of
                lore. Note that the wiki is <em>very</em> work-in-progress.
            </Text>
        </Stack>
    );
}
