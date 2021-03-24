import s from "../styles.module.scss";
import styles from "./styles.module.scss";
import { Typography, Tooltip, IconButton, Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import classNames from "classnames";

const DeletePopup = ({ onClose, title, message, onSubmit }) => {
  return (
    <div className={classNames(s.popupWrap, styles.popupWrap)}>
      <div className={classNames(s.popup, styles.popup)}>
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
          <Typography
            className={s.message}
            variant="body1"
            color="textSecondary"
          >
            {message}
          </Typography>
        </div>
        <div className={s.btns}>
          <Button
            variant="outlined"
            color="default"
            onClick={onClose}
            className={s.closeBtn}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={onSubmit}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
