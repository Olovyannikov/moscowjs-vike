import { PageContextServer } from "vike/types";

export const pageInitiatedOnServer = (ctx?: PageContextServer) => {
  console.log("Page initiated", ctx?.isMobile);
};
