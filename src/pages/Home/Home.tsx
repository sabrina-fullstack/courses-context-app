// src/pages/Home/Home.tsx
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
export default function Home() {
  return (
    <main className={styles.home}>
      <div className={styles.hero}>
        <h1>React Courses</h1>
        <p>Bienvenue sur React Courses !</p>
        <NavLink className={styles.button} to="/courses">
          Voir les cours
        </NavLink>
      </div>
    </main>
  );
}
