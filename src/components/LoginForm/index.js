import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import "./Style.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginForm() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/addjob', { replace: true });
    }
  });

  const handleLogin = async (values, { setSubmitting }) => {
    let result = await fetch('https://api.careerpane.com/login', {
      method: 'post',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    result = await result.json();

    if (result.email) {
      alert('Login success');

      localStorage.setItem('user', JSON.stringify(result));
      localStorage.setItem('token', JSON.stringify(result.auth));
      navigate('/jobs', { replace: true });
      navigate(0);
    } else {
      alert('Please enter correct details');
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box spacing={3} className='inputFIn'>
            <Box spacing={3} className='inputFIn'>
              <Field
                as={TextField}
                name="email"
                label="Email address"
                variant="outlined"
                fullWidth
              />

              <Field
                as={TextField}
                name="password"
                variant="outlined"
                label="Password"
                fullWidth
                type="password"
              />
            </Box>

            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              disabled={isSubmitting}
            >
              Login
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
