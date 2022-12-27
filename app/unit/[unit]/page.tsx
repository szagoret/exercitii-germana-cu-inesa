'use client'
import {motion} from "framer-motion"
import {useRouter} from 'next/navigation';


interface LessonProps {
    params: {
        unit: string
    }
}

const Unit = ({params}: LessonProps) => {
    const router = useRouter();
    return (
        <>
            <div className={"md:container md:mx-auto m-4 flex justify-center h-fit"}>
                <div className="max-w-2xl py-5">
                    <motion.div
                        initial={{x: 40}}
                        animate={{x: 0}}
                        transition={{
                            type: "tween"
                        }}
                    >
                        <span className="badge text-lg"> {params.unit}</span>
                        <h1 className={"text-lg"}>
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                            relative h-32 shadow-inner
                        </h1>
                    </motion.div>
                </div>

            </div>
            <div className="w-full h-24 fixed bottom-0 shadow-sm border-t-4 flex items-center">
                <div className={"flex flex-grow justify-center "}>
                    <button className="btn btn-primary ml-6"
                            onClick={() => router.push(`unit/${parseInt(params.unit) + 1}`)}>
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="h-6 w-6" fill="none"
                             stroke="currentColor">
                            <path style={{fill: '#232326'}}
                                  d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                                  data-name="Right"/>
                        </svg>

                    </button>
                </div>
            </div>
        </>
    );
};

export default Unit;