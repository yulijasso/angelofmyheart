"use client";

import { Box, Heading, Text, Stack, Button, Container } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      bg="bg.DEFAULT"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={20}
    >
      <Container maxW="900px">
        <Stack gap={8} textAlign="center" px={{ base: 6, md: 12 }}>
          <Stack gap={4}>
            <Heading
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              color="fg.DEFAULT"
              fontWeight="300"
              letterSpacing="tight"
              lineHeight="1.2"
            >
              Angel of My Heart
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              fontWeight="300"
              lineHeight="1.8"
              maxW="600px"
              mx="auto"
            >
              Timeless jewelry crafted for life's most meaningful moments
            </Text>
          </Stack>

          <Stack direction={{ base: "column", sm: "row" }} gap={4} justify="center" pt={4}>
            <Link href="/products">
              <Button
                bg="pastelPink.500"
                color="white"
                size="lg"
                px={8}
                py={6}
                fontWeight="400"
                fontSize="sm"
                letterSpacing="wide"
                textTransform="uppercase"
                borderRadius="none"
                _hover={{ bg: "pastelPink.600", opacity: 0.9 }}
                transition="all 0.3s ease"
              >
                Shop Collection
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
