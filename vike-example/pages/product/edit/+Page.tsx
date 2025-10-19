import { usePageContext } from "vike-react/usePageContext";

export default function EditProductPage() {
  const {
    pageId,
    routeParams: { id },
  } = usePageContext();

  return (
    <>
      Edit Product Page {pageId}: {id}
    </>
  );
}
