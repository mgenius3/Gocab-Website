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
import { jwtDecode } from "jwt-decode";

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

export default function AllUsersInformation() {
  const [token] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("adminToken");
    }
  });

  const api = new FetchApiClient("/admin", token);
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [usersData, setDriversData] = React.useState(null);
  const [userData, setDriverData] = React.useState(null);
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
      let { error, response } = await api.get("/all_users");
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
              {usersData &&
                usersData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((userData, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={i}
                        onClick={() => handleOpeDriverModal(userData)}
                      >
                        <TableCell>{userData.name}</TableCell>
                        <TableCell>{userData.email}</TableCell>
                        <TableCell>{userData.address}</TableCell>
                        <TableCell>{userData.phone}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={usersData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
