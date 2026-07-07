import useAuth from "../../hooks/useAuth";

export default function WelcomeBanner() {

    const { user } = useAuth();

    return (

        <div className="mb-10">

            <h1 className="text-5xl font-bold">

                Welcome,

                <span className="text-cyan-400">

                    {" "}

                    {user?.displayName || "User"}

                </span>

                👋

            </h1>

            <p className="mt-4 text-gray-400 text-lg">

                Ready to chat with your documents today?

            </p>

        </div>

    )

}