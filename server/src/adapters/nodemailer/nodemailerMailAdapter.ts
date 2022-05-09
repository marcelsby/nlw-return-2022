import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e2586a1b7b255b",
        pass: "517dd71fc99ce4"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <equipe@feedget.com>',
            to: 'Marcel Barbosa <marcel.sby.br@gmail.com>',
            subject,
            html: body
        })
    }
}