import { useRouter } from "next/router"

export default function Dadosimc(){

    const router=useRouter()

    const {p_altura, p_peso, p_imc} = router.query

    return(
        <div>
            <div>
                <label>Nome</label>
                
            </div>
        </div>
    )
}