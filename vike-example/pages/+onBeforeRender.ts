import { PageContext } from "vike/types";

export async function onBeforeRender(pageContext: PageContext) {
  const { pageInitiatedOnServer } = pageContext.config;

  pageInitiatedOnServer?.(pageContext);
}
