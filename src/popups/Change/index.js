import s from "../styles.module.scss";
import { Typography, Tooltip, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import ChangeDetailForm from "forms/ChangeDetail";

const ChangePopup = ({ onClose, title, onSubmit, defaultValues }) => {
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
          <ChangeDetailForm
            onClose={onClose}
            onSubmit={onSubmit}
            defaultValues={defaultValues}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePopup;
