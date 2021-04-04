import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { CenterFocusStrong } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(3),
  },
  form: {
    display: "flex",
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "400px",
    padding: "20px",
    alignItems: "center",
  },
  textField: {
    width: "300px",
  },
  buttonSubmit: {
    marginBottom: 10,
    width: "200px",
    padding: "10px",
    margin: "20px",
  },
}));

const handleSubmit = (e) => {
  e.preventDefault();

  console.log(e);
  console.log("Submit");
};

const MainForm = () => {
  const classes = useStyles();
  return (
    <Paper className={`${classes.root} ${classes.form}`}>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" variant="outlined"></TextField>
        <br></br>
        <TextField
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        ></TextField>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="medium"
          color="primary"
        >
          Log In
        </Button>
      </form>
    </Paper>
  );
};

export default MainForm;
