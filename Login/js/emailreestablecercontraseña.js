
import { Resend } from 'resend';

    const botonEnvioEmail = document.getElementById('linkRegistrarse');
    botonEnvioEmail.addEventListener('click',()=>{

const resend = new Resend('re_dFWj8kUE_Ay2WwTGhipeLvqf3xFvUfDwk');

resend.emails.send({
  from: 'marcosmaestrocobo@gmail.com',
  to: document.getElementById('email').value.trim(),
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
})
console.log("Email enviado con exito");
})