import { ItemTypeDefinition } from '@datocms/cma-client';
type EnvironmentSettings = {
  locales: 'en' | 'sv';
};
export type Post = ItemTypeDefinition<
  EnvironmentSettings,
  '520129',
  {
    title: {
      type: 'string';
      localized: true;
    };
    background: {
      type: 'color';
    };
    password: {
      type: 'string';
    };
    content: {
      type: 'text';
      localized: true;
    };
    structured_content: {
      type: 'structured_text';
      localized: true;
    };
    image: {
      type: 'file';
    };
    link: {
      type: 'link';
    };
    author: {
      type: 'link';
    };
    slug: {
      type: 'slug';
      localized: true;
    };
    approve: {
      type: 'boolean';
    };
    audio: {
      type: 'file';
    };
  }
>;
export type Page = ItemTypeDefinition<
  EnvironmentSettings,
  '876485',
  {
    title: {
      type: 'string';
    };
    intro: {
      type: 'text';
    };
  }
>;
export type ExternalLink = ItemTypeDefinition<
  EnvironmentSettings,
  'A2G1FbVwRweKAL6vsjH6tA',
  {
    title: {
      type: 'string';
    };
    url: {
      type: 'string';
    };
  }
>;
export type Config = ItemTypeDefinition<
  EnvironmentSettings,
  'A-gIlC0WSD-KsVp4JDJZpA',
  {
    page_size: {
      type: 'integer';
    };
  }
>;
export type User = ItemTypeDefinition<
  EnvironmentSettings,
  'BmmC_204Q2q80pakRIUNhA',
  {
    email: {
      type: 'string';
    };
    password: {
      type: 'string';
    };
  }
>;
export type Start = ItemTypeDefinition<
  EnvironmentSettings,
  'EDSrTw81QlK2PiluP8Fnsw',
  {
    headline: {
      type: 'string';
    };
    posts: {
      type: 'links';
    };
  }
>;
export type Price = ItemTypeDefinition<
  EnvironmentSettings,
  'I3HUKldlQFO3nb4IyjUGYw',
  {
    amount: {
      type: 'integer';
    };
    currency: {
      type: 'link';
    };
  }
>;
export type Product = ItemTypeDefinition<
  EnvironmentSettings,
  'SPVCRSyTQfWakx9Kpd3YoA',
  {
    title: {
      type: 'string';
    };
    price: {
      type: 'links';
    };
    shopify_id: {
      type: 'string';
    };
  }
>;
export type Currency = ItemTypeDefinition<
  EnvironmentSettings,
  'dyrTB7hoQKCgXE4tHM2Rhg',
  {
    code: {
      type: 'string';
    };
  }
>;
export type InternalLink = ItemTypeDefinition<
  EnvironmentSettings,
  'ypczN77NRCWMOEX7fAbQRQ',
  {
    title: {
      type: 'string';
    };
    record: {
      type: 'link';
    };
  }
>;
export type Author = ItemTypeDefinition<
  EnvironmentSettings,
  'zqfriQurTreZRr6icMacKA',
  {
    name: {
      type: 'string';
    };
    json: {
      type: 'json';
    };
  }
>;
export type Menu = ItemTypeDefinition<
  EnvironmentSettings,
  '4DybDCL-TYK2JK9GyXvEEQ',
  {
    title: {
      type: 'string';
    };
    slug: {
      type: 'slug';
    };
    position: {
      type: 'integer';
    };
  }
>;
export type AnyBlock = Page;
export type AnyModel =
  | Post
  | ExternalLink
  | Config
  | User
  | Start
  | Price
  | Product
  | Currency
  | InternalLink
  | Author
  | Menu;
export type AnyBlockOrModel = AnyBlock | AnyModel;
