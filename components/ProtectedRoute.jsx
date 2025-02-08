"use client";

import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext"; // Adjust the path
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }) => {
  
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem("token"); // Retrieve token from localStorage

      if (!storedToken) {
        router.replace("/");
      } else {
        setIsChecking(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isChecking) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    ); // Show a loading spinner while checking the token
  }

  return children;
};

export default ProtectedRoute;

// 'use client';

// import { useEffect } from 'react';
// import { useAppContext } from '../context/AppContext'; // Adjust the path to your AppContext file
// import { useRouter } from 'next/navigation';

// const ProtectedRoute = ({ children }) => {
//   const { token } = useAppContext();
//   const router = useRouter();

//   useEffect(() => {
//     if (!token) {
//       // Redirect to login if the user is not authenticated
//       router.push('/');
//     }
//   }, [token, router]);

//   // Render children only if the token exists
//   return token ? children : null;
// };

// export default ProtectedRoute;
