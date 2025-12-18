"use client";

import { Box, Container, Heading, Stack, Text, Button } from "@chakra-ui/react";
import { useCartStore } from "@/lib/store/cartStore";
import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    // Clear cart after successful payment
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <Container maxW="container.md" py={16}>
      <Stack gap={6} textAlign="center">
        <Box fontSize="6xl">✨</Box>
        <Heading size="2xl" color="pink.500">
          Order Confirmed!
        </Heading>
        <Text fontSize="xl" color="gray.600" _dark={{ color: "gray.300" }}>
          Thank you for your purchase! Your order has been successfully placed.
        </Text>

        <Box
          p={8}
          borderWidth="1px"
          borderRadius="lg"
          bg="pink.50"
          _dark={{ bg: "gray.800" }}
          borderColor="pink.200"
          _dark={{ borderColor: "pink.700" }}
        >
          <Stack gap={4}>
            <Heading size="md">What's Next?</Heading>
            <Text>
              📧 You'll receive an order confirmation email shortly.
            </Text>
            <Text>
              📦 Your jewelry will be carefully packaged and shipped within 2-3 business days.
            </Text>
            <Text>
              🚚 Track your order from your account dashboard.
            </Text>
          </Stack>
        </Box>

        <Stack direction={{ base: "column", sm: "row" }} gap={4} justify="center" pt={4}>
          <Link href="/account">
            <Button colorScheme="pink" size="lg">
              View Order Details
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" colorScheme="pink" size="lg">
              Continue Shopping
            </Button>
          </Link>
        </Stack>

        {sessionId && (
          <Text fontSize="sm" color="gray.500">
            Order ID: {sessionId}
          </Text>
        )}
      </Stack>
    </Container>
  );
}
