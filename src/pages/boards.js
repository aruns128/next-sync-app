import React from 'react';
import Layout from 'components/components/Layout';
import PrivateRoute from 'components/components/auth/PrivateRoute';

const BoardPage = () => {
  return (
    <PrivateRoute>
      <Layout>
        <h1>Boards</h1>
      </Layout>
    </PrivateRoute>

  );
};

export default BoardPage;
