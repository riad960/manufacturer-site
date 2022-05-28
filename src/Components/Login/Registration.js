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
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuthState } from "react-firebase-hooks/auth";
import useToken from "../Hooks/useToken";
const Login = () => {
  const navigate = useNavigate();
  // sign with email and password

  // react hook from
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };
  // google login
  const [signInWithGoogle, userGoogle, loading, errorGoogle] =
    useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, userEmail, EmalLoading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [user, loading2, error2] = useAuthState(auth);
  const [token] = useToken(userGoogle || user || userEmail);
  console.log(token);
  if (token) {
    navigate("/");
  }

  if (error || errorGoogle) {
    return Swal.fire(
      "Error!",
      `${error?.message || errorGoogle?.message}`,
      "error"
    );
  }
  if (loading || EmalLoading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  // react hook form

  return (
    <div className="flex h-[80vh] items-center justify-center">
      {loading ? (
        <CircularProgress />
      ) : (
        <div className="my-shadow w-96 mx-5 bg-white rounded">
          <h1 className="text-center text-2xl font-semibold mt-5">
            Registration
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="m-5 flex items-center flex-col"
          >
            <div className="mb-10 w-full text-center">
              <Input
                style={{ width: "80%" }}
                {...register("name", {
                  minLength: {
                    value: 5,
                    message: "Name Must Be 6 Charechter",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                placeholder="Type your Name"
              />
              {errors.email?.type === "required" && (
                <div className="text-red-500 text-left px-8 w-full ">
                  {errors.name.message}
                </div>
              )}
              {errors.email?.type === "minLength" && (
                <div className="text-red-500 text-left px-8 w-full ">
                  {errors.name.message}
                </div>
              )}
            </div>
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
                placeholder="Type your Password"
              />
              {errors.email?.type === "required" && (
                <div className="text-red-500 text-left px-8 w-full ">
                  {errors.password.message}
                </div>
              )}
              {errors.email?.type === "minLength" && (
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
                Sign Up
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
            <div className="">
              <Button as={Link} to="/login">
                Already user ? / Login
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
