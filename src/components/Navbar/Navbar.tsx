import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useFavorites } from "../../contexts/FavoritesContext";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>React Courses</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
            Favorites{" "}
            {favorites.length > 0 && (
              <span className={styles.badge}>{favorites.length}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
