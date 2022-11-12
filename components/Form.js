import Image from "next/image";
import React from "react";
import { IconWorld } from '@tabler/icons';
import { Select } from '@mantine/core';
import { links2 } from '../constants/links';
import { useRouter } from 'next/router';

export default function Form() {
  const router = useRouter()
  const [email, setEmail] = React.useState("");

  return (
    <section className="login__section">
      <h3 className="h3">Inicia sesión con tu correo</h3>
      <p className="p">
        Debes usar este correo electrónico y contraseña para iniciar sesión en tu cuenta de Disney+ y ver tus series y películas favoritas.
      </p>
      <input onChange={e => setEmail(e.target.value)} value={email} id="email" name="email" placeholder="Correo electrónico" type="email" className="form" />
      <button role="button" kind="primary" name="dssLoginSubmit" value="submit" className="btn" id="" type="submit"
       onClick={
              () => {
                router.push(`/login/${email}`);
              }
            }>
        CONTINUAR
      </button>
      <section className="login__section--subscribe"><p className="p">¿Primera vez en Disney+?</p> <button onClick={() => router.push('register')}>Suscribirse</button></section>
    </section>
  );
}

