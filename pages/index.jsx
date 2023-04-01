import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Home = () => {
  return (
    <>
    <Head>
      <title>My Page | My Bird</title>
    </Head>
        <AppLayout><div>Hello Home</div></AppLayout> 
    </>  )
}

export default Home
