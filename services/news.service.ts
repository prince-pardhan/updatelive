import News from "@/models/News";

export const createNewsService =
  async (body: any) => {
    const news =
      await News.create(body);

    return news;
  };

export const getNewsService =
  async (search: string) => {
    const news =
      await News.find({
        title: {
          $regex: search,
          $options: "i",
        },
      }).sort({
        createdAt: -1,
      });

    return news;
  };