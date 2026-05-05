'use client'
import { useState } from "react"

export default function Cores(){

const [corAtual, setcorAtual] = useState("white")
const [modoClaro, setModoClaro] = useState(false)

    const cores = {
        vermelho: modoClaro ? "#ff4d4d" : "#8f0a0a",
        verde: modoClaro ? "#4dff4d" : "#013a01",
        azul: modoClaro ? "#4d4dff" : "#00054e"
    }

    return (
     <section style={styles.section}>

        <button style={styles.modo} onClick={() => setModoClaro(!modoClaro)}>
          {modoClaro ? "Escuro" : "Claro"}
            </button>

        <main style={{...styles.quadrado, backgroundColor: corAtual}}></main>
        <div style={styles.cores}>
        <button type="button" style={{...styles.button, backgroundColor: cores.vermelho}} onClick={() => setcorAtual(cores.vermelho)}></button>
        <button type="button" style={{...styles.button, backgroundColor: cores.verde}} onClick={() => setcorAtual(cores.verde)}></button>
        <button type="button" style={{...styles.button, backgroundColor: cores.azul}} onClick={() => setcorAtual(cores.azul)}></button>
        </div>
     </section>
    )
}

const styles = {
  section: {
    display: "flex", 
    alignItems: "center",
    flexDirection: "column",
    height: 310,
    width: 220,
    gap: 20,
    margin: 20,
    border: "2px solid black",
  },
  quadrado: {
    height: 150,
    width: 150,
    border: "2px solid black",
  },
  cores: {
    display: "flex", 
    flexDirection: "row",
    gap: "10px"
  },
  button: {
    height: 50, 
    width: 50,
    border: 2,
  },
  modo: {
    height: 30, 
    width: 50,
    marginTop: 15,
    borderRadius: 20
  }
};