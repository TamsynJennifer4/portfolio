export default {
  name: "artInstallation",
  title: "ArtInstallation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of the art installation",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
    },
  ],
};
