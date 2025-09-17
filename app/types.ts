/* eslint-disable @typescript-eslint/no-explicit-any */
export type Media = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number | null;
  height: number | null;
  formats: any | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};


// Single navbar item (link or dropdown)
export type NavbarItem = {
  id: number;
  type: "link" | "dropdown";
  label: string;
  url?: string;
  items?: {
    id: number;
    label: string;
    url: string;
    newTab?: boolean;
    rel?: string;
  }[];
};

// Navbar section with logo, items and buttons
export type NavbarSection = {
  __component: "navbar.navbar";
  id: number;
  logo: Media;
  items: NavbarItem[];
  buttons: {
    id: number;
    label: string;
    url: string;
    variant: "primary" | "secondary" | "link";
    newTab?: boolean;
  }[];
};


// Partners section with multiple logos
export type PartnersSection = {
  __component: "sections.partners";
  id: number;
  logos: Media[];
};

// Footer column item: can be text, image, link or button
export type FooterColumnItem = {
  id: number;
  type: "text" | "image" | "button" | "link";
  text?: string;
  image?: Media;
  link?: {
    id: number;
    label: string;
    url: string;
    newTab?: boolean;
    rel?: string;
  };
  button?: {
    id: number;
    label: string;
    url: string;
    variant: "primary" | "secondary" | "link";
    newTab?: boolean;
  };
};

// Single column inside footer
export type FooterColumn = {
  id: number;
  title?: string | null;
  items: FooterColumnItem[];
};

// Footer section with logo, columns and optional partners
export type FooterSection = {
  __component: "footer.footer";
  id: number;
  logoLeft: Media;
  columns: FooterColumn[];
  partners?: Media[] | null;
};


// Dynamic zone: can be navbar, partners or footer
export type Section = NavbarSection | PartnersSection | FooterSection;

// Page entity from Strapi
export type Page = {
  id: number;
  slug?: string;
  title?: string;
  sections: Section[];
};

// API response shape for a page request
export type PageResponse = {
  data: Page[];
  meta: Record<string, any>;
};
