import { useState } from "react";

function App() {
  const [mensagemOculta, setMensagemOculta] = useState("Olá mundo!")



  return (
    <div>
      <h1>{mensagemOculta}</h1>
      <button onClick={() => {
       setMensagemOculta("Olá, essa é uma mensagem oculta");
      }}
      >Mudar mensagem</button>
    </div>
  )

}

export default App;
