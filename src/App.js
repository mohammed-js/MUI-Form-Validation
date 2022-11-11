import React from "react";
import { useFormik } from "formik";
import { Schema } from "./schema";
import { appStyles } from "./appStyles";
import Box from "@mui/material/Box";
import {
  TextField,
  Typography,
  Select,
  InputLabel,
  MenuItem,
  Button,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@mui/material";
import "./App.css";

function App() {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  };
  const {
    values,
    errors,
    touched, // show error if you entered the input then go out [1) don't show error on first input enter 2) don't show error for other untouched inputs]
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      // jobType: "Please choose your job",
      jobType: "",
      username: "",
      acceptedTos: false,
    },
    validationSchema: Schema,
    onSubmit,
  });
  console.log(values.acceptedTos);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit} // re-validate all fields (even non-touched ones), if all is okay, run the defined call back function
      autoComplete="off"
      sx={{
        ...appStyles.container,
      }}
      noValidate
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{
          ...appStyles.typography,
        }}
      >
        Sign Up
      </Typography>
      <TextField
        helperText={touched.username && errors.username}
        value={values.username}
        onChange={handleChange}
        id="username"
        type="text"
        onBlur={handleBlur}
        error={touched.username && errors.username}
        label="User Name"
        variant="outlined"
        placeholder="Write a username"
        size="medium"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{
          ...appStyles.username,
        }}
      />
      <TextField
        helperText={touched.password && errors.password}
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        onBlur={handleBlur} // run validation onBlur on this field only (as other fields use [touched.] before [errors.])
        error={touched.password && errors.password}
        label="Password"
        variant="outlined"
        placeholder="Write a password"
        size="medium"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{
          ...appStyles.password,
        }}
      />
      <TextField
        helperText={touched.confirmPassword && errors.confirmPassword}
        value={values.confirmPassword}
        onChange={handleChange}
        id="confirmPassword"
        type="password"
        onBlur={handleBlur}
        error={touched.confirmPassword && errors.confirmPassword}
        label="Password Confirm"
        variant="outlined"
        placeholder="re-Write the password"
        size="medium"
        // type="number"
        // error
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{
          ...appStyles.confirmPassword,
        }}
      />
      <TextField
        helperText={touched.email && errors.email}
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        onBlur={handleBlur}
        error={touched.email && errors.email}
        label="Email"
        variant="outlined"
        placeholder="Write your e-mail"
        size="medium"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{
          ...appStyles.email,
        }}
      />
      <TextField
        helperText={touched.age && errors.age}
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        onBlur={handleBlur}
        error={touched.age && errors.age}
        label="Age"
        variant="outlined"
        placeholder="Write you age"
        size="medium"
        // error
        InputLabelProps={{
          style: { color: "#fff" },
        }}
        sx={{
          ...appStyles.age,
        }}
      />

      <FormControl
        error={touched.jobType && errors.jobType}
        sx={{
          ...appStyles.jobTypeFormControl,
        }}
      >
        <InputLabel id="jobType-label" name="jobType-label">
          Job
        </InputLabel>
        <Select
          placeholder="Please select a job"
          value={values.jobType}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.jobType && errors.jobType}
          labelId="jobType-label"
          id="jobType"
          name="jobType"
          label="Age"
          sx={{
            ...appStyles.jobTypeSelect,
          }}
        >
          <MenuItem
            value="Please choose your job"
            disabled
            sx={{ fontSize: 15 }}
          >
            Please choose your job
          </MenuItem>
          <MenuItem value="Front-End Developer" sx={{ fontSize: 15 }}>
            Front-End Developer
          </MenuItem>
          <MenuItem value="Back-End Developer" sx={{ fontSize: 15 }}>
            Back-End Developer
          </MenuItem>
          <MenuItem value="Full-Stack Developer" sx={{ fontSize: 15 }}>
            Full-Stack Developer
          </MenuItem>
          <MenuItem value="Other" sx={{ fontSize: 15 }}>
            Other ...
          </MenuItem>
        </Select>
        <FormHelperText>{touched.jobType && errors.jobType}</FormHelperText>
      </FormControl>
      <Box alignSelf="flex-start" ml="40%">
        <FormControlLabel
          sx={{
            ...appStyles.acceptedTos,
          }}
          control={
            <Checkbox
              id="acceptedTos"
              value={values.acceptedTos}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          }
          label="I accept the terms of service"
        />
        <Typography variant="h6" color="#d32f2f" fontSize={13}>
          {touched.acceptedTos && errors.acceptedTos}
        </Typography>
      </Box>

      <Button
        disabled={isSubmitting}
        variant="contained"
        type="submit"
        sx={{
          ...appStyles.submitButton,
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
export default App;
