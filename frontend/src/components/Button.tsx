export default function Button({className,text,icon}){
    return (
        <div>
        <button className={className}>
            <div className={icon?"flex items-center text-center":""}>
            {text}{icon}
            </div>
            </button>
        </div>
    )
}