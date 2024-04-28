import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import OrganisationInfoList from "./organisation/details";

const columns = [
  { id: "name", label: "Bus Name", minWidth: 100 },
  { id: "email", label: "Bus Email", minWidth: 100 },

  {
    id: "address",
    label: "Bus Address",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phone",
    label: "Phone Number",
    minWidth: 100,
  },
];

export default function UnverifiedOrganisations({ orgsData }) {
  const unverifiedDriversData = orgsData?.filter(
    (orgData) => orgData?.status === "on review"
  );

  const [token] = React.useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("adminToken");
    }
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [orgData, setDriverData] = React.useState(null);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
              {orgsData &&
                unverifiedDriversData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((orgData, i) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={i}
                        onClick={() => handleOpeDriverModal(orgData)}
                      >
                        <TableCell>{orgData.name}</TableCell>
                        <TableCell>{orgData.email}</TableCell>
                        <TableCell>{orgData.address}</TableCell>
                        <TableCell>{orgData.phone}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={unverifiedDriversData?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {orgData && (
        <OrganisationInfoList
          open={open}
          orgData={orgData}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
