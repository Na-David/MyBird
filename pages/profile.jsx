import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

import NicknameEditForm from '../components/NicknameEditForm';
import FollowingList from '../components/FollowingList';
import FollowerList from '../components/FollowerList';

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
          <FollowingList header="Following List" data={followingList} />
          <FollowerList header="Follower List" data={followerList} />
        </AppLayout> 
    </>
  )
}

export default Profile;
