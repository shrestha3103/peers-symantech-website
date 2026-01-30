import GradientCircle from "../components/GradientCircle";

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-(--offwhite) overflow-hidden pt-20"
        >
            <GradientCircle size="200px" position="top-20 left-80" />
            <GradientCircle size="200px" position="bottom-12 left-20" />
            <GradientCircle size="400px" position="top-32 right-24" />

            <div className="text-center max-w-5xl px-6 z-10">
                <h1 className="text-4xl md:text-4xl font-semibold mb-6">
                    All of our products are cloud enabled, cross-platform and
                    ready to be used in modern SaaS models.        </h1>
                <p className="text-gray-700 leading-relaxed">

                </p>
            </div>
        </section>
    );
}
