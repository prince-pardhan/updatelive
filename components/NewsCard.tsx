"use client";

import Link from "next/link";

import {
  Card,
  Image,
  Text,
  Button,
  Stack,
  Box,
} from "@mantine/core";

export default function NewsCard({
  news,
}: any) {
  return (
    <Card
      shadow="lg"
      radius="md"
      p="md"
      withBorder
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Section>
        <Image
          src={news.image}
          h={220}
          alt={news.title}
          fallbackSrc="https://placehold.co/600x400?text=News+Image"
          style={{
            objectFit: "cover",
          }}
        />
      </Card.Section>

      <Stack
        mt={10}
        justify="space-between"
        style={{
          flex: 1,
        }}
      >
        <Box>
          <Text
            fw={700}
            size="lg"
            lineClamp={2}
          >
            {news.title}
          </Text>

          <Text
            mt={8}
            size="sm"
            c="dimmed"
            lineClamp={3}
          >
            {news.description}
          </Text>

          <Text
            mt={10}
            size="xs"
            c="red"
            fw={700}
          >
            {news.category}
          </Text>
        </Box>

        <Link
          href={`/news/${news._id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            fullWidth
            color="red"
            radius="md"
            mt={15}
          >
            Read More
          </Button>
        </Link>
      </Stack>
    </Card>
  );
}