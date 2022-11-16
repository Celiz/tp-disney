import React from 'react';
import Head from 'next/head';
import Navbar from '../components/NavbarLogin.js';
import Footer from '../components/FooterLogin.js';

export default function Dashboard() {

  return (
    <React.Fragment>
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Disney+</title>
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>
      <Navbar/> 
        <main className="main login">
           <section className="login__section">
              <h3 className="h3">Bienvenido a Disney+</h3>
            </section>
        </main>   
    </React.Fragment>
  )
}