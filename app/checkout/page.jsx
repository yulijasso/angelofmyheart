"use client";

import { Box, Container, Heading, Stack, Text, Button, Input, Grid, Flex } from "@chakra-ui/react";
import { useCartStore } from "@/lib/store/cartStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiLock } from "react-icons/fi";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });

  const total = getTotal();
  const shipping = total > 500 ? 0 : 25;
  const tax = total * 0.08;
  const grandTotal = total + shipping + tax;

  if (items.length === 0) {
    return (
      <Container maxW="container.md" py={16}>
        <Stack gap={6} textAlign="center">
          <Box fontSize="6xl">🛒</Box>
          <Heading size="xl">Your Cart is Empty</Heading>
          <Text color="gray.600" _dark={{ color: "gray.300" }}>
            Add some items to your cart before checking out.
          </Text>
          <Link href="/products">
            <Button colorScheme="pink" size="lg">
              Start Shopping
            </Button>
          </Link>
        </Stack>
      </Container>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Create Stripe checkout session
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          customerInfo: formData,
          total: grandTotal
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        alert("Error creating checkout session. Please try again.");
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Error processing checkout. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Stack gap={8}>
        <Heading size="2xl">Checkout</Heading>

        <form onSubmit={handleSubmit}>
          <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
            {/* Checkout Form */}
            <Stack gap={6}>
              {/* Contact Information */}
              <Box
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                bg="white"
                _dark={{ bg: "gray.800" }}
              >
                <Heading size="lg" mb={4}>
                  Contact Information
                </Heading>
                <Stack gap={4}>
                  <Box>
                    <Text fontWeight="medium" mb={2}>Email *</Text>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      required
                    />
                  </Box>
                </Stack>
              </Box>

              {/* Shipping Address */}
              <Box
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                bg="white"
                _dark={{ bg: "gray.800" }}
              >
                <Heading size="lg" mb={4}>
                  Shipping Address
                </Heading>
                <Stack gap={4}>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <Box>
                      <Text fontWeight="medium" mb={2}>First Name *</Text>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        required
                      />
                    </Box>
                    <Box>
                      <Text fontWeight="medium" mb={2}>Last Name *</Text>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        required
                      />
                    </Box>
                  </Grid>

                  <Box>
                    <Text fontWeight="medium" mb={2}>Address *</Text>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St"
                      required
                    />
                  </Box>

                  <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                    <Box>
                      <Text fontWeight="medium" mb={2}>City *</Text>
                      <Input
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        required
                      />
                    </Box>
                    <Box>
                      <Text fontWeight="medium" mb={2}>State *</Text>
                      <Input
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        required
                      />
                    </Box>
                    <Box>
                      <Text fontWeight="medium" mb={2}>ZIP Code *</Text>
                      <Input
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        placeholder="10001"
                        required
                      />
                    </Box>
                  </Grid>
                </Stack>
              </Box>

              {/* Payment Information Note */}
              <Box
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                bg="pink.50"
                _dark={{ bg: "gray.800" }}
                borderColor="pink.200"
                _dark={{ borderColor: "pink.800" }}
              >
                <Flex align="center" gap={3} mb={3}>
                  <FiLock size={24} />
                  <Heading size="md">Secure Payment</Heading>
                </Flex>
                <Text>
                  You'll be redirected to Stripe's secure checkout to complete your payment.
                  We never store your credit card information.
                </Text>
              </Box>
            </Stack>

            {/* Order Summary */}
            <Box>
              <Box
                p={6}
                borderWidth="1px"
                borderRadius="lg"
                bg="white"
                _dark={{ bg: "gray.800" }}
                position="sticky"
                top="100px"
              >
                <Stack gap={4}>
                  <Heading size="lg">Order Summary</Heading>

                  <Box borderTop="1px" borderColor="gray.200" _dark={{ borderColor: "gray.600" }} />

                  {/* Cart Items */}
                  <Stack gap={3} maxH="300px" overflowY="auto">
                    {items.map((item) => (
                      <Flex key={item.cartItemId} justify="space-between">
                        <Box flex="1">
                          <Text fontWeight="medium" noOfLines={1}>
                            {item.name}
                          </Text>
                          <Text fontSize="sm" color="gray.500">
                            Qty: {item.quantity}
                            {item.selectedSize && ` • Size: ${item.selectedSize}`}
                          </Text>
                        </Box>
                        <Text fontWeight="bold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>

                  <Box borderTop="1px" borderColor="gray.200" _dark={{ borderColor: "gray.600" }} />

                  <Flex justify="space-between">
                    <Text>Subtotal:</Text>
                    <Text fontWeight="bold">${total.toFixed(2)}</Text>
                  </Flex>

                  <Flex justify="space-between">
                    <Text>Shipping:</Text>
                    <Text fontWeight="bold">
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </Text>
                  </Flex>

                  <Flex justify="space-between">
                    <Text>Tax:</Text>
                    <Text fontWeight="bold">${tax.toFixed(2)}</Text>
                  </Flex>

                  <Box borderTop="1px" borderColor="gray.200" _dark={{ borderColor: "gray.600" }} />

                  <Flex justify="space-between" fontSize="xl">
                    <Text fontWeight="bold">Total:</Text>
                    <Text fontWeight="bold" color="pink.500">
                      ${grandTotal.toFixed(2)}
                    </Text>
                  </Flex>

                  <Button
                    type="submit"
                    colorScheme="pink"
                    size="lg"
                    w="full"
                    isLoading={isProcessing}
                    loadingText="Processing..."
                  >
                    Complete Order
                  </Button>

                  <Link href="/cart">
                    <Button variant="outline" w="full">
                      Back to Cart
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </form>
      </Stack>
    </Container>
  );
}
