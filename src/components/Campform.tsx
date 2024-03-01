interface CompformProps{
    label:string,
    state:any,
    funcState:any
}

export default function Campform(props:CompformProps){
    return(
        <div className="flex">
            <label className="w-[60px]">{props.label}</label>
            <input className="border p-1 w-full rounded-lg" value={props.state} onChange={(evt)=>props.funcState(evt.target.value)} />
        </div>
    )
}