import React from "react";

function Blog() {
  return (
    <div className="my-5 w-screen mx-auto text-center">
      <div className="font-bold text-3xl md:text-5xl"> My Blogs </div>
      <div className="my-9 w-full md:w-3/4 mx-auto text-white my-shadow p-3 rounded bg-white ">
        <h2 className="font-bold my-3 bg-[#f50057] mx-3 rounded px-2 py-1">
          What is the purpose of jwt and how does it work ??
        </h2>
        <p className="para-font font-bold text-zinc-500 px-3 py-5 bg-slate-200 mx-3 rounded">
          JWT is full form of JSON Web Token. JSON Web Token is a string that is
          sent in the HTTP request (from client to server) to validate the
          authenticity of the client. But now, you don’t have to save JWT in the
          database. Instead, you save it on the client-side only.JWT is created
          with a secret key and that secret key is private to you which means
          you will never reveal that to the public or inject inside the JWT
          token. When you receive a JWT from the client, you can verify that JWT
          with this that secret key stored on the server.
        </p>
      </div>
      {/* 2nd question  */}

      {/* 3rd question  */}

      {/* 4rth question  */}
    </div>
  );
}

export default Blog;
