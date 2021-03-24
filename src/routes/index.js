import { paths } from "./paths";
import ProductsPage from "pages/ProductsPage";
import NotFoundPage from "pages/NotFoundPage";
import ProductDetailsPage from "pages/ProductDetailsPage";

export const routes = [
  {
    Component: ProductsPage,
    path: paths.products,
    exact: true,
  },
  {
    Component: ProductDetailsPage,
    path: paths.productDetails,
  },
  {
    Component: NotFoundPage,
    path: paths.notFound,
  },
];
