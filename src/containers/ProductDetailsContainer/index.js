import { useState, Fragment } from "react";
import s from "./styles.module.scss";
import { Typography, Button, CircularProgress } from "@material-ui/core";
import ChangePopup from "popups/Change";
import AddCommentPopup from "popups/AddComment";
import Comments from "./Comments";

const ProductDetailsContainer = ({ data, loading, onEdit, onAddComment }) => {
  const [popup, setPopup] = useState(null);
  return (
    <div className="main-wrap">
      {!loading && (
        <Fragment>
          <div className={s.details}>
            <header className={s.head}>
              <Typography
                className={s.title}
                variant="h4"
                color="textSecondary"
              >
                {data.name}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPopup("edit")}
                className={s.editBtn}
              >
                edit detail
              </Button>
            </header>
            <img
              className={s.image}
              src={
                data.imageUrl ||
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAS1BMVEX////+/v7m5ub4+Pjd3d3i4uL7+/vt7e3x8fHo6Oj19fXy8vLa2trn5+e3t7fg4OCtra2urq6mpqa6urrS0tLFxcXLy8u/v7/Ozs4Rv6jEAAAEbUlEQVR4nO2ci3KbMBAAEQLxLo7jNP3/L60eYAMOLpY5M9PZnTRJDZy0vpMEnomSBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAIjLH/1EHYpm0XlJSaSpRJlFT4xyjbumjbSoU2DiEkTyy2LUitjT4GX5Qydi5nOs3ats0OIW+UVE26gijSojkoabqp+iJMJyJuKq3c+6aSQ6ZJk2ZGappUSZOb45YAleisFCvKpMz9GiASfUPzSVYkQksQbmLgFh0cNyFwiw5e5P7GSyD2puZxiwyOmxC4RQfHTQjcooPjJgRu0cFxEwK36OC4CYFbdHDchMAtOjhuQuAWHRw3IXCLDo6bELhFB8dNCNyig+MmBG7RwXETArfo4LgJgVt0cNyEwC06OG5C4BYdHDchcIsOjpsQuEUHx00I3KKD4yYEbtHBcRMCt+jguAmBW3Tw/9kt/E3mQQxuSs4tNHIEVqqt/E+J4EmRuXftqO0UfN7E3I79O2Hl3JRkTZrjMqecm1hN9u77QXlLfE2KuTW9rmv7dRA6uO2l40P5Enffyqzq0i7dROe/qtWj3XjWdoo2jDcVOvaqph9bxkczbrw905UNJ+deb2vUaphLAq+mULmNo8Y3yLq5Frpq8WZ33fhziut0lfbriavsoWrI7vLSlSv60vdkcDOvTdmmv2SlMdpY3F5LZd00TVk2gfJKcU9ZuFdTP1CaK+MFdtTquurCiffXzhgutXFKrWxXfEmaJr+0+pWJRRV53wayvs/zLLf0jvyftPbMvA+dre5wAjZS3mdpuhJt2Y79X5pnfZb57rRZWrxWlfZdqusqu1x+f31/fn7+2s7H+eMfp/vDp/PpiaDuqu+v3xfr5Wrppf3rlN/+zu3UpuuiStvL5ev72/bp48rpdLr9NuN8mr50DsxfsOe4l84bsM38+vz60/ZpUZswV4b5Ox6f9eG5wk4sdpC4MeOrbBzyazVZ5VmajzV1X3XrFy7Ps7NL5Qo7jLlaDwuSn0r2WMjdSqC19QpWvvrdHnWtNGErPDfu7HRqB2lT6/0fc5ycnfEmORuH+7gXX/+Ixb59i1cfXBhyZ1ceP//UQW332y6Xufpakd2jetyHfqxKZ+bXBps17deA3d2GzJVlmNSful96hZAzu2i4gpTZ2dO63eTCorV2D7GTk5tFwmIYzIasibj5qqyHulxZlPdnMHOzpFTaRjmXumZ2pyUpNd6DuelfD2piVRlSt9QTY7ylHNVEnkyDmwr3zOH+t3yen7u+PFrODo1rthtsgs/8ashcyF29fBzYmev9fxAzomrJUJY3u/kTzM5MPk0Y1ETdlLrJzT44mXXlAWu9nx50v00/JrmaKYlbkolZcJttH71J6nkmLfgmZd2ufnd6+wvqn9QEvW5ywS4YSm0BbqZIp2yiNpGbWAqJTT7beo+b/2jvXlAAdYDb+xFWO1DvDWY3uYXq7o3sHHBjq++ZsqTbOIg3FiEAAAAAAAAAAAAAAAAAAAAAAAAA/MRfRRV6y6PbmK8AAAAASUVORK5CYII="
              }
              alt="title"
            />
            <Typography
              className={s.description}
              variant="tbody1"
              color="textSecondary"
            >
              {data.description}
            </Typography>
            <Typography
              className={s.item}
              variant="h6"
              color="textSecondary"
              component="span"
            >
              Count: {data.count}
            </Typography>
            <Typography
              className={s.item}
              variant="h6"
              color="textSecondary"
              component="span"
            >
              Width: {data.size.width}
            </Typography>
            <Typography
              className={s.item}
              variant="h6"
              color="textSecondary"
              component="span"
            >
              Height: {data.size.height}
            </Typography>
            <Typography
              className={s.item}
              variant="h6"
              color="textSecondary"
              component="span"
            >
              Weight: {data.weight}
            </Typography>
          </div>
          <div className={s.commentsWrap}>
            <header className={s.commentsHead}>
              <Typography
                className={s.title}
                variant="h5"
                color="textSecondary"
                component="h5"
              >
                Comments
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setPopup("comment")}
                className={s.addCommentBtn}
              >
                Add comment
              </Button>
            </header>
            <Comments data={data.comments} />
          </div>
        </Fragment>
      )}
      {loading && (
        <div className="loader-wrap">
          <CircularProgress />
        </div>
      )}
      {popup === "edit" && data && (
        <ChangePopup
          title="Edit product"
          onClose={() => setPopup(null)}
          onSubmit={(values) => {
            onEdit(values, data.id).then(() => setPopup(null));
          }}
          defaultValues={{
            ...data,
            width: data.size.width,
            height: data.size.height,
            weight: data.weight.split("g")[0],
          }}
        />
      )}
      {popup === "comment" && (
        <AddCommentPopup
          title="Add comment"
          onClose={() => setPopup(null)}
          onSubmit={(values) => {
            onAddComment(values, data.id).then(() => setPopup(null));
          }}
        />
      )}
    </div>
  );
};

export default ProductDetailsContainer;
