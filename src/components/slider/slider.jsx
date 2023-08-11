import {useEffect, useState} from "react";
import "../../styles/slider.css"

export default function Slider({sliderData}) {
    console.log("uuu",sliderData[0])


    const [currentSlide, setCurrentSlide] = useState([]);
    useEffect(() => {
       setCurrentSlide(sliderData[0])
        console.log("currentSlide:",  currentSlide)

    }, []);

    const h6Styles = "border-2 rounded-md w-24";


    if (sliderData.length > 0) {
        return (
            <div className="relative w-full text-start" style={{backgroundImage: `url(https://cdn.playco.tv/file/image/movie/1963/cover.jpg)`}}>
                <h2 className="text-red font-bold text-3xl">{currentSlide?.title}</h2>
                <div className="flex">
                    <h6 className={h6Styles}>ژانر</h6>
                    <span>.</span>
                    <p>{currentSlide?.genre[0].more.name}</p>
                </div>
                <div className="flex">
                    <h6  className={h6Styles}>مدت زمان</h6>
                    <span>.</span>
                    <p></p>
                </div>
                <div className="flex">
                    <h6  className={h6Styles}>IMDB</h6>
                    <span>.</span>
                    <p>{currentSlide?.rate}</p>
                </div>
                <div className="flex">
                    <h6  className={h6Styles}>محصول</h6>
                    <span>.</span>
                    <p></p>
                </div>

                <p>{currentSlide?.desc}</p>

                <button className="bg-white text-gray hover:bg-red hover:text-white rounded w-40 h-10 text-lg">مشاهده فیلم</button>

                {/*<img src={currentSlide?.images[0].file}/>*/}




                {/*<button type="button"*/}
                {/*        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
                {/*        data-carousel-prev >*/}
                {/*<span*/}
                {/*    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
                {/*    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"*/}
                {/*         xmlns="http://www.w3.org/2000/svg"*/}
                {/*         fill="none" viewBox="0 0 6 10">*/}
                {/*        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                {/*              d="M5 1 1 5l4 4"/>*/}
                {/*    </svg>*/}
                {/*    <span className="sr-only">Previous</span>*/}
                {/*</span>*/}
                {/*</button>*/}
                {/*<button type="button"*/}
                {/*        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"*/}
                {/*        data-carousel-next>*/}
                {/*<span*/}
                {/*    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">*/}
                {/*    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"*/}
                {/*         xmlns="http://www.w3.org/2000/svg"*/}
                {/*         fill="none" viewBox="0 0 6 10">*/}
                {/*        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                {/*              d="m1 9 4-4-4-4"/>*/}
                {/*    </svg>*/}
                {/*    <span className="sr-only">Next</span>*/}
                {/*</span>*/}
                {/*</button>*/}
            </div>
        )
    }else return (<p>sorry</p>)
}
