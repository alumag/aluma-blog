import { language } from "./language";

export default {
  type: "document",
  name: "siteMetadata",
  title: "Site Metadata",
  fields: [
    {
      type: "string",
      name: "siteName",
      title: "Site Name",
    },
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "text",
      name: "description",
      title: "Describe This Site",
    },
    {
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
    },
    {
      type: "string",
      name: "locale",
      title: "Locale",
    },
    language,
  ],
};
