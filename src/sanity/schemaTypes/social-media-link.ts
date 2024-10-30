export default {
  title: "Social Media Link",
  name: "socialMediaLink",
  type: "document",
  fields: [
    {
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
    },
    {
      name: "link",
      title: "Link",
      type: "url",
    },
    {
      name: "hidden",
      title: "Hidden",
      type: "boolean",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "type",
    },
  },
};
