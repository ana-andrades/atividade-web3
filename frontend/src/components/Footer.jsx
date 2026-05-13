'use client';

import Logo from "./Logo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useUserStore } from "@/stores/userStore";

export default function Footer() {

  const router = useRouter()
  const { users } = useUserStore()

  return (
    <footer style={styles.container}>
      <h3>Ana's Company</h3>
      <Link href="/signup" scroll={false}>Teste</Link>
      <button type="button" onClick={() => router.push('/signup?id=5', { scroll: false })}>Signup</button>
      <Logo />
      <p>Total de usuários: {users.length}</p>
    </footer>
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
};
