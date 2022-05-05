import { CheckSquare } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
    onSendAnotherFeedback: () => void
}

export function FeedbackSuccessStep({ onSendAnotherFeedback }: FeedbackSuccessStepProps) {
    return (
        <>
            <header>
                <CloseButton />
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <CheckSquare size={64} color="#5dc554" />

                <span className="text-xl mt-2">Agradecemos o feedback!</span>

                <button
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:ring-brand-500 focus:ring-2 resize-none focus:outline-none"
                    onClick={onSendAnotherFeedback}
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}