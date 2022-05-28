import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { CircularProgress } from "@mui/material";
function Profile() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div className="min-h-[90vh] flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="mt-12 min-h-[90vh]">
      <h1 className="text-xl font-semibold text-center my-5">My Profile</h1>
      <div className="my-shadow w-[90%] lg:w-[70%] bg-white p-5 mx-auto rounded ">
        <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
          <div className="">
            <img
              src={user.photoURL}
              alt=""
              className="mx-auto my-shadow rounded-md md:w-[50%] w-[90%]"
            />
          </div>
          <div className="my-auto text-center py-5">
            <h1 className="font-semibold text-lg my-3">
              Name : <span className="text-gray-500 ">{user.displayName}</span>
            </h1>
            <h1 className="font-semibold text-lg my-3">
              Email : <span className="text-gray-500 ">{user.email}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
