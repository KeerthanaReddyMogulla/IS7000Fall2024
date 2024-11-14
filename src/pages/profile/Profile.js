import React from 'react';
import PageLayout from '../../components/PageLayout';
import Login from '../../components/Login';

function Profile() {
  return (
    <PageLayout title="Welcome to Keerthana's Page">
      <h2 className="text-xl">Profile holder page</h2>
      <Login />
    </PageLayout>
  );
}

export default Profile;
