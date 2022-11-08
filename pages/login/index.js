import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"


import Form from "../../components/Form.js"
import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';

export default function Login() {


  const router = useRouter()  

  return (
    <div className="login">
      <Head>
        <title>Disney+ | Iniciar Sesión</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main login">
          <Form/>
      </main>
      <Footer />
    </div>
  )

  }
