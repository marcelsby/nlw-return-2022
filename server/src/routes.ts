import express from 'express'
import nodemailer from 'nodemailer'
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackService } from './services/submitFeedbackService';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "e2586a1b7b255b",
        pass: "517dd71fc99ce4"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

    const submitFeedbackService = new SubmitFeedbackService(prismaFeedbacksRepository)

    await submitFeedbackService.submit({ type, comment, screenshot })

    // await transport.sendMail({
    //     from: 'Equipe Feedget <equipe@feedget.com>',
    //     to: 'Marcel Barbosa <marcel.sby.br@gmail.com>',
    //     subject: 'Novo feedback',
    //     html: [
    //         `<div style="font-family: sans-serif; font-size: 16px; color: #222">`,
    //         `<p>Tipo do feedback: ${type}</p>`,
    //         `<p>Comentário: ${comment}</p>`,
    //         `</div>`
    //     ].join('\n')
    // })

    return res.sendStatus(201)
})