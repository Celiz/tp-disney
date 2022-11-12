import React from 'react';
import Head from 'next/head';
import Navbar from '../components/NavbarLogin.js';
import Footer from '../components/FooterLogin.js';

export default function Dashboard() {

  return (
    <React.Fragment>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>
      <NavbarLogin />
      <h1>Dashboard</h1>
      <Footer />
    </React.Fragment>
  )
}