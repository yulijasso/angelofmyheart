"use client";

import { Box, Container, Heading, Stack, Text, Button, Grid, Badge } from "@chakra-ui/react";
import Link from "next/link";
import { FiUser, FiPackage, FiHeart, FiSettings } from "react-icons/fi";

export default function AccountPage() {
  // In a real app, you'd fetch user data and orders from your backend
  const user = {
    name: "Guest User",
    email: "guest@example.com",
  };

  const recentOrders = [
    {
      id: "ORDER-001",
      date: "2025-11-10",
      total: 2499.99,
      status: "Delivered",
      items: 2
    },
    {
      id: "ORDER-002",
      date: "2025-11-08",
      total: 1899.99,
      status: "In Transit",
      items: 1
    },
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <Stack gap={8}>
        <Heading size="2xl">My Account</Heading>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }} gap={6}>
          {/* Profile Card */}
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            _dark={{ bg: "gray.800" }}
            textAlign="center"
          >
            <Box fontSize="3xl" mb={3}>
              <FiUser />
            </Box>
            <Heading size="md" mb={2}>
              Profile
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Manage your account
            </Text>
          </Box>

          {/* Orders Card */}
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            _dark={{ bg: "gray.800" }}
            textAlign="center"
          >
            <Box fontSize="3xl" mb={3}>
              <FiPackage />
            </Box>
            <Heading size="md" mb={2}>
              Orders
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Track your purchases
            </Text>
          </Box>

          {/* Wishlist Card */}
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            _dark={{ bg: "gray.800" }}
            textAlign="center"
          >
            <Box fontSize="3xl" mb={3}>
              <FiHeart />
            </Box>
            <Heading size="md" mb={2}>
              Wishlist
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Save your favorites
            </Text>
          </Box>

          {/* Settings Card */}
          <Box
            p={6}
            borderWidth="1px"
            borderRadius="lg"
            bg="white"
            _dark={{ bg: "gray.800" }}
            textAlign="center"
          >
            <Box fontSize="3xl" mb={3}>
              <FiSettings />
            </Box>
            <Heading size="md" mb={2}>
              Settings
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Preferences & security
            </Text>
          </Box>
        </Grid>

        {/* User Info */}
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "gray.800" }}
        >
          <Heading size="lg" mb={4}>
            Account Information
          </Heading>
          <Stack gap={3}>
            <Box>
              <Text fontWeight="bold">Name:</Text>
              <Text color="gray.600" _dark={{ color: "gray.300" }}>
                {user.name}
              </Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Email:</Text>
              <Text color="gray.600" _dark={{ color: "gray.300" }}>
                {user.email}
              </Text>
            </Box>
          </Stack>
        </Box>

        {/* Recent Orders */}
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          bg="white"
          _dark={{ bg: "gray.800" }}
        >
          <Heading size="lg" mb={4}>
            Recent Orders
          </Heading>

          {recentOrders.length === 0 ? (
            <Box textAlign="center" py={8}>
              <Text color="gray.500" mb={4}>
                You haven't placed any orders yet.
              </Text>
              <Link href="/products">
                <Button colorScheme="pink">
                  Start Shopping
                </Button>
              </Link>
            </Box>
          ) : (
            <Stack gap={4}>
              {recentOrders.map((order) => (
                <Box
                  key={order.id}
                  p={4}
                  borderWidth="1px"
                  borderRadius="md"
                  _hover={{ borderColor: "pink.400" }}
                  transition="all 0.2s"
                >
                  <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={4} alignItems="center">
                    <Box>
                      <Text fontWeight="bold">{order.id}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {new Date(order.date).toLocaleDateString()}
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        Items
                      </Text>
                      <Text fontWeight="bold">{order.items}</Text>
                    </Box>
                    <Box>
                      <Text fontSize="sm" color="gray.500">
                        Total
                      </Text>
                      <Text fontWeight="bold" color="pink.500">
                        ${order.total.toLocaleString()}
                      </Text>
                    </Box>
                    <Box>
                      <Badge
                        colorScheme={order.status === "Delivered" ? "green" : "blue"}
                        fontSize="sm"
                        p={2}
                        borderRadius="md"
                      >
                        {order.status}
                      </Badge>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {/* Authentication Note */}
        <Box
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          bg="blue.50"
          _dark={{ bg: "gray.800" }}
          borderColor="blue.200"
          _dark={{ borderColor: "blue.700" }}
        >
          <Heading size="md" mb={3}>
            🔐 Authentication Coming Soon
          </Heading>
          <Text mb={4}>
            Full authentication with NextAuth.js will allow you to:
          </Text>
          <Stack gap={2} fontSize="sm">
            <Text>✓ Create an account and sign in</Text>
            <Text>✓ Save your order history</Text>
            <Text>✓ Track shipments in real-time</Text>
            <Text>✓ Create wishlists</Text>
            <Text>✓ Save shipping addresses</Text>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
