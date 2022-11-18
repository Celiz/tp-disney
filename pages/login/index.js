import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"


import Form from "../../components/Form.js"
import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';

export default function Login() {
  const router = useRouter()

  const [password, setPassword] = React.useState("");
  const [login, setLogin] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (password.length > 0 && login) {
      console.log("Fetching...", router.query.email, password);
      fetch(`https://disney-celiz.000webhostapp.com/login.php?email=${router.query.email}&pass=${password}`, {
        origin: "https://disney-celiz.000webhostapp.com"
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        if (data == 1) {
          router.push(`../dashboard`);
        } else {
          alert("Contraseña incorrecta");
        }
        setLogin(false);
      });
    }
  }, [login]);
  return (
    <div className="login">
      <Head>

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
