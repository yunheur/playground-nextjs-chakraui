import { Center, Flex, Icon, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { MdHomeFilled } from "react-icons/md";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      backgroundColor={"pink.200"}
      padding={5}
    >
      <NextLink href="/" passHref>
        <Link>
          <Center>
            <Icon as={MdHomeFilled} w={8} h={8} color={"pink.400"} />
          </Center>
        </Link>
      </NextLink>
    </Flex>
  );
};

export default Header;
