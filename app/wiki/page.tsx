import { List, ListItem, Stack, Title } from "@mantine/core";
import Link from "next/link";

export default function WikiHome() {
    return (
        <Stack>
            <Title>Xeilao Teiga Wiki</Title>
            <List>
                <ListItem>
                    <Link href="/wiki/ship">Ships</Link>
                </ListItem>
                <ListItem>
                    <Link href="/wiki/todo">Species</Link>
                </ListItem>
            </List>
        </Stack>
    );
}
