import s from "./styles.module.scss";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { string, object } from "yup";

const AddCommentForm = ({ onClose, onSubmit }) => {
  const formik = useFormik({
    initialValues: { description: "" },
    validationSchema: object({
      description: string()
        .required("Name is required")
        .max(124, "Max length for name: 124 symbols"),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });
  const { handleSubmit, errors, values, touched, handleChange } = formik;
  return (
    <form
      className={s.changeDetailForm}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="description"
        label="Name"
        variant="outlined"
        className={s.field}
        value={values.description}
        onChange={handleChange}
        error={
          errors.description &&
          touched.description &&
          Boolean(errors.description)
        }
        helperText={
          errors.description && touched.description && errors.description
        }
        multiline
        rows={2}
      />

      <div className="popup-btns">
        <Button
          variant="outlined"
          color="default"
          onClick={onClose}
          className="close-btn"
        >
          Cancel
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddCommentForm;
