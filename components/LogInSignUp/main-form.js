import React, { useState } from "react";
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
    margin: "auto"
  },
  button: {
    marginBottom: 10,
    width: "200px",
    padding: "10px",
    margin: "20px",
  },
}));

const MainForm = () => {
  const [userData, setUserData] = useState({
    user: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    console.log("Submit");
    console.log(userData)
  };

  const classes = useStyles();
  return (
    <Paper className={`${classes.root} ${classes.form}`}>
      <form onSubmit={handleSubmit}>
        <TextField
          name="user"
          label="Username"
          variant="outlined"
          value={userData.user}
          onChange={(e) => setUserData({ ...userData, user: e.target.value })}
        ></TextField>
        <br></br>
        <TextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        ></TextField>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          color="primary"
          type="submit"
        >
          Log In
        </Button>
        <Typography variant="h6">------ Or ------</Typography>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          color="primary"
        >
          Sign Up
        </Button>
      </form>
    </Paper>
  );
};

export default MainForm;
