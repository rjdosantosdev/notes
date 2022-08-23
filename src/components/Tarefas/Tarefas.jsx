import React from "react";

import styles from "../../App.module.css";
import stylesContainer from "./Tarefas.module.css";

function Tarefas({ note, setNote }) {
  return (
    <>
      <div className={styles.cardlist}>
        <div className={styles.title}>
          <input
            type="text"
            placeholder="Titulo"
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <div className={styles.color_red}></div>
            <div className={styles.color_yellow}></div>
            <div className={styles.color_green}></div>
          </div>
        </div>
        <div>
          <textarea
            style={{ margin: "10px", padding: "5" }}
            placeholder="Corpo de texto"
            name=""
            id=""
            rows="4"
            onChange={(e) => setTextBody(e.target.value)}
          ></textarea>
          <div className={styles.footer}>
            <input
              type="text"
              placeholder="tag"
              onChange={(e) => setTag(e.target.value)}
            />
            <button onClick={handleSave}>Salvar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tarefas;
