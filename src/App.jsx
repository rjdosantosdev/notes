import React from "react";

import styles from "./App.module.css";

// COMPONENTES
import Header from "./components/Header/Header";
import Tarefas from "./components/Tarefas/Tarefas";

function App() {
  // gerando id para cada lista

  // recebe os objetos
  const [note, setNote] = React.useState([
    {
      id: 1,
      title: "item 1",
      textBody: "Lorem ipsum dolor sit amet.",
      tag: "tag1",
    },
    {
      id: 2,
      title: "item 2",
      textBody: "Lorem ipsum dolor sit amet.",
      tag: "tag1",
    },
    {
      id: 3,
      title: "item 3",
      textBody: "Lorem ipsum dolor sit amet.",
      tag: "tag1",
    },
  ]);

  const [title, setTitle] = React.useState("");
  const [textBody, setTextBody] = React.useState("");
  const [tag, setTag] = React.useState("");

  function handleSave() {
    setNote([
      ...note,
      {
        id: 12,
        title: title,
        textBody: textBody,
        tag: tag,
      },
    ]);
  }

  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
    </>
  );
}

export default App;
