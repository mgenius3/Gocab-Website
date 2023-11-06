// import jwtDecode from 'jwt-decode';
import jwt, { decode } from "jsonwebtoken";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PageAuthentication = ({ children, url }) => {
  let router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("userToken");
        let key = "gocab.transit.logistics";
        try {
          let decode_data = jwt.decode(token);
          if (!decode_data) throw new Error("error");
        } catch (err) {
          console.log(err);
          // router.push(url);
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>{children}</div>
    </>
  );
};

export default PageAuthentication;
