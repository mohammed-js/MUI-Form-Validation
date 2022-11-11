export const appStyles = {
  container: {
    m: 1,
    width: "100%",
    height: "800px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: 'center',
    gap: 1.5,
  },
  typography: {
    color: "#F7D716",
    fontSize: 50,
    mt: 4,
    fontFamily: "Neue Yokarto",
  },
  username: {
    mt: 1,
    width: "20%",
    "& input": {
      // any descendant input
      color: "#fff",
      fontSize: 12,
    },
    // input: { color: "#fff", fontSize: 12 }, // same as above
    "& .MuiFormHelperText-root": {
      // any descendant with calssName (.MuiFormHelperText-root)
      color: "rgb(255 255 255 / 60%)",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderWidth: 3,
      },
      "&:hover fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
    },
  },
  password: {
    width: "20%",
    input: { color: "#fff", fontSize: 12 },
    "& .MuiFormHelperText-root": {
      color: "rgb(255 255 255 / 60%)",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderWidth: 3,
      },
      "&:hover fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
    },
  },
  confirmPassword: {
    width: "20%",
    input: { color: "#fff", fontSize: 12 },
    "& .MuiFormHelperText-root": {
      color: "rgb(255 255 255 / 60%)",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderWidth: 3,
      },
      "&:hover fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
    },
  },
  email: {
    width: "20%",
    input: { color: "#fff", fontSize: 12 },
    "& .MuiFormHelperText-root": {
      color: "rgb(255 255 255 / 60%)",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderWidth: 3,
      },
      "&:hover fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
    },
  },
  age: {
    width: "20%",
    input: { color: "#fff", fontSize: 12 },
    "& .MuiFormHelperText-root": {
      color: "rgb(255 255 255 / 60%)",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderWidth: 3,
      },
      "&:hover fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
    },
  },
  jobTypeFormControl: {
    width: "20%",
    size: "medium",
    "& .MuiFormHelperText-root": {
      color: "rgb(255 255 255 / 60%)",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      color: "#d32f2f",
    },

    "& .MuiSelect-select": {
      color: "white",
    },
    "& .MuiSvgIcon-root": {
      color: "white",
    },
    "& label": {
      color: "white",
    },
    "& label.Mui-error": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
        borderWidth: 3,
      },
      "&:hover fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3AB4F2",
        borderWidth: 3,
      },
    },
  },
  jobTypeSelect: {
    "& .MuiSelect-select": {
      fontSize: 12,
    },
  },
  acceptedTos: {
    "& .MuiTypography-root": {
      color: "white",
      fontSize: 13,
    },
    "& .MuiCheckbox-root": {
      // rather than repeating code
      "&": { color: "white" },
      "&.Mui-checked": { color: "#277BC0" },
    },
  },
  submitButton: {
    width: "20%",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    background: "linear-gradient(45deg, #277BC0 30%, #fff 90%)",
  },
};
