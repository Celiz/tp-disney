import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';
import FormPassword from '../../components/FormPassword.js';

export default function Password() {

    const router = useRouter()

    const [password, setPassword] = React.useState("");
    const [login, setLogin] = React.useState(false);
    const [email, setEmail] = React.useState("");
  
    React.useEffect(() => {
      if (password.length > 0 && login) {
        console.log("Fetching...", router.query.email, password);
        fetch(`http://disney-celiz.orgfree.com/login.php?email=${router.query.email}&pass=${password}`, {
          origin: "http://disney-celiz.orgfree.com"
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
        <React.Fragment>
            <Head>
                <title>Restablecer contraseña | Disney+</title>
                <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
            </Head>
            <Navbar/>
            <main className="main login">
                <FormPassword onChange={e => setPassword(e.target.value)} value={password}/>
            </main>
            <Footer />
        </React.Fragment>
    )

}