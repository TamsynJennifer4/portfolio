interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Category extends SanityBody {
  _type: "category";
  title: string;
  image: Image;
  href: string;
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  categories: Category[];
  phoneNumber: string;
  email: string;
  address: string;
  inspirationalQuote: string;
}

export interface About extends SanityBody {
  _type: "about";
  name: string;
  biography: string;
  profilePic: Image;
}

export interface House extends SanityBody {
  _type: "house";
  title: string;
  image: Image;
  description: string;
}

export interface ArtInstallation extends SanityBody {
  title: string;
  _type: "artInstallation";
  image: Image;
  summary: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
