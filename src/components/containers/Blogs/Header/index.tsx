import { Box, BoxProps, Container, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { containerMaxWidth, fallbackSrc, mediumBreakpoints } from "@src/definitions/variables";

export default function HeaderBlog(props: BoxProps) {
  const [mediumScreen] = useMediaQuery(mediumBreakpoints);
  return (
    <Box {...props} marginTop={mediumScreen ? "10vh" : "2vh"} bg="gray.50" padding="40px 10px">
      <Container maxW={containerMaxWidth} display="flex">
        <Box>
          <Image
            src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
            w="100%"
            loading="lazy"
            fallbackSrc={fallbackSrc}
          />
          <Heading marginTop="20px">Roki Coffee Shop Berhasil meraih modal 100 juta dari InvestKU</Heading>

          <Text marginTop="12px">29 menit yang lalu - 5 menit membaca</Text>
        </Box>
      </Container>
    </Box>
  );
}
