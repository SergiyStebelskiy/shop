import { useState } from "react";
import s from "./styles.module.scss";
import ProductCard from "components/ProductCard";
import {
  Typography,
  CircularProgress,
  Button,
  FormControl,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { InputLabel, MenuItem, Select } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import DeletePopup from "popups/Delete";
import ChangePopup from "popups/Change";

const ProductsContainer = ({ products, loading, onDelete, onAdd }) => {
  const [popup, setPopup] = useState(null);
  const [currentProductId, setCurrentProductId] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const search = qs.parse(location.search);
  const onSort = (e) => {
    const sortBy = e.target.value;
    history.push({ search: qs.stringify({ _sort: sortBy }) });
  };
  return (
    <div className="main-wrap">
      <header className={s.header}>
        <div className={s.col}>
          <Typography className={s.message} variant="h2" color="textSecondary">
            Apple room
          </Typography>
          <FormControl className={s.selectWrap}>
            <InputLabel id="select">Sort by</InputLabel>
            <Select
              labelId="select"
              id="select"
              value={search["_sort"] || ""}
              onChange={onSort}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="count">Count</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setPopup("add")}
        >
          Add macbook
        </Button>
      </header>
      <div className={s.productsWrap}>
        {products.length > 0 &&
          !loading &&
          products.map(({ imageUrl, name, description, count, id }, index) => (
            <ProductCard
              imageUrl={imageUrl}
              name={name}
              description={description}
              count={count}
              id={id}
              onDelete={(id) => {
                setPopup("delete");
                setCurrentProductId(id);
              }}
              className={s.productCard}
              key={index}
            />
          ))}
        {!products.length && !loading && (
          <Typography
            className={s.message}
            variant="body1"
            color="textSecondary"
            component="p"
          >
            There are currently no products available. Please add them.
          </Typography>
        )}
        {loading && (
          <div className="loader-wrap">
            <CircularProgress />
          </div>
        )}
      </div>
      {popup === "delete" && currentProductId && (
        <DeletePopup
          title="Delete product"
          message="Are you sure you want to delete this product?"
          onClose={() => setPopup(null)}
          onSubmit={() => onDelete(currentProductId).then(() => setPopup(null))}
        />
      )}
      {popup === "add" && (
        <ChangePopup
          title="Add product"
          onClose={() => setPopup(null)}
          onSubmit={(values) => onAdd(values).then(() => setPopup(null))}
        />
      )}
    </div>
  );
};
ProductsContainer.propTypes = {
  products: PropTypes.array,
  loading: PropTypes.bool,
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
};
ProductsContainer.defaultProps = {
  products: [],
  loading: false,
  onDelete: () => {},
  onAdd: () => {},
};

export default ProductsContainer;
