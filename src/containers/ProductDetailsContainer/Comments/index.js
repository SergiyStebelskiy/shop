import s from "./styles.module.scss";
import { Typography, Button } from "@material-ui/core";

const Comments = ({ data = [] }) => {
  return (
    <ul className={s.comments}>
      {data.length > 0 ? (
        data.map((comment, index) => (
          <li className={s.comment} key={index}>
            <Typography
              className={s.title}
              variant="h6"
              color="textSecondary"
              component="span"
            >
              {comment.description}
            </Typography>
            <Typography
              className={s.date}
              variant="body1"
              color="textSecondary"
            >
              {comment.date}
            </Typography>
          </li>
        ))
      ) : (
        <Typography
          className={s.message}
          variant="h6"
          color="textSecondary"
          component="span"
        >
          Comments not found
        </Typography>
      )}
    </ul>
  );
};
export default Comments;
