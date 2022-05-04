import { ChatCircleDots } from "phosphor-react"
import { Popover } from "@headlessui/react"
import { WidgetForm } from "./WidgetForm/"

export function Widget() {
    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-7 md:right-7 flex flex-col items-end">
            <Popover.Panel>
                <WidgetForm></WidgetForm>
            </Popover.Panel>

            <Popover.Button className="bg-brand-500 text-white rounded-full p-2 flex items-center group">
                <ChatCircleDots size={32} />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}