"use client";

import { Box, Container, Heading, SimpleGrid, Stack, Text, Button, Image, Select, Flex } from "@chakra-ui/react";
import { products, categories, materials } from "@/lib/data/products";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProductsPage() {
  const searchParams = useSearchParams();

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "all");
  const [selectedMaterial, setSelectedMaterial] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    // Filter by material
    if (selectedMaterial !== "all") {
      filtered = filtered.filter((product) => product.material === selectedMaterial);
    }

    // Filter by price range
    if (selectedPriceRange !== "all") {
      const range = priceRanges.find((r) => r.id === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(
          (product) => product.price >= range.min && product.price < range.max
        );
      }
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // featured - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, selectedMaterial, selectedPriceRange, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product, 1);
  };

  return (
    <Container maxW="1400px" py={16}>
      <Stack gap={12}>
        {/* Header */}
        <Box textAlign="center">
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }}
            mb={3}
            fontWeight="300"
            color="fg.DEFAULT"
            letterSpacing="tight"
          >
            {selectedCategory !== "all"
              ? categories.find((c) => c.id === selectedCategory)?.name || "Collection"
              : "Collection"}
          </Heading>
          <Text color="fg.muted" fontSize="sm" letterSpacing="wide" textTransform="uppercase">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'}
          </Text>
        </Box>

        {/* Filters - Minimal */}
        <Flex
          gap={6}
          direction={{ base: "column", md: "row" }}
          justify="center"
          align={{ base: "stretch", md: "center" }}
          borderBottom="1px"
          borderColor="border.subtle"
          pb={8}
        >
          <Box minW="180px">
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              size="sm"
              borderRadius="none"
              borderColor="border.DEFAULT"
              fontSize="xs"
              letterSpacing="wide"
              textTransform="uppercase"
              fontWeight="400"
              _hover={{ borderColor: "pastelPink.500" }}
              _focus={{ borderColor: "pastelPink.500", boxShadow: "none" }}
            >
              <option value="all">All</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </Select>
          </Box>

          <Box minW="180px">
            <Select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              size="sm"
              borderRadius="none"
              borderColor="border.DEFAULT"
              fontSize="xs"
              letterSpacing="wide"
              textTransform="uppercase"
              fontWeight="400"
              _hover={{ borderColor: "pastelPink.500" }}
              _focus={{ borderColor: "pastelPink.500", boxShadow: "none" }}
            >
              <option value="all">All Materials</option>
              {materials.map((mat) => (
                <option key={mat.id} value={mat.id}>
                  {mat.name}
                </option>
              ))}
            </Select>
          </Box>

          <Box minW="180px">
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              size="sm"
              borderRadius="none"
              borderColor="border.DEFAULT"
              fontSize="xs"
              letterSpacing="wide"
              textTransform="uppercase"
              fontWeight="400"
              _hover={{ borderColor: "pastelPink.500" }}
              _focus={{ borderColor: "pastelPink.500", boxShadow: "none" }}
            >
              <option value="featured">Sort By: Featured</option>
              <option value="price-low">Price: Low</option>
              <option value="price-high">Price: High</option>
              <option value="rating">Rating</option>
            </Select>
          </Box>
        </Flex>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <Box textAlign="center" py={16}>
            <Text fontSize="xl" color="fg.muted">
              No products found matching your filters.
            </Text>
            <Button
              mt={4}
              bg="pastelPink.500"
              color="white"
              _hover={{ bg: "pastelPink.600" }}
              onClick={() => {
                setSelectedCategory("all");
                setSelectedMaterial("all");
                setSelectedPriceRange("all");
              }}
            >
              Clear Filters
            </Button>
          </Box>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={{ base: 8, md: 12 }} pt={4}>
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                <Box
                  transition="opacity 0.3s"
                  _hover={{ opacity: 0.8 }}
                  cursor="pointer"
                >
                  {/* Product Image */}
                  <Box
                    position="relative"
                    aspectRatio="3/4"
                    bg="bg.subtle"
                    mb={4}
                    overflow="hidden"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      objectFit="cover"
                      w="100%"
                      h="100%"
                    />
                    {!product.inStock && (
                      <Box
                        position="absolute"
                        top={4}
                        right={4}
                        bg="white"
                        px={3}
                        py={1}
                        fontSize="2xs"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        fontWeight="500"
                      >
                        Sold Out
                      </Box>
                    )}
                  </Box>

                  {/* Product Info */}
                  <Stack gap={2}>
                    <Text
                      fontSize="sm"
                      fontWeight="400"
                      color="fg.DEFAULT"
                      noOfLines={2}
                      letterSpacing="tight"
                    >
                      {product.name}
                    </Text>

                    <Text
                      fontSize="sm"
                      fontWeight="300"
                      color="fg.muted"
                    >
                      ${product.price.toLocaleString()}
                    </Text>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Container>
  );
}
