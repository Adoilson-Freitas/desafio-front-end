import { useState } from 'react';
import styles from './styles.module.scss';

export function Footer() {
  const [text, setText] = useState("");

  const handleChangeText = () => {
    setText("Enviando configuração...")

    setTimeout(
      () => setText("Configuração enviada!"), 
      3000
    );

    return 
  };
  return (
    <footer className={styles.footerContainer}>
    <span>{text}</span>
    <button 
     type="submit"
     onClick={handleChangeText}
    >
      Enviar
    </button>
  </footer>

  );
}