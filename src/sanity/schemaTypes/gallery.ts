import { defineType } from "sanity";
import { baseLanguage } from "./localeStringType";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          type: "localePicture",
        },
      ],
      options: {
        layout: "grid",
      },
    },
    {
      name: "display",
      type: "string",
      title: "Display as",
      description: "How should we display these images?",
      options: {
        list: [
          { title: "Stacked on top of eachother", value: "stacked" },
          { title: "In-line", value: "inline" },
          { title: "Carousel", value: "carousel" },
        ],
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
    {
      name: "zoom",
      type: "boolean",
      title: "Zoom enabled",
      description: "Should we enable zooming of images?",
    },
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare(selection) {
      const { images } = selection;
      const length = images ? Object.keys(images).length : 0;

      return {
        title: `Gallery block of ${length} images`,
        subtitle:
          length > 0
            ? `Alt text: ${images[0].alt[baseLanguage.id]}`
            : "No images",
        media: length > 0 ? images[0] : undefined,
      };
    },
  },
});
