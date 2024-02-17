export type LinkType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  href: string;
  name: string;
  showName: boolean;
};

export type Params = {
  [key: string]: string;
};

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export type ParamsSearchParams = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
