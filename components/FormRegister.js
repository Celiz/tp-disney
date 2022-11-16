import React from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "../../components/NavbarLogin.js";
import Footer from "../../components/FooterLogin.js";


export default function FormRegister() {

    const router = useRouter();

    return (
        <main className="main login">
            <section className="login__section">
                <h3 className="h3">Iniciar sesión | Disney+</h3>
                <p className="p">
                    Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                </p>
                <input type="password" placeholder="Contraseña" />
                <p className="p--form">
                    Distingue entre mayúsculas y minúsculas.
                </p>
                <button aria-label="Aceptar y continuar" data-testid="login-continue-button" role="button" kind="primary" name="dssLoginSubmit" value="submit" className="btn" id="" type="submit" data-gv2elementkey="agree_&amp;_continue" data-gv2interactionkey="agree_&amp;_continue" data-gv2-interaction-bound="true">CONTINUAR</button>
                <section className="login__section--subscribe"><button>¿Olvidaste la contraseña?</button></section>
            </section>
        </main>
    );

}

    