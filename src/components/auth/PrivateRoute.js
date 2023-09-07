import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from './auth';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return user ? children : null;
};

export default PrivateRoute;
