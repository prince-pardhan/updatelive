"use client";

import Link from "next/link";

import {
  Flex,
  Title,
  Button,
} from "@mantine/core";

export default function Navbar() {
  return (
    <Flex
      justify="space-between"
      align="center"
      p="md"
      bg="black"
    >
      <Title c="white">
        Breaking News
      </Title>

      <Flex gap={10}>
        <Link href="/">
          <Button color="red">
            Home
          </Button>
        </Link>

        <Link href="/create">
          <Button color="blue">
            Add News
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}