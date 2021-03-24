import s from "./styles.module.scss";
import { Button, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import { number, string, object } from "yup";
import NumberField from "components/NumberField";
import { v4 as uuidv4 } from "uuid";

const ChangeDetailForm = ({ onClose, onSubmit, defaultValues }) => {
  const emptyValues = {
    name: "",
    description: "",
    count: "",
    width: "",
    height: "",
    weight: "",
  };
  const formik = useFormik({
    initialValues: defaultValues || emptyValues,
    validationSchema: object({
      name: string()
        .required("Name is required")
        .max(64, "Max length for name: 64 symbols"),
      description: string()
        .required("Description is required")
        .max(1024, "Max length for description: 1024 symbols"),
      count: string().required("Count is required"),
      width: number().required("Width is required"),
      height: number().required("Height is required"),
      weight: number().required("Weight is required"),
    }),
    onSubmit: ({ width, height, weight, ...spread }) => {
      onSubmit({
        ...spread,
        id: uuidv4(),
        imageUrl: null,
        size: {
          width,
          height,
        },
        weight: `${weight}g`,
        comments: [],
      });
    },
  });
  const {
    handleSubmit,
    errors,
    setFieldValue,
    values,
    touched,
    handleChange,
  } = formik;
  return (
    <form
      className={s.changeDetailForm}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="name"
        label="Name"
        variant="outlined"
        className={s.field}
        value={values.name}
        onChange={handleChange}
        error={errors.name && touched.name && Boolean(errors.name)}
        helperText={errors.name && touched.name && errors.name}
      />
      <TextField
        id="description"
        label="Description"
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
        rows={3}
      />
      <div className={s.fieldsWrap}>
        <TextField
          id="count"
          label="Count"
          value={values.count}
          onChange={(e) => setFieldValue("count", e.target.value)}
          name="numberformat"
          InputProps={{
            inputComponent: NumberField,
          }}
          error={errors.count && touched.count && Boolean(errors.count)}
          helperText={errors.count && touched.count && errors.count}
        />
        <TextField
          id="width"
          label="Width"
          value={values.width}
          onChange={(e) => setFieldValue("width", e.target.value)}
          name="numberformat"
          InputProps={{
            inputComponent: NumberField,
          }}
          error={errors.width && touched.width && Boolean(errors.width)}
          helperText={errors.width && touched.width && errors.width}
        />
        <TextField
          id="height"
          label="Height"
          value={values.height}
          onChange={(e) => setFieldValue("height", e.target.value)}
          name="numberformat"
          InputProps={{
            inputComponent: NumberField,
          }}
          error={errors.height && touched.height && Boolean(errors.height)}
          helperText={errors.height && touched.height && errors.height}
        />
        <TextField
          id="weight"
          label="Weight"
          value={values.weight}
          onChange={(e) => setFieldValue("weight", e.target.value)}
          name="numberformat"
          InputProps={{
            inputComponent: NumberField,
          }}
          error={errors.weight && touched.weight && Boolean(errors.weight)}
          helperText={errors.weight && touched.weight && errors.weight}
        />
      </div>
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

export default ChangeDetailForm;
