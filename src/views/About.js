import React from "react";
import { Grid, Typography } from "@material-ui/core";

function About() {
  return (
    <Grid container>
      <Grid item container xs={12} justify="center">
        <h1>About Page</h1>
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={6} container>
        <Typography align="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Id doctus accommodare eam, pri an esse tota prodesset, te veniam oblique posidonium mel. Feugiat ceteros appellantur et sed, at illum virtute persequeris duo. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Vivendum intellegat et qui, ei denique consequuntur vix. Ad doctus gubergren duo, mel te postea suavitate. Pri posse graeco definitiones cu, id eam populo quaestio adipiscing, usu quod malorum te. Offendit eleifend moderatius ex vix, quem odio mazim et qui, purto expetendis cotidieque quo cu, veri persius vituperata ei nec. Partiendo adversarium no mea. Accusam explicari sed ei. Prima zril primis eu sed, mei ei eirmod moderatius adversarium. Scripta periculis ei eam, te pro movet reformidans.
        </Typography>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  );
}

export default About;