import { Button, CircularProgress, Divider, Input } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import auth from "../../Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Login = () => {
  // google login
  const [signInWithGoogle, userGoogle, loading, errorGoogle] =
    useSignInWithGoogle(auth);
  //   const { user } = userGoogle;
  if (userGoogle) {
    console.log(userGoogle.user.photoURL);
  }
  if (errorGoogle) {
    console.log(errorGoogle);
  }
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <div className="my-shadow w-96 mx-5 bg-white rounded">
        <h1 className="text-center text-2xl font-semibold mt-5">Login</h1>
        <form className="m-5 flex items-center flex-col">
          <Input
            style={{ width: "80%", marginBottom: "40px" }}
            placeholder="Type your Email"
            required
          />
          <Input
            type="password"
            required
            style={{ width: "80%", marginBottom: "40px" }}
            placeholder="Type your Password"
          />
          <div className="mt-5 w-full text-center">
            <Button type="submit" variant="contained" style={{ width: "80%" }}>
              Login
            </Button>
          </div>
          <Divider variant="middle" />
          <div className="my-3 text-lg font-semibold">Or</div>
          <div className=" w-full text-center mb-5">
            <Button
              onClick={() => signInWithGoogle()}
              endIcon={<GoogleIcon />}
              variant="contained"
              style={{ width: "80%", background: "#f50057" }}
            >
              Login With Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
