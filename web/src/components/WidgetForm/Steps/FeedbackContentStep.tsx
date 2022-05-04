import { ArrowLeft } from "phosphor-react"
import { FormEvent, useState } from "react"
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"
import { ScreenshotButton } from "../ScreenshotButton"

interface FeedbackContentStepProps {
    feedbackType: FeedbackType
    onFeedbackReturnRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackReturnRequested,
    onFeedbackSent
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    function handleSubmitFeedback(event: FormEvent) {
        event.preventDefault()

        console.log({
            screenshot,
            comment
        })

        onFeedbackSent()
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className="absolute left-5 top-5 text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackReturnRequested}
                >
                    <ArrowLeft weight="bold" size={16} />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    {feedbackTypeInfo.iconCreator(24)}
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>
            <form
                className="my-4 w-full"
                onSubmit={(event) => handleSubmitFeedback(event)}
            >
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-2 resize-none focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo..."
                    onChange={event => setComment(event.target.value)}
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                        type="submit"
                        disabled={comment.length == 0}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    )
}