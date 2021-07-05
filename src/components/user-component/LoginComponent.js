import React from 'react';
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {TextField} from "./TextField";
import { login} from '../../redux/user/user.actions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (values) => {
    dispatch(login({values,history}));
  };

  const initialValues  = {
    email : '',
    password : ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  })

  return(
    <Formik 
    initialValues={initialValues} 
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    >
        {(formik) => (
        <div>
          <h1>Sign up</h1>
          <Form>
            <TextField label="email:" name="email" type="email" />
            <TextField label="password:" name="password" type="password" />
            <button type="submit">Register</button>
          </Form>
        </div>
      )}

    </Formik>
  )
 
}

export default LoginPage