import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import FetchApiClient from "../../../../fetch_api_clients/api";
import { useRouter } from "next/router";
import { decode } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import DriverInfoList from "./details";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },

  {
    id: "address",
    label: "Address",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: "Phone Number",
    minWidth: 100,
  },
];

function createData(name, email, address, phone) {
  return { name, email, address, phone };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

export default function AllDriversInformation() {
  const [token] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("adminToken");
    }
  });

  const api = new FetchApiClient("/admin", token);
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [driversData, setDriversData] = React.useState(null);
  const [driverData, setDriverData] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const fetchDriverInfo = async () => {
    try {
      let { error, response } = await api.get("/all_drivers");
      if (error) throw new Error(error);
      else setDriversData(response);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    try {
      let decoded = jwtDecode(token);
      setUser(decoded);
      fetchDriverInfo();
    } catch (err) {
      console.log(err);
      router.push("/admin/login");
    }
  }, [token]);

  ///MODAL
  const [open, setOpen] = React.useState(false);
  const handleOpeDriverModal = (data) => {
    setDriverData(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow style={{ background: "black" }}>
                {columns.map((column) => (
                  <TableCell key={column.id} style={{ minWidth: "100" }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })} */}

              {driversData &&
                driversData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((driverData, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={i}
                        onClick={() => handleOpeDriverModal(driverData)}
                      >
                        <TableCell>{driverData.name}</TableCell>
                        <TableCell>{driverData.email}</TableCell>
                        <TableCell>{driverData.address}</TableCell>
                        <TableCell>{driverData.phone}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={driversData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {driverData && (
        <DriverInfoList
          open={open}
          driverData={driverData}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
