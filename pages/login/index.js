import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"


import Form from "../../components/Form.js"
import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';

export default function Login() {
  const router = useRouter()
   
  const [email, setEmail] = React.useState("");
  return (
    <div className="login">
      <Head>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>Disney+ | Iniciar Sesión</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="main login">
          <Form onChange={e => setEmail(e.target.value)} value={email}/>
      </main>
      <Footer />
    </div>
  )

  }
