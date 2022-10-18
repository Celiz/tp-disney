import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"


import Form from "../components/Form.js"
import Navbar from '../components/NavbarLogin.js';
import Footer from '../components/FooterLogin.js';

export default function Login() {
  const router = useRouter()
  // TBC
  return (
    <React.Fragment>
      <Head>
        <title>Iniciar sesión | Disney+</title>
        <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
      </Head>
      <Navbar />
      <main className="main login">
        <Form />
      </main>
      <Footer />
    </React.Fragment>
  )
}