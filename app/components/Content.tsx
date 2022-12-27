import Lesson from "app/components/Lesson";
import Footer from "app/components/Footer";

interface ContentProps {
    products: Array<{ id: number, title: string, description: string }>
}

const Content = ({products}: ContentProps) => (
    <>
        <div className={"container mx-auto mt-4"}>
            <section className="items-center font-poppins dark:bg-gray-800">
                <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center ">
                            <div className="relative flex flex-col items-center">
                                <h3 className="text-3xl font-bold leading-tight dark:text-gray-300">
                                    Exercitii
                                </h3>
                                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-black">
                                    </div>
                                    <div className="flex-1 h-2 bg-red-500">
                                    </div>
                                    <div className="flex-1 h-2 bg-yellow-500">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mx-auto lg:max-w-3xl">
                        {products.map(({id, title, description}, index) => (
                            <Lesson id={id} title={title} key={index} description={description}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        <Footer/>
    </>
);
export default Content