'use client';

import Logo from "./Logo";
import { FaPhoneAlt as IconPhone, FaHome as IconHome } from "react-icons/fa";
import Link from 'next/link'
import { useRouter } from "next/navigation";

export default function Header() {

const router = useRouter()

  return (
    <header style={styles.container}>
      <Logo />
      <nav>
        <ul style={styles.nav}>
          <li style={styles.item}>
            <Link href="/"><IconHome /> Home</Link>
          </li>
          <li style={styles.item}>Sobre</li>
          <li style={styles.item}>FAQ</li>
          <li style={styles.item}>
            <IconPhone /> Contato
          </li>
          <li style={styles.item}><Link href="/signup">Signup</Link></li>
          <li style={styles.item}><button type="button" onClick={() => router.push('/signup')}>Cadastre-se</button></li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  // CSS-in-JS
  container: {
    backgroundColor: "#cdaff0",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  nav: {
    display: "flex",
    listStyleType: "none",
    gap: 20,
  },
  item: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
};

/*button: {
    cursor: "pointer",
    backgroundColor: "#ffffff", // Fundo Branco
    color: "black",           // Texto na cor do cabeçalho
    border: "none",
    padding: "8px 16px",
    borderRadius: 6,
    fontWeight: "bold",
  },*/
