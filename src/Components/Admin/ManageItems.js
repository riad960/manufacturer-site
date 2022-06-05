import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { motion } from "framer-motion";
import { Button, Chip, CircularProgress } from "@mui/material";
import {
  unstable_HistoryRouter,
  useNavigate,
  useParams,
} from "react-router-dom";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import GetUsers from "../../GetUsers";
const ManageItems = () => {
  const [Products, isLoading, refetch] = GetUsers();
  const params = useParams();
  const navigate = useNavigate();
  //   delete a item

  const deleteItem = (name) => {
    fetch(`https://still-garden-76565.herokuapp.com/products/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          Swal.fire("Success!", "Item Deleted Succesfuly", "success");
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
      <h1 className="text-xl font-semibold text-center my-5">Manage Items</h1>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Item Name</TableCell>
                <TableCell align="center">Item Quantity</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Products?.map((row) => (
                <TableRow
                  key={row?.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.name}
                  </TableCell>
                  <TableCell align="center">{row.countInStock}</TableCell>
                  <TableCell align="right">
                    <img
                      src={row?.image}
                      alt=""
                      className="w-12 h-12 object-cover rounded-full my-shadow"
                    />
                  </TableCell>
                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="center">
                    {row.countInStock ? (
                      <div className="bg-[#43a047] w-16 text-center  py-2 rounded-3xl shadow-xl px-2 text-xs text-white font-semibold">
                        available
                      </div>
                    ) : (
                      <div className="bg-[#f50057] w-16 text-center  py-2 rounded-3xl btn-shadow px-2 text-xs text-white font-semibold">
                        Not in stock
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => deleteItem(row.name)}
                      variant="contained"
                      disabled={row.paid}
                      style={{ background: "#f50057" }}
                    >
                      delete
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
};

export default ManageItems;
