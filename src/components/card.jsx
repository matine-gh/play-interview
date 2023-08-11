export default function MyCard({image, name, description, shareLink}) {
     return (
         <a className='w-40 h-full m-2 text-start overflow-hidden' href={shareLink}>
             {
                 image && <img className="h-1/2 rounded-xl" src={image}/>
             }
             {
                 name && <h3 className="text-sm font-bold">{name}</h3>
             }
             {
                 description && <p className="text-xs">{description}</p>
             }
         </a>
     )
}