import {
  Button,
  CircularProgress,
  Divider,
  Input,
  TextField,
} from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import auth from "../../Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  // google login
  const [signInWithGoogle, userGoogle, loading, errorGoogle] =
    useSignInWithGoogle(auth);
  if (userGoogle) {
    navigate("/");
  }

  if (errorGoogle) {
    console.log(errorGoogle);
  }
  // react hook form
  return (
    <div className="flex h-[80vh] items-center justify-center">
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="my-shadow w-96 mx-5 bg-white rounded">
          <h1 className="text-center text-2xl font-semibold mt-5">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-5 flex items-center flex-col"
          >
            <div className="mb-10 w-full text-center">
              <Input
                style={{ width: "80%" }}
                {...register("email", {
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Mail",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder="Type your Email"
              />
              {errors.email?.type === "required" && (
                <div className="text-red-500 text-left px-8 w-full ">
                  {errors.email.message}
                </div>
              )}
              {errors.email?.type === "pattern" && (
                <div className="text-red-500 text-left px-8 w-full ">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="mb-10 w-full text-center">
              <Input
                type="password"
                style={{ width: "80%" }}
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
                  },
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                })}
                placeholder="Type your Email"
              />
              {errors.email?.type === "required" && (
                <div className="text-red-500 text-left px-8 w-full ">
                  {errors.password.message}
                </div>
              )}
              {errors.email?.type === "minLength:" && (
                <div className="text-red-500 text-left px-8 w-full ">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="mt-5 w-full text-center">
              <Button
                type="submit"
                variant="contained"
                style={{ width: "80%" }}
              >
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
      )}
    </div>
  );
};

export default Login;