import { SubmitFeedbackService } from "./submitFeedbackService"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

describe('Submit Feedback', () => {
    const submitFeedback = new SubmitFeedbackService(
        { create: createFeedbackSpy },
        { sendMail: sendMailSpy }
    )

    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.submit({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })

    it('should not be able to submit a feedback without type', async () => {
        await expect(submitFeedback.submit({
            type: '',
            comment: 'Example comment',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback without comment', async () => {
        await expect(submitFeedback.submit({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64'
        })).rejects.toThrow();
    })

    it('should not be able to submit a feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.submit({
            type: 'BUG',
            comment: 'Example comment',
            screenshot: 'Test.jpg'
        })).rejects.toThrow();
    })
})