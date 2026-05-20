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
          src={news.avtar}
          h={220}
          alt={news.title}
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
            style={{
              wordBreak: "break-word",
            }}
          >
            {news.title}
          </Text>

          <Text
            mt={8}
            size="sm"
            c="dimmed"
            lineClamp={3}
            style={{
              wordBreak: "break-word",
            }}
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
            width: "100%",
          }}
        >
          <Button
            fullWidth
            color="red"
            radius="md"
            mt={15}
            size="sm"
          >
            Read More
          </Button>
        </Link>
      </Stack>
    </Card>
  );
}