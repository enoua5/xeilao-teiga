"use client";

import TezagoText from "@/component/text-render/tezago-text";
import { Box, Checkbox, Stack, TextInput } from "@mantine/core";
import { useState } from "react";

export default function TezagoTextRenderTool() {
    const [text, setText] = useState("");
    const [ruby, setRuby] = useState(false);

    return (
        <Stack>
            <Box>
                <TezagoText text={text} ruby={ruby} />
            </Box>
            <TextInput
                label="Text to render"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Checkbox
                label="Ruby"
                checked={ruby}
                onChange={(e) => setRuby(e.target.checked)}
            />
        </Stack>
    );
}
