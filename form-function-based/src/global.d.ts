// types.d.ts
declare module "*.css" {
  const url: string;
  export default url;
}

declare module "*.svg" {
  const value: any;
  export = value;
}

declare module "*.png" {
  const value: string;
  export = value;
}