import { defineType } from "sanity";

export const localePicture = defineType({
  title: "Picture (localized)",
  name: "localePicture",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      type: "localeString",
      title: "Alternative text",
    },
  ],
});
