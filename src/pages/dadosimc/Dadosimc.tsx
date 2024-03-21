import { useRouter} from "next/router"
import { useState, useEffect } from "react"

export default function Dadosimc() {

    const [peso, setPeso] = useState<any>("0.0")
    const [altura, setAlutra] = useState<any>("0.0")
    const [imc, setImc] = useState<any>("0.0")
    const [nome, setNome] = useState<any>("")
    const [data, setData] = useState<any>("")

    const router = useRouter()

    const { p_altura, p_peso, p_imc } = router.query
    // console.log(p_altura+"\n"+p_peso+"\n"+p_imc)

    useEffect(()=>{
        setPeso(p_peso)
        setAlutra(p_altura)
        setImc(p_imc)
        setData('2023-02-25')
    },[])

    return (
        <div>
            <div className="contaienr">
                <div>
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                </div>
                <div>
                    <label>Peso</label>
                    <input type="text" value={peso} readOnly/>
                </div>
                <div>
                    <label>Altura</label>
                    <input type="text" value={altura} readOnly/>
                </div>
                <div>
                    <label>IMC</label>
                    <input type="text" value={imc} readOnly/>
                </div>
                <div>
                    <label>Data</label>
                    <input type="text" value={data} readOnly/>
                </div>
                <div>
                    <button>Gravar</button>
                </div>
            </div>
            <div>
                GRID
            </div>
        </div>
    )
}