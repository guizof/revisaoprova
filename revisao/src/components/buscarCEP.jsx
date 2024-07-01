import { useState } from "react"

export default function BuscarCep(){
    const [cep, setCep] = useState('') //usar no input
    const [endereco, setEndereco] = useState(null) //usar para pegar o endereço pela api

    const fetchData = async () => {
        try{
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`) //crase
            const data = await response.json()
            setEndereco(data)
        } catch (error){
            console.error(error)
        }
    }
    return(
        <div className="content">
            <h1>Buscar endereço por CEP</h1>
            <input
                type="text"
                value={cep}
                placeholder="Digite Aqui"
                onChange={(e) => setCep(e.target.value)}
            ></input>

            <button onClick={fetchData}>Buscar</button>

            {endereco && (
                <div className="endereco">    
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade}</p>
                    <p>UF: {endereco.uf}</p>
                </div>

            )}
        </div>


    )
}