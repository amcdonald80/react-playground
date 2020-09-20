import React, { useState } from "react";
import { Box, AppBar, Toolbar, Icon, IconButton, Menu, MenuItem, Typography, Grid, Card } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors"
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";

import Home from "./views/Home";
import About from "./views/About";
import Register from "./views/Register";
import TableView from "./views/TableView"

function App() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuAnc, setMenuAnc] = useState(null);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar variant="dense" style={{ backgroundColor: lightBlue[500] }}>
          <Grid container>
            <Grid item xs={4}>
              <IconButton
                onClick={e => setAnchorEl(e.target)}
                style={{ color: "white" }}
              >
                <Icon>build</Icon>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem>Test 1</MenuItem>
                <MenuItem>Test 2</MenuItem>
                <MenuItem>Test 3</MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={4} >
              <Typography align="center" variant="h4">Title</Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container justify="flex-end">
                <IconButton
                  style={{ color: "white" }}
                  onClick={e => setMenuAnc(e.target)}
                >
                  <Icon>menu</Icon>
                </IconButton>
                <Menu
                  anchorEl={menuAnc}
                  open={Boolean(menuAnc)}
                  onClose={() => setMenuAnc(null)}
                >
                  <MenuItem
                    onClick={() => { history.push("/Register"); setMenuAnc(null); }}
                  >Register</MenuItem>
                  <MenuItem
                    onClick={() => { history.push("/table"); setMenuAnc(null); }}
                  >Table</MenuItem>
                  <MenuItem
                    onClick={() => { history.push("/about"); setMenuAnc(null); }}
                  >About</MenuItem>
                  <MenuItem
                    onClick={() => { history.push("/"); setMenuAnc(null); }}
                  >Home</MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container style={{ minHeight: "calc(100vh - 48px)" }}>
        <Card
          style={{ margin: "30px", padding: "30px", width: "100%" }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/table">
              <TableView />
            </Route>
          </Switch>
        </Card>
      </Grid>
    </Box>
  )
}

export default App;