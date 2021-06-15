import { useState } from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";

import TextField from "../../../../custom/textField";
import Button from "../../../../custom/button";

import { login } from "../../api";

interface IValue {
  phone: string;
}

interface IProps {
  setState: Function;
}

const StepOne = (props: IProps) => {
  const { setState } = props;

  const initialValues = {
    phone: ""
  };

  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    phone: Yup.string()
      .required("وارد کردن شماره موبایل الزامیست")
      .matches(
        /^(09)(10|11|12|13|14|15|16|17|18|19|90|91|32|30|33|35|36|37|38|39|01|02|03|04|05|41|20|21|22)\d{7}/,
        "شماره موبایل معتبر نیست"
      )
  });

  const handleSubmit = async (values: IValue) => {
    try {
      setLoading(true);
      await login(values);
      setState({ step: 3, phone: values.phone });
    } catch (error) {
      console.error(error);
      setState({ step: 2, phone: values.phone });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      render={({ handleSubmit }: FormikProps<IValue>) => (
        <Form onSubmitCapture={handleSubmit}>
          <Field
            name="phone"
            render={({
              field,
              form: { touched, errors }
            }: FieldProps<IValue>) => (
              <TextField
                autoFocus
                {...field}
                margin="normal"
                fullWidth
                label="شماره موبایل"
                type="tel"
                error={touched.phone && errors.phone}
              />
            )}
          />
          <Button
            type="submit"
            color="primary"
            size="large"
            fullWidth
            loading={loading}
            style={{ borderRadius: "5px" }}
          >
            {"تایید"}
          </Button>
        </Form>
      )}
    />
  );
};

export default StepOne;
