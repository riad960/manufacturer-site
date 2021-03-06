import React, { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;

    const currentUser = { email: email };
    if (email) {
      fetch(`https://still-garden-76565.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accesToken = data.accesToken;
          localStorage.setItem("accesToken", accesToken);
          setToken(accesToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
