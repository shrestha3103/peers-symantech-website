import { motion } from "framer-motion";

export default function AnimatedHeading({ text }) {
    return (
        <motion.h1
            className="text-4xl md:text-5xl text-(--maroon) tracking-wider font-semibold leading-snug"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.6 }}
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.08 },
                },
            }}
        >
            {text.split(" ").map((word, i) => (
                <motion.span
                    key={i}
                    className="inline-block mr-2"
                    variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { ease: "easeOut", duration: 0.5 },
                        },
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.h1>
    );
}
