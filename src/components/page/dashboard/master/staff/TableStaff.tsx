"use client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

interface Staff {
  kode: string;
  nama: string;
  jabatan: string;
  status: string;
}

export default function TableStaff() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch("/api/staff");
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        const result = await response.json();
        setStaff(result.data);
      } catch (error) {
        console.error("Terjadi error saat fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, []);

  if (loading) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No</TableCell>
              <TableCell>Kode Staff</TableCell>
              <TableCell align="left">Nama</TableCell>
              <TableCell align="left">Jabatan</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="center">Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">...</TableCell>
              <TableCell component="th" scope="row">
                ...
              </TableCell>
              <TableCell align="left">...</TableCell>
              <TableCell align="left">...</TableCell>
              <TableCell align="left">...</TableCell>
              <TableCell align="center">...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell>Kode Staff</TableCell>
            <TableCell align="left">Nama</TableCell>
            <TableCell align="left">Jabatan</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="center">Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((row, index) => (
            <TableRow
              key={row.kode}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {row.kode}
              </TableCell>
              <TableCell align="left">{row.nama}</TableCell>
              <TableCell align="left">{row.jabatan}</TableCell>
              <TableCell align="left">Aktif</TableCell>
              <TableCell align="center">...</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
