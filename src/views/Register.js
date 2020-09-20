import "./Register.css";
import React from 'react'
import { Grid, TextField, Button, Box, makeStyles } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'
import axios from 'axios';
import { useForm } from 'react-hook-form';


function Register() {

  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: "onChange"
  });

  const onSubmit = async data => {
    try {
      const res = await axios({
        method: "post",
        url: process.env.REACT_APP_URL + "register",
        data: data,
        headers: { "content-type": "application/json" }
      })
      console.log(res);
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  const classes = makeStyles({
    red: {
      backgroundColor: red[500],
      color: "white",
      "&:hover": {
        backgroundColor: red[600]
      }
    },
    green: {
      backgroundColor: green[500],
      color: "white",
      "&:disabled": {
        backgroundColor: green[200],
        color: "white"
      },
      "&:hover": {
        backgroundColor: green[600]
      }
    }
  })();

  return (
    <Grid container alignContent="center" style={{ height: "100%" }}>
      <Grid item md={5} />
      <Grid item md={2}>
        <Grid item xs={12} container justify="center">
          <TextField
            name="username"
            label="Username"
            fullWidth
            variant="outlined"
            margin="dense"
            error={!!errors.username}
            helperText={errors.username ? errors.username.message : ""}
            inputRef={register({
              required: "Required"
            })}
          />
        </Grid>
        <Grid item xs={12} container justify="center">
          <TextField
            name="password"
            label="Password"
            fullWidth
            variant="outlined"
            margin="dense"
            type="password"
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            inputRef={register({
              required: "Required"
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <Box my={3}>
            <Grid container justify="space-between">
              <Button
                onClick={() => reset()}
                className={classes.red}
              >Reset</Button>
              <Button
                disabled={!formState.isValid}
                onClick={handleSubmit(onSubmit)}
                className={classes.green}
              >Submit</Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Grid item md={5} />
    </Grid>
  )
}

export default Register;
