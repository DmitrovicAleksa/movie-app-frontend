import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField } from "./TextField";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/user/user.actions";
import { useHistory } from "react-router-dom";

const RegistrationUser = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (values) => {
    dispatch(postUser({values,history}));
  };

  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    first_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First name is required"),
    last_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Last name is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <Formik
      initialValues={{
        email: "",
        first_name: "",
        last_name: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
        <div>
          <h1>Sign up</h1>
          <Form>
            <TextField label="email:" name="email" type="email" />
            <TextField label="first name:" name="first_name" type="text" />
            <TextField label="last name:" name="last_name" type="text" />
            <TextField label="password:" name="password" type="password" />
            <button type="submit">Register</button>
          </Form>
        </div>
    </Formik>
  );
};

export default RegistrationUser;
