import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackTypeStepProps {
    onFeedbackTypeSelected: (type: FeedbackType) => void
}

export function FeedbackTypeStep({ onFeedbackTypeSelected }: FeedbackTypeStepProps) {
    return (
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex gap-2 py-8 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col gap-2 flex-1 items-center border-2 border-transparent hover:border-brand-400 focus:border-brand-400 focus:outline-none"
                            onClick={() => onFeedbackTypeSelected(key as FeedbackType)}
                            type="button"
                        >
                            {value.iconCreator(50)}
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>
        </>
    )
}