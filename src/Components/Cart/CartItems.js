import React from "react";

function CartItems({ item }) {
  console.log(item);
  return (
    <div className="my-shadow flex mx-5 p-5 bg-white rounded-md items-center my-5">
      <div className="my-shadow w-10 md:w-16 md:h-16 h-10 rounded-full   ">
        <img
          src={item?.image}
          alt=""
          className="w-full h-full object-cover rounded-full md:ring-4 ring-2 ring-offset-2 ring-[#f50057] "
        />
      </div>
      <div className="font-semibold mx-8">{item?.name} </div>
      {/* <div className="px-5 py-2 ">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <Select
            onChange={handleQty}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Quantity"
          >
            {[...Array(Products?.countInStock).keys()].map((item) => (
              <MenuItem key={item + 1} value={(item + 1) * 5}>
                {(item + 1) * 5}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div> */}
    </div>
  );
}

export default CartItems;
