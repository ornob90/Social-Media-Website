export { default } from "next-auth/middleware";

export const config = {
  // specify the route you want to protect
  matcher: ["/posts/:path*", "/messages", "/notifications", "/messages/:path*"],
};
