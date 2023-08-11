
import MyCard from "./card";

export default function Latest({latestData}) {

    if (latestData?.length > 0){
        return (
            <div className="text-darkGray text-start">
                <hr
                    className="my-8 h-0.5 border-t-0 bg-gray opacity-100"/>
                <h2>تازه ترین ها</h2>

                <div className="flex h-60">
                    {
                        latestData.map(item => {
                            return (
                                <MyCard  shareLink={item.shareLink.replace("cdn.","")} name={item.title} image={item.images[0].file}/>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
    else return <p>title</p>
}