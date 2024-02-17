export type LinkType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  href: string;
  name: string;
  showName: boolean;
};

export interface Params {
  params: { slug: string };
}

export interface SearchParams {
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface ParamsSearchParams {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}
