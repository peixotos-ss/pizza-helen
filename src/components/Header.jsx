import { useState } from "react";

export default function Header(){
    const [menuAtivo, setMenuAtivo] = useState(false);

    const toggleMenu = () => {
        setMenuAtivo(!menuAtivo);
    };

    return(
        <>
            <header className="header">
                <h1 className="logo">Pizza Fiep</h1>
                {/* QUando clicar, chama a função toggleMenu */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={`menu ${setMenuAtivo ? 'active' : ''}`}>
                    <a href="#hero" onClick={toggleMenu}>Home</a>
                    <a href="#cardapio" onClick={toggleMenu}>Cardapio</a>
                    <a href="#sobre" onClick={toggleMenu}>sobre</a>
                    <a href="#contato" onClick={toggleMenu}>contato</a>
                </nav>
            </header>
            <div className={`overlay-menu ${menuAtivo ? 'active': ''}`}
                onClick={toggleMenu}
            >
            </div>
        </>
    )
}