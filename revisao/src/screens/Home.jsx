import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <header>
            <nav>
                <ul>
                    <Link to="/busca-cep"> Pesquisar CEP </Link>
                    <p></p>
                    <Link to="/foto-dog"> Fotos Cachorro </Link>
                </ul>
            </nav>
        </header>
    )
}
