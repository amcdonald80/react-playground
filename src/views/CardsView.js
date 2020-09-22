import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardMedia, Grid, Typography } from "@material-ui/core";
import { green, blue, red } from "@material-ui/core/colors";

function CardsView() {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios({
          method: "get",
          url: process.env.REACT_APP_URL + "data"
        });
        setData(res.data);
      } catch (err) {
        alert(JSON.stringify(err));
      }
    })();
  }, [])

  return (
    <>
      <Grid container>
        {data.map(x => (
          <Grid item xs={12} container alignContent="center" justify="center" key={x.username} spacing={1}>
            <Box m={2}>
              <Card style={{ height: "200px", width: "500px" }}>
                <Grid container alignContent="center" style={{ height: "100%" }}>
                  <Grid item xs={4} style={{ height: "100%", backgroundColor: red[500] }}>
                    <CardMedia image="/portrait.jpg" style={{
                      margin: "5%",
                      height: "90%"
                    }} />
                  </Grid>
                  <Grid item xs={8} style={{ height: "100%", backgroundColor: green[500] }}>
                    <Box style={{ margin: "5%", height: "90%" }}>
                      <Typography>Username: {x.username}</Typography>
                      <Typography>Password: {x.password}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CardsView;