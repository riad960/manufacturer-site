import React, { useState } from "react";
import { Button, CircularProgress, Input } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init.js";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function AddReviwes() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [reviewed, setReviewed] = useState(false);
  const [value, setValue] = useState(0);

  const review = {
    name: user?.displayName || name,
    rating: Number(value),
    comment: comment,
  };
  //  name handler
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  // coment handler
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  // handle submit
  const handleSubmit = () => {
    fetch("https://still-garden-76565.herokuapp.com/userReviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire("Success!", "Thanks For Your Review", "success");
          navigate("/");
        }
        if (data.success === false) {
          setReviewed(!reviewed);
          Swal.fire("Error!", `You have already rated`, "error");
        }
      });
  };
  console.log(reviewed);
  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold text-center my-8">Add Review</h1>
      <form className="my-shadow w-[90%] lg:w-[40%] bg-white p-5 mx-auto rounded ">
        <div className="my-10 w-full text-center">
          <Input
            style={{ width: "80%" }}
            placeholder="Name"
            value={user.displayName}
            onBlur={nameHandler}
          />
        </div>
        <div className="my-10 w-full text-center">
          <TextField
            multiline
            rows={4}
            style={{ width: "80%" }}
            placeholder="Comment"
            onBlur={handleComment}
          />
        </div>
        <div className="w-full flex mb-10">
          <div className="mx-auto ">
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.5}
              size="large"
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
        <div className="mb-10 text-center ">
          <Button
            variant="contained"
            style={{ width: "90%" }}
            onClick={handleSubmit}
            disabled={!reviewed ? false : true}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddReviwes;
