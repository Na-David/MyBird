import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';


const Profile = () => {

  const followingList = [{nickname: 'Nick'}, {nickname: 'Name'}, {nickname: 'Kudasai'}];
  const followerList = [{nickname: 'Nick'}, {nickname: 'Name'}, {nickname: 'Kudasai'}];

  return (
    <>
    <Head>
      <title>My Profile | My Bird</title>
    </Head>
        <AppLayout>
          <NicknameEditForm />
          <FollowList header="Following List" data={followingList} />
          <FollowList header="Follower List" data={followerList} />
        </AppLayout> 
    </>
  )
}

export default Profile;
