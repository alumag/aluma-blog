import { defineField } from "sanity";

export const language = defineField({
  // should match 'languageField' plugin configuration setting, if customized
  name: "language",
  title: "Language",
  description: "Document's language",
  type: "string",
  options: {
    list: [
      { title: "Hebrew", value: "he" },
      { title: "English", value: "en" },
    ],
  },
  initialValue: "he",
  readOnly: true,
  hidden: false,
});
