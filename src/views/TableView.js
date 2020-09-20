import React, { useEffect, useState } from "react";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import axios from "axios";

function TableView() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let res = null;
      try {
        res = await axios({
          method: "get",
          url: process.env.REACT_APP_URL + "data"
        })
      } catch (err) {
        alert(JSON.stringify(err));
      }
      setData(res.data);
    }
    getData();
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Username</TableCell>
            <TableCell align="center">Password</TableCell>
            <TableCell align="center">Gobbelty</TableCell>
            <TableCell align="center">Gook</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(x => (
            <TableRow key={x.username}>
              <TableCell align="center">
                {x.username}
              </TableCell>
              <TableCell align="center">
                {x.password}
              </TableCell>
              <TableCell align="center">
                faslkjdfls
              </TableCell>
              <TableCell align="center">
                kjsdfkahsf
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableView;