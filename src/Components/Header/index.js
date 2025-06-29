import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className='logo'>
                    <h1>Silvana Bertol</h1>
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
                            História
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header