import { Grid } from "@mantine/core";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Acolytes App</h1>
        <Grid />
      </main>
    </div>
  );
}
