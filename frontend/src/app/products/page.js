import CardProduct from "@/components/CardProduct";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CardUser from "@/components/CardProduct";

export default function Home() {
  return (
    <div>
      <Header />
      <section style={styles.section}>
        <Sidebar />
        <main>
          <h1>Produtos</h1>
          <p>Confira a lista de produtos:</p>
          <div style={styles.products}>
            <CardUser
              produto="https://images.tcdn.com.br/img/img_prod/696801/esmalte_impala_a_cor_da_sua_moda_3_cremoso_amor_profundo_11989_1_ffa7580ef6a777568a2855debb702de3.jpg"
              name="Amor Profundo"
              categoria="Impala"
              preco="R$ 2,50"
            />
            <CardUser
              produto="https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F17408385.webp&w=3840&q=40"
              name="Prata na Lata"
              categoria="Risque"
              preco="R$ 4,00"
            />
            <CardUser
              produto="https://lojacoty.vteximg.com.br/arquivos/ids/178929-1000-1000/8835-4-1.jpg?v=638700718545300000"
              name="Maçã do Amor"
              categoria="Risque"
              preco="R$ 3,50"
            />
            <CardUser
              produto="https://images.tcdn.com.br/img/img_prod/696801/esmalte_impala_a_cor_da_sua_moda_3_cremoso_amor_profundo_11989_1_ffa7580ef6a777568a2855debb702de3.jpg"
              name="Amor Profundo"
              categoria="Impala"
              preco="R$ 2,50"
            />
            <CardUser
              produto="https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F17408385.webp&w=3840&q=40"
              name="Prata na Lata"
              categoria="Risque"
              preco="R$ 4,00"
            />
            <CardUser
              produto="https://lojacoty.vteximg.com.br/arquivos/ids/178929-1000-1000/8835-4-1.jpg?v=638700718545300000"
              name="Maçã do Amor"
              categoria="Risque"
              preco="R$ 3,50"
            />
            <CardUser
              produto="https://images.tcdn.com.br/img/img_prod/696801/esmalte_impala_a_cor_da_sua_moda_3_cremoso_amor_profundo_11989_1_ffa7580ef6a777568a2855debb702de3.jpg"
              name="Amor Profundo"
              categoria="Impala"
              preco="R$ 2,50"
            />
            <CardUser
              produto="https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F17408385.webp&w=3840&q=40"
              name="Prata na Lata"
              categoria="Risque"
              preco="R$ 4,00"
            />
            <CardUser
              produto="https://lojacoty.vteximg.com.br/arquivos/ids/178929-1000-1000/8835-4-1.jpg?v=638700718545300000"
              name="Maçã do Amor"
              categoria="Risque"
              preco="R$ 3,50"
            />
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}



const styles = {
  section: {
    display: "flex",
    gap: 20,
    padding: 20,
    backgroundColor:"white",
    color: "black"
  },
  products: {
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    marginTop: 20,
    justifyContent: "flex-start",
  }
};
