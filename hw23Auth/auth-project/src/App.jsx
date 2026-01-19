import styles from "./App.module.css";
import { NavLink, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Register from "./pages/register/index";
import Profile from "./pages/profile/index";

function App() {
  return (
    <div>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          to="/profile"
        >
          Profile
        </NavLink>
      </nav>
      <div className={styles.container}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </div>
  );
}

const Home = () => (
  <div className={styles.home}>
    <h1>Home Page</h1>
  </div>
);

export default App;
