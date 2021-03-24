import s from "../styles.module.scss";
import { Typography, Tooltip, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import AddCommentForm from "forms/AddComment";

const AddCommentPopup = ({ onClose, title, onSubmit }) => {
  return (
    <div className={s.popupWrap}>
      <div className={s.popup}>
        <div className={s.inline}>
          <header className={s.head}>
            <Typography className={s.title} variant="h5" color="textSecondary">
              {title}
            </Typography>
            <Tooltip title="Close" className={s.deleteBtn}>
              <IconButton aria-label="close" onClick={onClose}>
                <Close />
              </IconButton>
            </Tooltip>
          </header>
          <AddCommentForm onClose={onClose} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default AddCommentPopup;
