import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Chip, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useQuery } from "react-query";
import { motion } from "framer-motion";
import gsap from "gsap";
function ManageOrders() {
  const navigate = useNavigate();

  const handleOrders = async () => {
    const Fetched = await fetch(
      "https://still-garden-76565.herokuapp.com/orders",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      }
    );
    if (Fetched.status === 401 || Fetched.status === 403) {
      signOut(auth);
      localStorage.removeItem("accesToken");
      navigate("/");
      Swal.fire("Error!", `You are trying to access Forbidden link`, "error");
    }
    const Data = await Fetched.json();
    return Data;
  };
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("order-admin", handleOrders);
  // React.useEffect(() => {
  //   setLoading(true);

  //     .then((res) => {

  //       return res.json();
  //     })
  //     .then((data) => {
  //       setLoading(false);
  //       setOrders(data);
  //     });
  // }, []);
  // delevered
  const deleteItem = (id) => {
    fetch(`https://still-garden-76565.herokuapp.com/delevered/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          Swal.fire("Success!", "Item Delevered Succesfuly", "success");
          refetch();
        }
      });
  };
  if (isLoading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=""
    >
      <h1 className="text-xl font-semibold text-center my-5">Manage Orders</h1>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">User Name</TableCell>
                <TableCell align="center">Item Name</TableCell>
                <TableCell align="center">Quantity</TableCell>

                <TableCell align="left">Status</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders?.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name || row.email}
                  </TableCell>
                  <TableCell align="center">{row.product}</TableCell>

                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="center">
                    {row.paid ? (
                      <div className="bg-[#43a047] w-16 text-center  py-2 rounded-3xl shadow-xl px-2 text-xs text-white font-semibold">
                        Paid
                      </div>
                    ) : (
                      <div className="bg-[#f50057] w-16 text-center  py-2 rounded-3xl btn-shadow px-2 text-xs text-white font-semibold">
                        Not Paid
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => deleteItem(row._id)}
                      variant="contained"
                      disabled={row.paid}
                      endIcon={<CheckCircleIcon />}
                      style={{ background: "#263238" }}
                    >
                      delevered
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </motion.div>
  );
}

export default ManageOrders;
