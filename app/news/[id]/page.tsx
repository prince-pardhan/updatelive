"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Container,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";

export default function NewsPage({
  params,
}: any) {
  const [news, setNews] =
    useState<any>({});

  const getNews =
    async () => {
      const res = await fetch(
        `/api/news/${params.id}`
      );

      const data =
        await res.json();

      setNews(data);
    };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Container py={40}>
      <Stack>
        <Image
          src={news.image}
          h={400}
        />

        <Title>
          {news.title}
        </Title>

        <Text c="dimmed">
          {news.category}
        </Text>

        <Text>
          {news.description}
        </Text>

        <Text fw={700}>
          Author:
          {news.author}
        </Text>
      </Stack>
    </Container>
  );
}