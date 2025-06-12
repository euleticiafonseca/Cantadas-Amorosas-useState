import { useState } from "react"

const CantadaAmorosa = () => {
    const [nome, setNome] = useState('');
    const cantadas = [
    "Você é Wi-Fi? Porque estou sentindo uma conexão. 🤍💫",
    "Você tem um mapa? Porque me perdi no brilho dos seus olhos. ✨💕",
    "Se beleza fosse crime, você estaria na cadeia perpétua. 😍✨",
    "Você é um dicionário? Porque você dá significado à minha vida. 🌆✨",
    "Você é um imã? Porque estou atraído por você. 💘",
    "Se você fosse um legume, seria um 'xuxu beleza'. 🤭",
    "Você é um estacionamento? Porque eu encontrei meu lugar ao seu lado. 💌✨",
    "Você é um artista? Porque você desenhou um sorriso no meu rosto. 😊❤",
    "Você é um anjo? Porque você caiu do céu. 🌈💞",
    "Você tem um nome ou posso te chamar de minha? 😏✨"
    ];

    //const formcantada = nome + ',' + cantadas[0];
    const [frase, setFrase] = useState ('Coloque o nome do seu crush e veja a mágica acontecer! ✨');
    const numFrase = Math.floor(Math.random() * 10);

    const verificaNome = () => {
        if (nome == ''){
            setFrase('Preencha o nome do seu crush')
        }else{
            setFrase(nome + ', ' + cantadas[numFrase])}

        }
    
    return(
        <div className="container">
            <h2 className="titulo">💘✨Cantadas amorosas para o seu crush✨💘</h2>
            <input type="text" placeholder="Nome do seu crush" value={nome} 
            onChange={(e) => setNome(e.target.value)}/>
            <button onClick={() => verificaNome()}>Gerar cantada </button>
            <p>{frase}</p>
        </div>
    )
}

export default CantadaAmorosa