import React, { useEffect, useState } from "react";
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TableFooter, TablePagination } from "@material-ui/core";
import { grey } from "@material-ui/core/colors"
import axios from "axios";

function TableView() {

  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(-1);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let res = null;
      try {
        res = await axios({
          method: "get",
          url: process.env.REACT_APP_URL + "data"
        })
        setData(res.data);
      } catch (err) {
        alert(JSON.stringify(err));
      }
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
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            : data).map((x, index) => (
              <TableRow key={x.username} style={{ backgroundColor: index % 2 == 1 ? grey[50] : "white" }}>
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
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, { label: "all", value: -1 }]}
              colSpan={4}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={(_, page) => setPage(page)}
              onChangeRowsPerPage={e => {
                setRowsPerPage(parseInt(e.target.value, 10));
                setPage(0);
              }}
              labelDisplayedRows={({ from, to, count }) => {
                if (rowsPerPage == -1) return `${count} of ${count}`;
                return `${from}-${to} of ${count}`;
              }}
            ></TablePagination>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}

export default TableView;