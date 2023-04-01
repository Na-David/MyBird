import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

const Profile = () => {
  return (
    <>
    <Head>
      <title>My Profile | My Bird</title>
    </Head>
        <AppLayout><div>Hello Profile</div></AppLayout> 
    </>
  )
}

export default Profile;
