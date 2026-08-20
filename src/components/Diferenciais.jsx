import tomateImg from '../assets/tomate.png';
import fogoImg from '../assets/fogo.png';
import queijoImg from '../assets/queijo.png';
import relampagoImg from '../assets/relampago.png';

const listaDiferenciais = [
    {
        id: 1,
        imagem: tomateImg,
        alt: "Tomate",
        texto: "Ingredientes Frescos"
    },
    {
        id: 2,
        imagem: fogoImg,
        alt: "Fogo",
        texto: "Forno a lenha"
    },
    {
        id: 3,
        imagem: queijoImg,
        alt: "Queijo",
        texto: "Mozzarela Artesanal"
    },
    {
        id: 4,
        imagem: relampagoImg,
        alt: "Relâmpago",
        texto: "Delivery Rápido"
    }
];

export default function Diferenciais(){
    return(
        <section className='diferenciais' id='diferenciais'>
            <h2>Nossos Diferenciais</h2>

            <div className='cards'>
                {listaDiferenciais.map((item)=>(
                    <div className="card" key={item.id}>
                        <img src={item.imagem} alt={item.alt} />
                        <p>{item.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}