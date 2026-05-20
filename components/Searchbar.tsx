"use client";

import { TextInput } from "@mantine/core";

export default function SearchBar({
  search,
  setSearch,
}: any) {
  return (
    <TextInput
      placeholder="Search news..."
      value={search}
      onChange={(e) =>
        setSearch(
          e.target.value
        )
      }
    />
  );
}