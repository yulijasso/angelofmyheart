"use client";

import { Box, Container, Flex, Heading, Button, IconButton, Badge, Stack, Text } from "@chakra-ui/react";
import { FiShoppingCart, FiUser, FiMenu } from "react-icons/fi";
import { useCartStore } from "@/lib/store/cartStore";
import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data/products";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartCount = useCartStore((state) => state.getCount());

  return (
    <Box
      as="nav"
      bg="rgba(255, 255, 255, 0.95)"
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor="border.subtle"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Container maxW="1400px" py={6}>
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading
              fontSize="md"
              color="fg.DEFAULT"
              cursor="pointer"
              fontWeight="400"
              letterSpacing="wide"
              textTransform="uppercase"
              transition="opacity 0.25s"
              _hover={{ opacity: 0.7 }}
            >
              Angel of My Heart
            </Heading>
          </Link>

          {/* Desktop Navigation */}
          <Stack
            direction="row"
            gap={10}
            display={{ base: "none", lg: "flex" }}
            align="center"
          >
            <Link href="/products" style={{ textDecoration: "none" }}>
              <Text
                fontWeight="400"
                fontSize="xs"
                color="fg.muted"
                letterSpacing="wide"
                textTransform="uppercase"
                transition="opacity 0.25s"
                _hover={{ opacity: 0.6 }}
              >
                Shop All
              </Text>
            </Link>

            {categories.slice(0, 4).map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontWeight="400"
                  fontSize="xs"
                  color="fg.muted"
                  letterSpacing="wide"
                  textTransform="uppercase"
                  transition="opacity 0.25s"
                  _hover={{ opacity: 0.6 }}
                >
                  {category.name}
                </Text>
              </Link>
            ))}
          </Stack>

          {/* Right Side Icons */}
          <Flex gap={6} align="center">
            <Link href="/account">
              <Box
                color="fg.DEFAULT"
                transition="opacity 0.25s"
                _hover={{ opacity: 0.6 }}
                cursor="pointer"
              >
                <FiUser size={18} />
              </Box>
            </Link>

            <Link href="/cart">
              <Box position="relative">
                <Box
                  color="fg.DEFAULT"
                  transition="opacity 0.25s"
                  _hover={{ opacity: 0.6 }}
                  cursor="pointer"
                >
                  <FiShoppingCart size={18} />
                </Box>
                {cartCount > 0 && (
                  <Badge
                    position="absolute"
                    top="-8px"
                    right="-8px"
                    bg="pastelPink.500"
                    color="white"
                    borderRadius="full"
                    fontSize="2xs"
                    minW="16px"
                    h="16px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontWeight="500"
                    px={1}
                  >
                    {cartCount}
                  </Badge>
                )}
              </Box>
            </Link>

            {/* Mobile Menu Button */}
            <Box
              display={{ base: "block", lg: "none" }}
              color="fg.DEFAULT"
              transition="opacity 0.25s"
              _hover={{ opacity: 0.6 }}
              cursor="pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <FiMenu size={20} />
            </Box>
          </Flex>
        </Flex>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <Stack
            mt={6}
            pt={6}
            borderTop="1px"
            borderColor="border.subtle"
            display={{ base: "flex", lg: "none" }}
            gap={4}
          >
            <Link href="/products" style={{ textDecoration: "none" }}>
              <Text
                fontSize="xs"
                fontWeight="400"
                color="fg.muted"
                letterSpacing="wide"
                textTransform="uppercase"
                transition="opacity 0.25s"
                _hover={{ opacity: 0.6 }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop All
              </Text>
            </Link>

            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                style={{ textDecoration: "none" }}
              >
                <Text
                  fontSize="xs"
                  fontWeight="400"
                  color="fg.muted"
                  letterSpacing="wide"
                  textTransform="uppercase"
                  transition="opacity 0.25s"
                  _hover={{ opacity: 0.6 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Text>
              </Link>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
