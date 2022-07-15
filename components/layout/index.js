import { Box } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" border={"1px"} borderColor={"pink.200"} padding={4}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
