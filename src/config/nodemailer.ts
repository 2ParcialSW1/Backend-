import { createTransport } from "nodemailer";

// ingresar al dashboard de Mailtrap, entrar a la seccion de "imboxes"
// y por ultimo dar click en "Integrations" y elegir Nodejs
const transport = createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "2525"),
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export { transport };