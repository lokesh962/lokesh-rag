export default function MessageBubble({

    sender,

    message

}) {

    const isUser = sender === "user";

    const isThinking = message === "Thinking...";

    return (

        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 sm:mb-5`}
        >

            <div
                className={`
                    max-w-[88%]
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    whitespace-pre-wrap
                    sm:max-w-[75%]
                    sm:px-5
                    sm:py-3
                    sm:text-base
                    ${
                        isUser
                            ? "bg-blue-600 text-white"
                            : "bg-[#1f2937] text-gray-100"
                    }
                `}
            >

                {

                    isThinking

                        ?

                        <div className="flex items-center gap-2">

                            <span className="animate-pulse">

                                🤖

                            </span>

                            Thinking...

                        </div>

                        :

                        message

                }

            </div>

        </div>

    );

}