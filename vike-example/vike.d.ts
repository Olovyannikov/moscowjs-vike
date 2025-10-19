/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import type { EventCallable, Scope } from "effector";
import type { PageContextClient, PageContextServer } from "vike/types";

declare module "react" {
  interface CSSProperties {
    [varName: `--${string}`]: string | number | undefined;
  }
}

declare global {
  namespace Vike {
    interface PageContext {
      isMobile: boolean;
      user: {
        isAdmin: boolean;
      };
      config: {
        /** Page init event - server side */
        pageInitiatedOnServer?: <T>(ctx: PageContextServer<T>) => void;
        /** Page start event - client side */
        pageInitiatedOnClient?: <T>(ctx: PageContextClient<T>) => void;

        /** Page init event - server side */
        pageInitiated?: EventCallable<PageContextServer>;
        /** Page start event - client side */
        pageStarted?: EventCallable<PageContextClient>;
      };
      // https://effector.dev/en/api/effector/scope/
      scope?: Scope;
      scopeValues: Record<string, unknown>;
    }
  }
}

export {};
