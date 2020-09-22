import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardMedia, Grid } from "@material-ui/core";

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
          <Grid item xs={12} container alignContent="center" justify="center" key={x.username}>
            <Card style={{ height: "200px", width: "500px", margin: "20px" }}>
              <Grid container alignContent="center" style={{ height: "100%" }}>
                <Grid item xs={3} container style={{ height: "100%" }} alignItems="center">
                  <CardMedia image="/portrait.jpg" style={{ height: "80%", width: "100%" }} />
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default CardsView;