// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import category from "./category";
import about from "./about";
import house from "./house";
import artInstallation from "./artInstallation";
import social from "./social";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    pageInfo,
    category,
    about,
    house,
    artInstallation,
    social,
  ]),
});
