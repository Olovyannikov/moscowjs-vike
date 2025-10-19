import { PageContext } from "vike/types";

const routeRegex = /product\/([0-9]+)\/edit/;

export default function route(pageContext: PageContext) {
  if (!pageContext?.user?.isAdmin) return false;

  const match = pageContext.urlPathname.match(routeRegex);

  if (!match) return false;

  const [, id] = match;

  return {
    routeParams: { id },
  };
}
