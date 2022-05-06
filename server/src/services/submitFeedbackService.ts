import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackServiceRequest {
    type: string;
    comment: string;
    screenshot?: string;
}

export class SubmitFeedbackService {
    constructor(
        private feedbacksRepository: FeedbacksRepository
    ) {}

    async submit(request: SubmitFeedbackServiceRequest) {
        const { type, comment, screenshot } = request

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
        })
    }
}