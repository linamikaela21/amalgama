import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardHeader,
} from '@mui/material';

import { Formik, Form, Field } from 'formik';
import { validationSchema } from '../../schemas/User';
import { login } from '../../api/login';
import { useAuthStore } from '../../store/authStore';
import { CustomAlert } from '../shared/CustomAlert';

export const LoginForm = (): JSX.Element => {
  const { setToken } = useAuthStore((state) => state);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = async (values: { email: string; password: string }) => {
    const response = await login(values);
    if (response.error) {
      handleOpen();
    }
    setToken(response.token);
    return response;
  };

  return (
    <>
      <Grid container spacing={1}>
        <Card>
          <CardHeader title="REGISTER FORM"></CardHeader>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isValid, values, handleChange, errors }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item>
                      <Field
                        label="Email"
                        variant="outlined"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        error={errors.email}
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item>
                      <Field
                        label="Password"
                        variant="outlined"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        type="password"
                        autoComplete="current-password"
                        error={errors.password}
                      />
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      type="submit"
                      disabled={!isValid}
                      variant="contained"
                      color="primary"
                    >
                      REGISTER
                    </Button>
                  </CardActions>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
      <CustomAlert
        alertTitle="Email or Password invalid. Please try one more time."
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};
