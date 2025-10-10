import { PageContextServer } from "vike/types";
import { render } from "vike/abort";

export const guard = (pageContext: PageContextServer) => {
  const {
    urlParsed: {
      search: { role },
    },
  } = pageContext;

  const isAdmin = role === "admin";
  const isUnauthorized = role === "unauthorized";

  if (isUnauthorized) {
    throw render("/login");
  }
  if (!isAdmin) {
    throw render(403, "Only admins are allowed to access this page.");
  }
};
