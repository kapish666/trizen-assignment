export default function Button({className,text,icon,onClick}){
    return (
        <div>
        <button onClick={onClick} className={className}>
            <div className={icon?"flex items-center text-center":""}>
            {text}{icon}
            </div>
            </button>
        </div>
    )
}