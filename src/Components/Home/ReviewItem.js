import React, { useState } from "react";
import { Button, CircularProgress, Input } from "@mui/material";
import Rating from "@mui/material/Rating";

import TextField from "@mui/material/TextField";

function AddReviwes({ reviews }) {
  return (
    <div className="my-3">
      <form className="my-shadow w-[90%] lg:w-96 bg-white p-5 mx-auto rounded ">
        <div className="my-10 w-full text-center font-semibold">
          <Input
            style={{ width: "80%", color: "#000" }}
            placeholder="Name"
            value={reviews?.name}
            disabled
          />
        </div>
        <div className="my-10 w-full text-center">
          <TextField
            multiline
            rows={4}
            style={{ width: "80%" }}
            placeholder="Comment"
            disabled
            value={reviews?.comment}
          />
        </div>
        <div className="w-full flex mb-10">
          <div className="mx-auto ">
            <Rating
              name="read-only"
              readOnly
              value={Number(reviews?.rating)}
              precision={0.5}
              size="large"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviwes;
