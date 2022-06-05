import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Chip, CircularProgress } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useNavigate, useParams } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { useQuery } from "react-query";
const Users = () => {
  const params = useParams();
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const Fetch = await fetch(
      "https://still-garden-76565.herokuapp.com/users",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      }
    );
    if (Fetch.status === 401 || Fetch.status === 403) {
      signOut(auth);
      localStorage.removeItem("accesToken");
      navigate("/");
      Swal.fire("Error!", `You are trying to access Forbidden link`, "error");
    }
    const data = await Fetch.json();
    return data;
  };
  const {
    status,
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", fetchUsers);

  // React.useEffect(() => {
  //   setLoading(true);

  //     .then((res) => {
  //
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setLoading(false);
  //       setUsers(data);
  //     });
  // }, []);
  if (isLoading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  const makeAdmin = (email) => {
    fetch(`https://still-garden-76565.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire("Error!", "You dont Have the permission", "error");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Sucess!", "User Succesfully made admin", "success");
          refetch();
        }
      });
  };
  // remove user
  const removeUser = (email) => {
    fetch(`https://still-garden-76565.herokuapp.com/user/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire("Success!", "User Deleted Succesfuly", "success");
          refetch();
        }
      });
  };
  return (
    <div className="">
      <h1 className="text-xl font-semibold text-center my-5">
        All Users {users?.length}
      </h1>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="right">User's ID</TableCell>

                <TableCell align="right">Status</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.map((row) => (
                <TableRow
                  key={row.email}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell align="right">{row._id}</TableCell>

                  <TableCell align="right">
                    {row.role === "admin" ? (
                      <Button
                        variant="contained"
                        size="small"
                        style={{ background: "#1a237e", textAlign: "center" }}
                      >
                        <AdminPanelSettingsIcon />
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        size="small"
                        style={{ background: "#43a047", textAlign: "center" }}
                      >
                        <AccountCircleIcon />
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {row.role !== "admin" && (
                      <Button
                        variant="contained"
                        disabled={row.paid}
                        endIcon={<AdminPanelSettingsIcon />}
                        style={{ background: "#1a237e" }}
                        onClick={() => makeAdmin(row.email)}
                      >
                        Make Admin
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => removeUser(row.email)}
                      variant="contained"
                      disabled={row.paid}
                      endIcon={<RemoveCircleIcon />}
                      style={{ background: "#f50057" }}
                    >
                      Block
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Users;
