import { Bug, ChatCircleDots, Lightbulb } from "phosphor-react";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export function createFeedbackIcon(feedbackType: FeedbackType) {
    switch (feedbackType) {
        case FeedbackType.BUG:
            return (size: number) => <Bug className="text-[#c55454]" size={size} alt="Imagem de um inseto" />
        case FeedbackType.IDEA:
            return (size: number) => <Lightbulb className="text-[#e5df65]" size={size} alt="Imagem de um bulbo de lâmpada" />
        default:
            return (size: number) => <ChatCircleDots className="text-[#64a5e4]" size={size} alt="Imagem de um balão de conversa" />
    }
}

export enum FeedbackType {
    BUG = "BUG",
    IDEA = "IDEA",
    OTHER = "OTHER"
}

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        iconCreator: createFeedbackIcon(FeedbackType.BUG)
    },
    IDEA: {
        title: 'Ideia',
        iconCreator: createFeedbackIcon(FeedbackType.IDEA)
    },
    OTHER: {
        title: 'Outro',
        iconCreator: createFeedbackIcon(FeedbackType.OTHER)
    }
}

export function WidgetForm() {
    const [selectedFeedback, setSelectedFeedback] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleReturnFeedback() {
        setFeedbackSent(false)
        setSelectedFeedback(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            {feedbackSent ? (
                <FeedbackSuccessStep onSendAnotherFeedback={handleReturnFeedback} />
            ) : (
                <>
                    {!selectedFeedback ? (
                        <FeedbackTypeStep onFeedbackTypeSelected={setSelectedFeedback} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={selectedFeedback}
                            onFeedbackReturnRequested={handleReturnFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a href="https://rocketseat.com.br" className="underline underline-offset-1">Rocketseat</a>
            </footer>
        </div>
    )
}