import { defineField, defineType } from "sanity";
import { language } from "./language";

export default defineType({
  type: "document",
  name: "siteMetadata",
  title: "Site Metadata",
  fields: [
    defineField({
      type: "string",
      name: "siteName",
      title: "Site Name",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "text",
      name: "description",
      title: "Describe This Site",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "dir",
      title: "Direction",
      options: {
        list: [
          { title: "RTL", value: "rtl" },
          { title: "LTR", value: "ltr" },
        ],
      },
      initialValue: "rtl",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "locale",
      title: "Locale",
      validation: (rule) => rule.required(),
    }),
    language,
  ],
});
