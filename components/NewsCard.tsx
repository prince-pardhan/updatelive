"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import {
  Container,
  SimpleGrid,
  Title,
  Card,
  Image,
  Text,
  Button,
  Stack,
  Box,
} from "@mantine/core";

export default function HomePage() {
  const [news, setNews] =
    useState([]);

  const getNews =
    async () => {
      const res = await fetch(
        "/api/news"
      );

      const data =
        await res.json();

      setNews(data);
    };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container
      size="xl"
      py={20}
    >
      <Title mb={20}>
        Breaking News
      </Title>

      <SimpleGrid
        cols={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
        spacing="md"
      >
        {news.map(
          (item: any) => (
            <Card
              key={item._id}
              shadow="lg"
              radius="md"
              p="sm"
              withBorder
              style={{
                width: "100%",
              }}
            >
              <Card.Section>
                <Image
                  src={item.image}
                  alt={item.title}
                  h={220}
                  w="100%"
                  style={{
                    objectFit:
                      "cover",
                  }}
                />
              </Card.Section>

              <Stack mt={10}>
                <Box>
                  <Text
                    fw={700}
                    size="md"
                    lineClamp={2}
                  >
                    {item.title}
                  </Text>

                  <Text
                    mt={8}
                    size="sm"
                    c="dimmed"
                    lineClamp={3}
                  >
                    {
                      item.description
                    }
                  </Text>

                  <Text
                    mt={10}
                    size="xs"
                    c="red"
                    fw={700}
                  >
                    {item.category}
                  </Text>
                </Box>

                <Link
                  href={`/news/${item._id}`}
                  style={{
                    textDecoration:
                      "none",
                  }}
                >
                  <Button
                    fullWidth
                    color="red"
                    radius="md"
                  >
                    Read More
                  </Button>
                </Link>
              </Stack>
            </Card>
          )
        )}
      </SimpleGrid>
    </Container>
  );
}