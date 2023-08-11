
import MyCard from "./card";

export default function Upcomming({upcommingData}) {

    if (upcommingData?.length > 0){
        return (
            <div className="text-darkGray text-start">
                <hr
                    className="my-8 h-0.5 border-t-0 bg-gray opacity-100"/>
                <h2>به زودی</h2>

                <div className="flex h-60">
                    {
                        upcommingData.map(item => {
                            return (
                                <MyCard  shareLink={item.shareLink.replace("cdn.","")} image={item.images[0].file}/>
                            )
                        })
                    }
                </div>

            </div>
        )
    }
    else return <p>title</p>
}