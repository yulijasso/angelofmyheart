"use client";

import { Box, Container, Heading, Stack, Text, Button, Image, Grid, Badge, Select, Flex } from "@chakra-ui/react";
import { products } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cartStore";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiShoppingCart, FiStar, FiArrowLeft } from "react-icons/fi";

export default function ProductDetailPage({ params }) {
  const router = useRouter();
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((p) => p.id === parseInt(params.id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center" py={16}>
          <Heading size="lg" mb={4}>Product Not Found</Heading>
          <Link href="/products">
            <Button colorScheme="pink">Browse All Products</Button>
          </Link>
        </Box>
      </Container>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Stack gap={8}>
        {/* Back Button */}
        <Link href="/products" style={{ textDecoration: "none" }}>
          <Button leftIcon={<FiArrowLeft />} variant="ghost">
            Back to Products
          </Button>
        </Link>

        {/* Product Details */}
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
          {/* Product Image */}
          <Box>
            <Box
              borderRadius="xl"
              overflow="hidden"
              bg="gray.100"
              _dark={{ bg: "gray.700" }}
              h={{ base: "400px", md: "600px" }}
              position="relative"
            >
              <Image
                src={product.image}
                alt={product.name}
                objectFit="cover"
                w="100%"
                h="100%"
              />
              {!product.inStock && (
                <Badge
                  position="absolute"
                  top={4}
                  right={4}
                  colorScheme="red"
                  fontSize="md"
                  p={2}
                >
                  Out of Stock
                </Badge>
              )}
            </Box>
          </Box>

          {/* Product Info */}
          <Stack gap={6}>
            <Box>
              <Heading size="2xl" mb={2}>
                {product.name}
              </Heading>

              <Flex align="center" gap={3} mb={4}>
                <Flex align="center" gap={1}>
                  <FiStar fill="gold" color="gold" />
                  <Text fontWeight="bold" fontSize="lg">{product.rating}</Text>
                </Flex>
                <Text color="gray.500">({product.reviews} reviews)</Text>
              </Flex>

              <Text fontSize="4xl" fontWeight="bold" color="pink.500">
                ${product.price.toLocaleString()}
              </Text>
            </Box>

            <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
              {product.description}
            </Text>

            {/* Size Selection for rings */}
            {product.sizes && product.sizes.length > 0 && (
              <Box>
                <Text fontWeight="bold" mb={2}>
                  Select Size:
                </Text>
                <Select
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  maxW="200px"
                >
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      Size {size}
                    </option>
                  ))}
                </Select>
              </Box>
            )}

            {/* Quantity */}
            <Box>
              <Text fontWeight="bold" mb={2}>
                Quantity:
              </Text>
              <Select
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                maxW="100px"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </Select>
            </Box>

            {/* Add to Cart Button */}
            <Stack direction="row" gap={4}>
              <Button
                colorScheme="pink"
                size="lg"
                leftIcon={<FiShoppingCart />}
                onClick={handleAddToCart}
                isDisabled={!product.inStock}
                flex="1"
              >
                {addedToCart ? "✓ Added to Cart!" : "Add to Cart"}
              </Button>
              <Button
                colorScheme="pink"
                variant="outline"
                size="lg"
                onClick={() => {
                  handleAddToCart();
                  router.push("/checkout");
                }}
                isDisabled={!product.inStock}
              >
                Buy Now
              </Button>
            </Stack>

            {/* Product Details */}
            <Box
              p={6}
              borderRadius="lg"
              borderWidth="1px"
              borderColor="gray.200"
              _dark={{ borderColor: "gray.600" }}
            >
              <Heading size="md" mb={4}>
                Product Details
              </Heading>
              <Stack gap={2}>
                {Object.entries(product.details).map(([key, value]) => (
                  <Flex key={key} justify="space-between">
                    <Text fontWeight="medium" textTransform="capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}:
                    </Text>
                    <Text color="gray.600" _dark={{ color: "gray.300" }}>
                      {value}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Box>

            {/* Trust Badges */}
            <Grid templateColumns="repeat(3, 1fr)" gap={4} pt={4}>
              <Stack textAlign="center" gap={2}>
                <Text fontSize="2xl">💎</Text>
                <Text fontSize="sm" fontWeight="medium">Certified</Text>
              </Stack>
              <Stack textAlign="center" gap={2}>
                <Text fontSize="2xl">🚚</Text>
                <Text fontSize="sm" fontWeight="medium">Free Shipping</Text>
              </Stack>
              <Stack textAlign="center" gap={2}>
                <Text fontSize="2xl">↩️</Text>
                <Text fontSize="sm" fontWeight="medium">30-Day Returns</Text>
              </Stack>
            </Grid>
          </Stack>
        </Grid>
      </Stack>
    </Container>
  );
}
