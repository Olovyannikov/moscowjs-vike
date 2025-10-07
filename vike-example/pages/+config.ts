import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import RootLayout from "../layouts/LayoutDefault";
import HeadDefault from "./+Head";

// Default config (can be overridden by pages)
export default {
  // base options
  extends: [vikeReact],
  reactStrictMode: false,
  cacheControl: "public, max-age=86400",
  prefetchStaticAssets: "viewport",
  ssr: true,

  // Wrappers
  Layout: RootLayout,
  Head: HeadDefault,

  // meta info
  passToClient: ['scopeValues', 'device', 'isMobile'],
  meta: {
    // Event - fires on the server side when the page gets initiated
    pageInitiated: {
      env: { client: false, server: true },
    },
    // Event - fires on the client side when the page started
    pageStarted: {
      env: { client: true, server: false },
    },
  },

  // head tags
  lang: "en",
  title: "My Vike App",
  description: "Demo showcasing Vike",

} satisfies Config;
