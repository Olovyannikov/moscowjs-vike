import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
  const { is404, abortReason, abortStatusCode } = usePageContext();
  if (is404) {
    return (
      <>
        <h1>Page Not Found</h1>
        <p>This page could not be found.</p>
      </>
    );
  }

  if (abortStatusCode === 403) {
    return (
      <>
        <h1>Access Denied</h1>
        <p>{abortReason?.toString()}</p>
      </>
    );
  }

  return (
    <>
      <h1>Internal Error</h1>
      <p>Something went wrong.</p>
    </>
  );
}
