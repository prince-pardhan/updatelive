"use client";

import Link from "next/link";

import {
  Card,
  Image,
  Text,
  Button,
  Stack,
} from "@mantine/core";

export default function NewsCard({
  news,
}: any) {
  return (
    <Card shadow="lg">
      <Card.Section>
        <Image
          src={news.image}
          h={220}
        />
      </Card.Section>

      <Stack mt={10}>
        <Text fw={700}>
          {news.title}
        </Text>

        <Text lineClamp={3}>
          {news.description}
        </Text>

        <Text c="dimmed">
          {news.category}
        </Text>

        <Link
          href={`/news/${news._id}`}
        >
          <Button
            fullWidth
            color="red"
          >
            Read More
          </Button>
        </Link>
      </Stack>
    </Card>
  );
}