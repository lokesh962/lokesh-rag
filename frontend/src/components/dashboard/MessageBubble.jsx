export default function MessageBubble({

    sender,

    message

}) {

    const isUser = sender === "user";

    const isThinking = message === "Thinking...";

    return (

        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"} mb-5`}
        >

            <div
                className={`
                    max-w-[75%]
                    px-5
                    py-3
                    rounded-2xl
                    whitespace-pre-wrap
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