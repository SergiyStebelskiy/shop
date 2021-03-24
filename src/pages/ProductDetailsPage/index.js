import { useState, useEffect } from "react";
import ProductDetailsContainer from "containers/ProductDetailsContainer";
import { getProduct, editProduct } from "services";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ProductDetailsPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    getProduct(params.id).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, [params.id]);
  const onEdit = async (values, id) => {
    await editProduct({ ...values, comments: data.comments }, id).then((res) =>
      setData(res.data)
    );
  };
  const onAddComment = async (values, id) => {
    const comment = {
      id: uuidv4(),
      description: values.description,
      productId: id,
      date: new Date().toLocaleString().split(", ").reverse().join(" "),
    };
    await editProduct(
      { ...data, comments: [comment, ...data.comments] },
      id
    ).then((res) => setData(res.data));
  };
  return (
    <ProductDetailsContainer
      data={data}
      loading={loading}
      onEdit={onEdit}
      onAddComment={onAddComment}
    />
  );
};

export default ProductDetailsPage;
