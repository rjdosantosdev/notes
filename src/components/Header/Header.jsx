import React from "react";

import styles from "./Header.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Notes</h1>
        <span>Dark mode</span>
      </div>
      <div className={styles.form}>
        <input type="text" placeholder="Pesquisar..." />
        <button>Filtrar</button>
      </div>
    </div>
  );
}

export default HomePage;
