import { Link } from 'react-router-dom';
export default function Home(){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/busca-cep"> Pesquisar CEP </Link></li>
                    <li><Link to="/foto-dog"> Fotos Cachorro </Link></li>
                </ul>
            </nav>
        </header>
    )
}
