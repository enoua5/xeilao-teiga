import { List, ListItem, Stack, Title } from "@mantine/core";
import Link from "next/link";
import { AzsVanguardText } from "./azs-vanguard/page";

export default function ShipDirectory() {
    return (
        <Stack>
            <Title>List of Star Ships</Title>
            <Title order={2}>Solarian Federation</Title>
            <List>
                <ListItem>
                    <Link href="/wiki/ship/azs-vanguard">
                        <AzsVanguardText />
                    </Link>
                </ListItem>
            </List>
        </Stack>
    );
}
