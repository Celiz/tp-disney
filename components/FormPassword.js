import Image from "next/image";
import React from "react";
import { IconWorld } from '@tabler/icons';
import { Select } from '@mantine/core';
import { links2 } from '../constants/links';
import { useRouter } from 'next/router';


export default function FormPassword() {

    const router = useRouter()
    return (

    <main className="main login">
                <section className="login__section">
                    <h3 className="h3">Iniciar sesión | Disney+</h3>
                    <p className="p">
                        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña. 
                    </p>
                    <input aria-invalid="false" aria-label="Escribe el correo electrónico que te gustaría usar para Disney Plus." aria-describedby="email__error" data-testid="" display="inline" id="email" maxlength="" name="email" placeholder="Contraseña" type="email" data-gv2elementkey="email" data-gv2interactionkey="email" className="form" />
                    <p className="p--form">
                        Distingue entre mayúsculas y minúsculas.
                    </p>
                    <button aria-label="Aceptar y continuar" data-testid="login-continue-button" role="button" kind="primary" name="dssLoginSubmit" value="submit" className="btn" id="" type="submit" data-gv2elementkey="agree_&amp;_continue" data-gv2interactionkey="agree_&amp;_continue" data-gv2-interaction-bound="true">CONTINUAR</button>
                    <section className="login__section--subscribe"><button>¿Olvidaste la contraseña?</button></section>
                </section>
            </main>

    );

}