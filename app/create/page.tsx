"use client";

import {
  useState,
} from "react";

import {
  Container,
  Stack,
  TextInput,
  Button,
  Textarea,
} from "@mantine/core";

import { useRouter } from "next/navigation";

export default function CreatePage() {
  const router =
    useRouter();

  const [form, setForm] =
    useState({
      title: "",
      description: "",
      category: "",
      author: "",
    });

  const [file, setFile] =
    useState<any>(null);

  const handleSubmit =
    async () => {
      const res =
        await fetch(
          "/api/news",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              form
            ),
          }
        );

      const data =
        await res.json();

      if (file) {
        const imageData =
          new FormData();

        imageData.append(
          "image",
          file
        );

        await fetch(
          `/api/news/${data.news._id}/image`,
          {
            method: "PUT",
            body: imageData,
          }
        );
      }

      router.push("/");
    };

  return (
    <Container
      size="sm"
      py={40}
    >
      <Stack>
        <TextInput
          placeholder="Title"
          onChange={(e) =>
            setForm({
              ...form,
              title:
                e.target.value,
            })
          }
        />

        <Textarea
          placeholder="Description"
          minRows={5}
          onChange={(e) =>
            setForm({
              ...form,
              description:
                e.target.value,
            })
          }
        />

        <TextInput
          placeholder="Category"
          onChange={(e) =>
            setForm({
              ...form,
              category:
                e.target.value,
            })
          }
        />

        <TextInput
          placeholder="Author"
          onChange={(e) =>
            setForm({
              ...form,
              author:
                e.target.value,
            })
          }
        />

        <input style={{color:"black"}}
          type="file"
          onChange={(e: any) =>
            setFile(
              e.target.files[0]
            )
          }
        />

        <Button
          onClick={
            handleSubmit
          }
        >
          Publish News
        </Button>
      </Stack>
    </Container>
  );
}