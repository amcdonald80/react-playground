import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios({
        method: "get",
        url: process.env.REACT_APP_URL
      });
      setData(res.data);
    }
    fetchData();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12} container justify="center">
        <h1>Home Page</h1>
      </Grid>
      { data ? data.data.map(x => {
        return (
          <Grid item xs={12} container justify="center" key={x._id.$oid}>
            name: {x.username}
          </Grid >
        )
      }) : null}
    </Grid>
  );
}

export default Home;