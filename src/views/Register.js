import React, { useRef } from 'react'
import { Grid, TextField, Button, Box, makeStyles } from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'
import axios from 'axios';
import { useForm } from 'react-hook-form';


function Register() {

  let usernameRef = useRef();

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
      reset();
      usernameRef.current.focus();
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
        <form>
          <Grid item xs={12} container justify="center">
            <TextField
              name="username"
              label="Username"
              fullWidth
              variant="outlined"
              margin="dense"
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ""}
              inputRef={e => {
                register(e, { required: true });
                usernameRef.current = e;
              }}
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
              onKeyPress={e => {
                if (e.key === "Enter" && formState.isValid) {
                  handleSubmit(onSubmit)();
                }
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Box my={3}>
              <Grid container justify="space-between">
                <Button
                  onClick={() => { reset(); usernameRef.current.focus(); }}
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
        </form>
      </Grid>
      <Grid item md={5} />
    </Grid>
  )
}

export default Register;
