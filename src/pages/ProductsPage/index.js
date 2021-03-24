import { useState, useEffect } from "react";
import ProductsContainer from "containers/ProductsContainer";
import { getProducts, deleteProduct, addProduct } from "services";
import { useLocation } from "react-router-dom";
import qs from "query-string";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const search = qs.parse(location.search);
  useEffect(
    () =>
      getProducts(search).then((res) => {
        setProducts(res.data);
        setLoading(false);
      }),
    [location.search]
  );
  const onDelete = async (id) => {
    await deleteProduct(id).then(() =>
      setProducts(products.filter((e) => e.id !== id))
    );
  };
  const onAdd = async (values) => {
    await addProduct(values).then(() => setProducts([...products, values]));
  };
  return (
    <ProductsContainer
      products={products}
      loading={loading}
      onDelete={onDelete}
      onAdd={onAdd}
    />
  );
};

export default ProductsPage;
