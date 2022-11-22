export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Category",
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
      name: "href",
      title: "Href",
      description: "hypertext reference of Category",
      type: "string",
    },
  ],
};
