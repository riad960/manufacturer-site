import React, { useState } from "react";
import { Button, CircularProgress, Input } from "@mui/material";
import Rating from "@mui/material/Rating";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init.js";
import TextField from "@mui/material/TextField";
function AddReviwes() {
  const [user, loading, error] = useAuthState(auth);
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <div className="mt-10">
      <h1 className="text-xl font-semibold text-center my-8">Add Review</h1>
      <form className="my-shadow w-[90%] lg:w-[40%] bg-white p-5 mx-auto rounded ">
        <div className="my-10 w-full text-center">
          <Input
            style={{ width: "80%" }}
            placeholder="Name"
            value={user.displayName}
          />
        </div>
        <div className="my-10 w-full text-center">
          <TextField
            multiline
            rows={4}
            style={{ width: "80%" }}
            placeholder="Comment"
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
          <Button variant="contained" style={{ width: "90%" }}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddReviwes;
