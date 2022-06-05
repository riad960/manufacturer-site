import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://still-garden-76565.herokuapp.com/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user]);

  return [admin, adminLoading];
};

export default useAdmin;

// import { useEffect, useState } from "react";

// const useAdmin = (user) => {
//   const [admin, setAdmin] = useState(false);
//   useEffect(() => {
//     const email = user?.email;
//     if (email) {
//       fetch(`https://still-garden-76565.herokuapp.com/admin/${email}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer ${localStorage.getItem("accesToken")}`,
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setAdmin(data.admin);
//         });
//     }
//   }, [user]);
//   return [admin];
// };
// export default useAdmin;
