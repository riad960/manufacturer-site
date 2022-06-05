import React from "react";
import { motion } from "framer-motion";
function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{}}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" flex items-center justify-center">
          <h1 className="text-[#f50057] font-bold text-2xl md:text-4xl my-10 md:mt-0">
            Page Not Found 😭😭
          </h1>
        </div>
        <div className="col-md-6">
          <img
            src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1649091633~exp=1649092233~hmac=d80e7ca0d4737ff6133b84bae3e119766afa2f66cc50a58708dd706ac0fc47b6"
            alt="hello"
            className="ms:w-[70%] w-[90%] m-5 my-shadow rounded-md"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default NotFound;
