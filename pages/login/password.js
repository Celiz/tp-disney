import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"

import Navbar from '../../components/NavbarLogin.js';
import Footer from '../../components/FooterLogin.js';
import FormPassword from '../../components/FormPassword.js';



export default function Password() {

    const router = useRouter()

    return (
        <React.Fragment>
            <Head>
                <title>Restablecer contraseña | Disney+</title>
                <link rel="icon" href="https://static-assets.bamgrid.com/product/disneyplus/favicons/favicon.85e279041d79e51b147c1b6feb4f981e.ico" />
            </Head>
            <Navbar />
            <main className="main login">
                <FormPassword />
            </main>
            <Footer />
        </React.Fragment>
    )

}