import Image from "next/image";
import React from "react";
import { IconWorld } from '@tabler/icons';
import { Select } from '@mantine/core';
import { links2 } from '../constants/links';
import { useRouter } from 'next/router';

export default function Form() {
  const router = useRouter()
  

  return (
        <section className="login__section">
          <h3 className="h3">Inicia sesión con tu correo</h3>
          <p className="p">
            Debes usar este correo electrónico y contraseña para iniciar sesión en tu cuenta de Disney+ y ver tus series y películas favoritas.
          </p>
          <input aria-invalid="false" aria-label="Escribe el correo electrónico que te gustaría usar para Disney Plus." aria-describedby="email__error" data-testid="" display="inline" id="email" maxlength="" name="email" placeholder="Correo electrónico" type="email" data-gv2elementkey="email" data-gv2interactionkey="email" className="form"/>
          <button aria-label="Aceptar y continuar" data-testid="login-continue-button" role="button" kind="primary" name="dssLoginSubmit" value="submit" className="btn" id="" type="submit" onClick={() => router.push('login/password')}>
            CONTINUAR
          </button>
          <section className="login__section--subscribe"><p class="p">¿Primera vez en Disney+?</p> <button onClick={() => router.push('register')}>Suscribirse</button></section>
        </section>
  );
}

