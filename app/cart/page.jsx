"use client";

import { Box, Container, Heading, Stack, Text, Button, Image, Flex, IconButton, Badge } from "@chakra-ui/react";
import { useCartStore } from "@/lib/store/cartStore";
import Link from "next/link";
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore();

  const total = getTotal();
  const shipping = total > 500 ? 0 : 25;
  const tax = total * 0.08; // 8% tax
  const grandTotal = total + shipping + tax;

  if (items.length === 0) {
    return (
      <Container maxW="container.md" py={16}>
        <Stack gap={6} textAlign="center">
          <Box fontSize="6xl">🛒</Box>
          <Heading size="xl">Your Cart is Empty</Heading>
          <Text color="gray.600" _dark={{ color: "gray.300" }}>
            Looks like you haven't added anything to your cart yet.
          </Text>
          <Link href="/products">
            <Button colorScheme="pink" size="lg" leftIcon={<FiShoppingBag />}>
              Start Shopping
            </Button>
          </Link>
        </Stack>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Stack gap={8}>
        <Flex justify="space-between" align="center">
          <Heading size="2xl">Shopping Cart</Heading>
          <Button
            variant="ghost"
            colorScheme="red"
            size="sm"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Flex>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={8}
          align="flex-start"
        >
          {/* Cart Items */}
          <Box flex="2">
            <Stack gap={4}>
              {items.map((item) => (
                <Box
                  key={item.cartItemId}
                  p={4}
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="white"
                  _dark={{ bg: "gray.800" }}
                >
                  <Flex gap={4}>
                    {/* Product Image */}
                    <Link href={`/products/${item.id}`}>
                      <Box
                        w="120px"
                        h="120px"
                        borderRadius="md"
                        overflow="hidden"
                        bg="gray.100"
                        _dark={{ bg: "gray.700" }}
                        flexShrink={0}
                        cursor="pointer"
                      >
                        <Image
                          src={item.image}
                          alt={item.name}
                          objectFit="cover"
                          w="100%"
                          h="100%"
                        />
                      </Box>
                    </Link>

                    {/* Product Info */}
                    <Flex flex="1" direction="column" justify="space-between">
                      <Box>
                        <Link href={`/products/${item.id}`} style={{ textDecoration: "none" }}>
                          <Heading size="md" mb={2} _hover={{ color: "pink.500" }}>
                            {item.name}
                          </Heading>
                        </Link>
                        {item.selectedSize && (
                          <Badge colorScheme="pink" mb={2}>
                            Size: {item.selectedSize}
                          </Badge>
                        )}
                        <Text fontSize="xl" fontWeight="bold" color="pink.500">
                          ${item.price.toLocaleString()}
                        </Text>
                      </Box>

                      {/* Quantity Controls */}
                      <Flex align="center" gap={4} mt={4}>
                        <Flex align="center" gap={2}>
                          <IconButton
                            icon={<FiMinus />}
                            size="sm"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                            aria-label="Decrease quantity"
                          />
                          <Text fontWeight="bold" minW="30px" textAlign="center">
                            {item.quantity}
                          </Text>
                          <IconButton
                            icon={<FiPlus />}
                            size="sm"
                            onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                            aria-label="Increase quantity"
                          />
                        </Flex>

                        <Text fontSize="lg" fontWeight="bold">
                          ${(item.price * item.quantity).toLocaleString()}
                        </Text>

                        <IconButton
                          icon={<FiTrash2 />}
                          colorScheme="red"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.cartItemId)}
                          aria-label="Remove item"
                          ml="auto"
                        />
                      </Flex>
                    </Flex>
                  </Flex>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Order Summary */}
          <Box
            flex="1"
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

              <Flex justify="space-between">
                <Text>Subtotal:</Text>
                <Text fontWeight="bold">${total.toFixed(2)}</Text>
              </Flex>

              <Flex justify="space-between">
                <Text>Shipping:</Text>
                <Text fontWeight="bold">
                  {shipping === 0 ? (
                    <Badge colorScheme="green">FREE</Badge>
                  ) : (
                    `$${shipping.toFixed(2)}`
                  )}
                </Text>
              </Flex>

              {shipping > 0 && (
                <Text fontSize="sm" color="gray.500">
                  💡 Add ${(500 - total).toFixed(2)} more for free shipping
                </Text>
              )}

              <Flex justify="space-between">
                <Text>Tax (8%):</Text>
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
                colorScheme="pink"
                size="lg"
                w="full"
                onClick={() => router.push("/checkout")}
              >
                Proceed to Checkout
              </Button>

              <Link href="/products">
                <Button variant="outline" w="full">
                  Continue Shopping
                </Button>
              </Link>

              {/* Trust Badges */}
              <Stack gap={2} pt={4} fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }}>
                <Flex align="center" gap={2}>
                  <Text>🔒</Text>
                  <Text>Secure Checkout</Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Text>↩️</Text>
                  <Text>30-Day Returns</Text>
                </Flex>
                <Flex align="center" gap={2}>
                  <Text>💎</Text>
                  <Text>Certified Authentic</Text>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
