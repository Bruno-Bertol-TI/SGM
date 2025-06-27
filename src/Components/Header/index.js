import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <img src='/img/image2.png' alt='Logotipo SGM'/>
                </div>
                <ul>
                    <li>
                        <a>
                            Serviços
                        </a>
                    </li>
                    <li>
                        <a>
                            Solicitar Orçamentos
                        </a>
                    </li>
                    <li>
                        <a>
                            Sobre Nós
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header