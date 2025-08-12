import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  kode: string,
  name: string,
  jabatan: string,
  status: string
) {
  return { kode, name, jabatan, status };
}

const rows = [createData("DRN01", "M Ridwan Surya", "Kepala Dinas", "Aktif")];

export default function TableStaff() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell>Kode Staff</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Jabatan</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="center">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {row.kode}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.jabatan}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="center">hehe</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
