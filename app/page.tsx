"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Container,
  Grid,
  Stack,
  Title,
} from "@mantine/core";

import Navbar from "@/components/Navbar";

import SearchBar from "../components/Searchbar";
// import SearchBar from "@/components/SearchBar";

import NewsCard from "@/components/NewsCard";

export default function HomePage() {
  const [news, setNews] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const getNews =
    async () => {
      const res = await fetch(
        `/api/news?search=${search}`
      );

      const data =
        await res.json();

      setNews(data);
    };

  useEffect(() => {
    getNews();
  }, [search]);

  return (
    <>
      <Navbar />

      <Container py={30}>
        <Stack>
          <Title>
            Latest Breaking News
          </Title>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <Grid>
            {news.map(
              (item: any) => (
                <Grid.Col
                  span={4}
                  key={item._id}
                >
                  <NewsCard
                    news={item}
                  />
                </Grid.Col>
              )
            )}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}