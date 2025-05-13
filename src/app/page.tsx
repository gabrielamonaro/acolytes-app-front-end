import { Button } from "@mantine/core";
import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button component={Link} href="/login">
          Next link button
        </Button>
      </main>
    </div>
  );
}
