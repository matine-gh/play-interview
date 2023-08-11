import SearchInput from "./searchInput";

export default function Header() {

    // const menu = [
    //     {key:"11", value: "فیلم", route:"https://playco.tv/movies"},
    //     {key:"12", value: "کودک", route:"https://playco.tv/kids"},
    // ]


    return (
        <div className="w-full flex justify-between bg-black top-0">
            <div className="flex items-center">
                <img className="w-32 h-fit" src={"/static/headerLogo.png"}/>
                <a key={11} className="text-sm hover:text-red" href={"https://playco.tv/movies"}>فیلم</a>
                <a key={12} className="text-sm hover:text-red" href={"https://playco.tv/kids"}>کودک</a>
                {/*{*/}
                {/*    menu.map(item => {*/}
                {/*        return (*/}
                {/*            <a key={item.key} className="text-sm hover:text-red" href={item.route}>{item.name}</a>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}

            </div>
            <div className="flex">
                <SearchInput />
                <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </div>
        </div>
    )
}