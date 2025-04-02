import Botao from "./componentes/Botao"
import Caixa from "./componentes/Caixa"
import Etiqueta from "./componentes/Etiqueta"

const App = ()=> {
  

  return (
    <>
    <h3>Aula Retomada Componentes</h3>
    
    <p> Texto padrão da Etiqueta</p>
    <Etiqueta texto="Texto enviado pelo App"/>
    <Etiqueta texto="Santos meu Amor"/> 
    <Etiqueta/>
    <Caixa/>
    <Botao/>
    </>
  )
}
export default App