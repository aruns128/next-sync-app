import React from 'react';
import Layout from 'components/components/Layout';
import PrivateRoute from 'components/components/auth/PrivateRoute';

const ManagePage = () => {
  return (
    <PrivateRoute>
      <Layout>
        <div>
          <h1>Manage Page</h1>
        </div>
      </Layout>
    </PrivateRoute>

  );
};

export default ManagePage;
