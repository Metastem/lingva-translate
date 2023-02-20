import { FC } from "react";
import { Stack, Text, Link } from "@chakra-ui/react";

type Props = {
    [key: string]: any
};

const vercelSponsor = process.env["NEXT_PUBLIC_VERCEL_SPONSOR"] === "true";

const Footer: FC<Props> = (props) => (
    <Stack
        as="footer"
        w="full"
        p={3}
        fontSize={["sm", null, "md"]}
        direction={["column", null, "row"]}
        justify="center"
        align="center"
        spacing={[1, null, 2]}
        {...props}
    >
        <Link href="https://metastem.su/" isExternal={true}>
            <Text as="span">&#169; Metastem</Text>
        </Link>
    </Stack>
);

export default Footer;
