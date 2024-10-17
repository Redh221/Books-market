declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.svg" {
  const content: any; // or 'string' if you prefer stricter typing
  export default content;
}
