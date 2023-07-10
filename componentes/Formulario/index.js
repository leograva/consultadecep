import CampoTexto from '../CampoTexto'
import Botao from '../Botao'
import Mensagem from '../Mensagem'
import { useState } from 'react'

const Formulario = () => {

    const [cep, setCep] = useState('')
    const [mensagem, setMensagem] = useState('')

    const aoNovoCepConsultado = (cep) => {
        setCep(cep)
        setMensagem(cep)
      }

    const aoSalvar = (evento) => { 
        evento.preventDefault()
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data.logradouro);
           
        });
    }

    return (<form onSubmit={aoSalvar}>
        
        <CampoTexto valor={cep} aoCepConsultado={mensagem => aoNovoCepConsultado(mensagem)} aoAlterado={valor => setCep(valor)} obrigatorio={true} label="Cep" placeholder="Digite o CEP" />
        <Botao valor='Pesquisar CEP' />
        <Mensagem valor={mensagem} />
    </form>)
}

export default Formulario