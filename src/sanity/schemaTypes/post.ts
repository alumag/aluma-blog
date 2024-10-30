import { defineType, defineField } from "sanity";
import { language } from "./language";
import { slug } from "./slug";

export default defineType({
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    defineField({
      ...slug,
      validation: (rule) => rule.required(),
    }),
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      initialValue: [],
      validation: (rule) => rule.required(),
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "reference",
      to: [{ type: "gallery" }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "tags",
      options: {
        allowCreate: true,
      },
      initialValue: [],
      validation: (rule) => rule.required(),
    },
    defineField({
      ...language,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      language: "language",
      slug: "slug",
    },
    prepare(selection) {
      const { title, language, slug } = selection;
      return {
        title: `${title} (${language})`,
        subtitle: `Slug: ${slug.current}`,
      };
    },
  },
});
