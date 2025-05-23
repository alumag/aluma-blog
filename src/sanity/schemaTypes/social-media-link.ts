import { defineField, defineType } from "sanity";

export default defineType({
  title: "Social Media Link",
  name: "socialMediaLink",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          "discord",
          "telegram",
          "linkedin",
          "github",
          "stackoverflow",
          "reddit",
          "duolingo",
          "facebook",
          "instagram",
          "twitter",
          "email",
          "whatsapp",
          "goodreads",
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hidden",
      title: "Hidden",
      type: "boolean",
      initialValue: true,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "type",
    },
  },
});
