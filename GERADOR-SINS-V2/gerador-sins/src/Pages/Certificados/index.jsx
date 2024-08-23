import { Certificado } from "../../Components/Certificado"
import {v4 as uuidv4} from 'uuid'
import utils from "../../JavaScript/utils"
import { useEffect, useState } from "react"


export const Certificados =  () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        (async function() {
            const res = await utils.buscarDados();
            lista.length == 0 ? setLista(res) : ""
            console.log(lista)
        })()
    },[])

    return(

        <main>
            <h3 className="no-print">CERTIFICADOS</h3>
            <div style={{display: "flex", gap: "10px", maxWidth: "1200px", flexWrap: "wrap", justifyContent: "center", backgroundColor: "none"}}>
            {
                lista.map(dado => <Certificado 
                    key={uuidv4()}
                    instituicao={dado.instituicao} 
                    nome={dado.nome}
                    matricula={dado.matricula}
                    curso={dado.curso}
                    data_inicio={dado.data_inicio}
                    data_final={dado.data_final}
                    mes={dado.mes}
                    num_mes={dado.num_mes < 10 ? `0${dado.num_mes}` : dado.num_mes}
                    ano={dado.ano}
                    carga_horaria={dado.carga_horaria}
                    local={dado.local}
                    cargo_responsavel={dado.cargo_responsavel}
                    graduacao_responsavel={dado.graduacao_responsavel}
                    nome_responsavel={dado.nome_responsavel}
                />)
            } 
            </div>          
            <button className="no-print" onClick={()=>{window.print()}}>imprimir</button>
        </main>
    )
}