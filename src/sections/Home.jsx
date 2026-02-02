import { motion } from "framer-motion";

import GradientCircle from "../components/GradientCircle";
import AnimatedHeading from "../components/AnimatedHeading";
import TypewriterText from "../components/TypewriterText";
import FloatingCircle from "../components/FloatingCircle";

export default function Home() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-(--offwhite) overflow-hidden pt-20"
        >
            <GradientCircle size="200px" position="top-30 left-80" />
            <GradientCircle size="200px" position="bottom-25 left-30" />
            <GradientCircle size="400px" position="top-42 right-24" />

            <div className="text-center max-w-5xl px-6 z-10">
                {/* <h1 className="text-4xl md:text-4xl text-(--maroon) font-semibold mb-6 text-shadow-lg">
                    Intelligent Solution in Medical Informatics, Security & Access Control, Business Automation
                </h1> */}
                <AnimatedHeading text="Intelligent Solution in Medical Informatics, Security & Access Control, Business Automation" />

            </div>
        </section>
    );
}
