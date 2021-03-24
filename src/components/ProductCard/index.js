import s from "./styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const ProductCard = ({
  className,
  imageUrl,
  name,
  description,
  count,
  id,
  onDelete,
}) => {
  const history = useHistory();
  const handleClick = () => history.push(`/products/${id}`);
  return (
    <Card className={classNames(s.productCard, className)}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={s.image}
          image={
            imageUrl ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAS1BMVEX////+/v7m5ub4+Pjd3d3i4uL7+/vt7e3x8fHo6Oj19fXy8vLa2trn5+e3t7fg4OCtra2urq6mpqa6urrS0tLFxcXLy8u/v7/Ozs4Rv6jEAAAEbUlEQVR4nO2ci3KbMBAAEQLxLo7jNP3/L60eYAMOLpY5M9PZnTRJDZy0vpMEnomSBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAIjLH/1EHYpm0XlJSaSpRJlFT4xyjbumjbSoU2DiEkTyy2LUitjT4GX5Qydi5nOs3ats0OIW+UVE26gijSojkoabqp+iJMJyJuKq3c+6aSQ6ZJk2ZGappUSZOb45YAleisFCvKpMz9GiASfUPzSVYkQksQbmLgFh0cNyFwiw5e5P7GSyD2puZxiwyOmxC4RQfHTQjcooPjJgRu0cFxEwK36OC4CYFbdHDchMAtOjhuQuAWHRw3IXCLDo6bELhFB8dNCNyig+MmBG7RwXETArfo4LgJgVt0cNyEwC06OG5C4BYdHDchcIsOjpsQuEUHx00I3KKD4yYEbtHBcRMCt+jguAmBW3Tw/9kt/E3mQQxuSs4tNHIEVqqt/E+J4EmRuXftqO0UfN7E3I79O2Hl3JRkTZrjMqecm1hN9u77QXlLfE2KuTW9rmv7dRA6uO2l40P5Enffyqzq0i7dROe/qtWj3XjWdoo2jDcVOvaqph9bxkczbrw905UNJ+deb2vUaphLAq+mULmNo8Y3yLq5Frpq8WZ33fhziut0lfbriavsoWrI7vLSlSv60vdkcDOvTdmmv2SlMdpY3F5LZd00TVk2gfJKcU9ZuFdTP1CaK+MFdtTquurCiffXzhgutXFKrWxXfEmaJr+0+pWJRRV53wayvs/zLLf0jvyftPbMvA+dre5wAjZS3mdpuhJt2Y79X5pnfZb57rRZWrxWlfZdqusqu1x+f31/fn7+2s7H+eMfp/vDp/PpiaDuqu+v3xfr5Wrppf3rlN/+zu3UpuuiStvL5ev72/bp48rpdLr9NuN8mr50DsxfsOe4l84bsM38+vz60/ZpUZswV4b5Ox6f9eG5wk4sdpC4MeOrbBzyazVZ5VmajzV1X3XrFy7Ps7NL5Qo7jLlaDwuSn0r2WMjdSqC19QpWvvrdHnWtNGErPDfu7HRqB2lT6/0fc5ycnfEmORuH+7gXX/+Ixb59i1cfXBhyZ1ceP//UQW332y6Xufpakd2jetyHfqxKZ+bXBps17deA3d2GzJVlmNSful96hZAzu2i4gpTZ2dO63eTCorV2D7GTk5tFwmIYzIasibj5qqyHulxZlPdnMHOzpFTaRjmXumZ2pyUpNd6DuelfD2piVRlSt9QTY7ylHNVEnkyDmwr3zOH+t3yen7u+PFrODo1rthtsgs/8ashcyF29fBzYmev9fxAzomrJUJY3u/kTzM5MPk0Y1ETdlLrJzT44mXXlAWu9nx50v00/JrmaKYlbkolZcJttH71J6nkmLfgmZd2ufnd6+wvqn9QEvW5ywS4YSm0BbqZIp2yiNpGbWAqJTT7beo+b/2jvXlAAdYDb+xFWO1DvDWY3uYXq7o3sHHBjq++ZsqTbOIg3FiEAAAAAAAAAAAAAAAAAAAAAAAAA/MRfRRV6y6PbmK8AAAAASUVORK5CYII="
          }
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            className={s.description}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="span">
            Count: {count}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={s.btnsWrap}>
        <Button size="small" color="primary" onClick={handleClick}>
          More
        </Button>
        <Tooltip title="Delete" className={s.deleteBtn}>
          <IconButton aria-label="delete" onClick={() => onDelete(id)}>
            <Delete />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};
ProductCard.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onDelete: PropTypes.func,
};
ProductCard.defaultProps = {
  imageUrl: "",
  name: "",
  description: "",
  count: "",
  onDelete: () => {},
};

export default ProductCard;
