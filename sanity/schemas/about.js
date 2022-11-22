export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "biography",
      title: "Biography",
      type: "string",
    },
    {
      name: "profilePic",
      title: "Profile Pic",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
