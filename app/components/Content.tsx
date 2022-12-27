import Lesson from "app/components/Lesson";

const Content = () => {

    return (
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
                        {[
                            {id: 1, title: "Title 1"},
                            {id: 2, title: "Title 2"},
                            {id: 3, title: "Title 3"},
                            {id: 4, title: "Title 4"},
                            {id: 5, title: "Title 5"},
                            {id: 6, title: "Title 6"},
                            {id: 7, title: "Title 7"},
                            {id: 8, title: "Title 8", inProgress: true},
                            {id: 9, title: "Title 9"},
                            {id: 10, title: "Title 10"},
                        ].map(({id, title}, index) => (
                            <Lesson id={id} title={title} key={index}/>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Content;