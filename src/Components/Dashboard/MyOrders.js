import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Chip } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
const MyOrders = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [myOrder, setMyOrder] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://still-garden-76565.herokuapp.com/orders/${params.id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accesToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accesToken");
          navigate("/");
          Swal.fire(
            "Error!",
            `You are trying to access Forbidden link`,
            "error"
          );
        }
        return res.json();
      })
      .then((data) => setMyOrder(data));
  }, []);
  const redirectToPayment = (id, qty) => {
    navigate(`/checkout/${id}/${qty}`);
  };
  return (
    <div className="mt-5">
      <h1 className="text-xl font-semibold text-center my-5">My Orders</h1>
      <div className="">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">Product</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOrder?.map((row) => (
                <TableRow
                  key={row.product}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.product}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">
                    {row.paid ? (
                      <div className="bg-[#43a047] w-16 text-center ml-auto py-2 rounded-3xl shadow-xl px-2 text-xs text-white font-semibold">
                        Paid
                      </div>
                    ) : (
                      <div className="bg-[#f50057] w-16 text-center ml-auto py-2 rounded-3xl btn-shadow px-2 text-xs text-white font-semibold">
                        Not Paid
                      </div>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {!row.paid ? (
                      <Button
                        variant="contained"
                        onClick={() => redirectToPayment(row._id, row.qty)}
                      >
                        Pay Now
                      </Button>
                    ) : (
                      <Button variant="contained" disabled>
                        Paid
                      </Button>
                    )}
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

export default MyOrders;
