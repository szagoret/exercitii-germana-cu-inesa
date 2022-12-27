"use client"
import {motion} from "framer-motion";
import Link from 'next/link';

interface LessonProps {
    id: number,
    title: string,
}

const Lesson = ({id, title}: LessonProps) => {
    return (
        <Link href="unit/1">
            <div className="relative flex justify-between">
                <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                    <div>
                        <div
                            className="flex items-center justify-center w-12 h-12 bg-accent-focus rounded-full my-1">
                            <div className="w-10 rounded-full">
                                <motion.div
                                    initial={{scale: 0}}
                                    animate={{scale: 1}}
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30
                                    }}
                                >
                                    <img src="https://img.icons8.com/fluency/48/null/home.png"/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2 h-full bg-accent rounded"></div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30
                }}
                variants={{
                    visible: {opacity: 1, scale: 1},
                    hidden: {opacity: 0, scale: 0}
                }}
            >
                <div>
                    <div
                        className="relative flex-1 mb-10 bg-white border-b-4 border-sky-200 shadow rounded-3xl cursor-pointer">
                        <div className="relative z-20 p-6">
                            <p className="mb-2 text-xl font-bold text-gray-600">{title}</p>
                            <p className="text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero
                                facilis minus
                                reprehenderit.
                            </p>
                        </div>

                    </div>
                </div>
            </motion.div>
            </div>
        </Link>
    );
};

export default Lesson;