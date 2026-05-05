

export default function CardUser({ produto, name, categoria, preco }){

    // const props = {
    //      avatar: "https://github.com/renancavichi.png",
    //      name: "Renan Cavichi",
    //      email: "renancavichi@gmail.com"
    // }

    // const { avatar, name, email } = props


    return (
        <div style={styles.container}>
            <img 
                src={produto} 
                alt={name} 
                style={styles.image} 
            />
            <div>
                <h4 style={styles.name}>{name}</h4>
                <h5 style={styles.categoria}>{categoria}</h5>
                <h5 style={styles.preco}>{preco}</h5>
            </div>
        </div>
    )
}
       
const styles = {
    container: {
        display: "flex", 
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 8,
        width: 180
    },
    image: {
        width: 90,
        height: 90,
        objectFit: "cover"    
    },

    name: {
        textAlign: "center"      
    },

    preco: {
        textAlign: "center",
        marginTop: 10 ,     
        fontWeight: "normal"
    },

    categoria: {
        textAlign: "center",
        fontWeight: "normal"      
    },
  
}