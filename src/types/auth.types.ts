export enum Status {
  EXIST = "exist",
  SUCCESS = "success",
  MISSING = "missing",
}

export type RegisterTypes = {
  userName: string;
  displayName: string;
  email: string;
  password: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type CredentialsReturnType = {
  userName: string;
  email: string;
  image?: string;
};
