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
                {/* Quando clicar, chama a função toggleMenu */}
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {/* se menuAtivo for true, adiciona a classe 'active' para ele aparecer */}
                <nav className={`menu ${menuAtivo ? 'active' : ''}`}> {/*  tirei o set*/}
                    <a href="#hero" onClick={toggleMenu}>Home</a>
                    <a href="#cardapio" onClick={toggleMenu}>Cardápio</a>
                    <a href="#sobre" onClick={toggleMenu}>Sobre</a>
                    <a href="#contato" onClick={toggleMenu}>Contato</a>
                </nav>
            </header>
            {/* Overlay escuro que fecha o menu ao clicar fora */}
            <div className={`overlay-menu ${menuAtivo ? 'active': ''}`}
                onClick={toggleMenu}
            >
            </div>
        </>
    )
}