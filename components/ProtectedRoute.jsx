'use client';

import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext'; // Adjust the path to your AppContext file
import { useRouter } from 'next/navigation';

const ProtectedRoute = ({ children }) => {
  const { token } = useAppContext();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      // Redirect to login if the user is not authenticated
      router.push('/');
    }
  }, [token, router]);

  // Render children only if the token exists
  return token ? children : null;
};

export default ProtectedRoute;
