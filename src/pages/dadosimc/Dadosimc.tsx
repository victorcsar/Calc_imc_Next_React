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
            <div>
                <div className="campoForm">
                    <label>Nome</label>
                    <input className="inputDados" type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                </div>
                <div className="campoForm">
                    <label>Peso</label>
                    <input className="inputDados" type="text" value={peso} readOnly/>
                </div>
                <div className="campoForm">
                    <label>Altura</label>
                    <input className="inputDados" type="text" value={altura} readOnly/>
                </div>
                <div className="campoForm">
                    <label>IMC</label>
                    <input className="inputDados" type="text" value={imc} readOnly/>
                </div>
                <div className="campoForm">
                    <label>Data</label>
                    <input className="inputDados" type="text" value={data} readOnly/>
                </div>
                <div className="campoForm">
                    <button className="botaoDados">Gravar</button>
                </div>
            </div>
            <div className="grid">
                <div className="gridLinhaTitulos">
                    <div className="gridTitulos">Nome</div>
                    <div className="gridTitulos">Peso</div>
                    <div className="gridTitulos">Altura</div>
                    <div className="gridTitulos">IMC</div>
                    <div className="gridTitulos">Data</div>
                </div>
                <div className="gridLinhaDados">
                    <div className="gridLinhas">
                        <div className="gridLinha">Nome</div>
                        <div className="gridLinha">Peso</div>
                        <div className="gridLinha">Altura</div>
                        <div className="gridLinha">IMC</div>
                        <div className="gridLinha">Data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}