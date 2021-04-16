import { Header } from '../../components/Header';
import { useRef, useState } from 'react';
import Checkbox from "@material-ui/core/Checkbox";

import styles from './styles.module.scss';
import { Footer } from '../../components/Footer';

export function Home() {
  const [bold, setCheckedBold] = useState(false);
  const [underline, setCheckedUnderline] = useState(false);
  const [italic, setCheckedItalic] = useState(false);
 
  const fooBarRef = useRef(false);

  const [size, setSize] = useState(16);

  const handleChangeNegrito = (event) => {
    setCheckedBold(event.target.checked);
    const fooBarNode = fooBarRef.current

    fooBarNode.classList.toggle(styles.bold);    
  };

  const handleChangeSobrescrito = (event) => {
    setCheckedUnderline(event.target.checked);
    const fooBarNode = fooBarRef.current
    fooBarNode.classList.toggle(styles.underline);  
  };

  const handleChangeItalico = (event) => {
    setCheckedItalic(event.target.checked);
    const fooBarNode = fooBarRef.current

    fooBarNode.classList.toggle(styles.italic); 
  };

  const handleAddSize = () => {
    setSize(size + 1)
  };

  const handleRemoveSize = () => {
    setSize(size - 1)
  };
  
  return (
   <>
    <Header />

    <main className={styles.mainContainer}>
      <section className={styles.sectionCharacteristics}>
        <h2>Características:</h2>
        <label>
          <Checkbox
            className={styles.color}
            checked={bold}
            onChange={handleChangeNegrito}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          Negrito
       </label>

       <label>
       <Checkbox
            className={styles.color}
            checked={underline}
            onChange={handleChangeSobrescrito}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          Sobrescrito
       </label>

       <label>
          <Checkbox
            className={styles.color}
            checked={italic}
            onChange={handleChangeItalico}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
          Itálico
       </label>
      </section>

      <section className={styles.sectionSize}>
        <h2>Tamanho da fonte:</h2>
        <button
        onClick={handleRemoveSize}
        disabled={size <= 12 ? true : false}
        >
          -
        </button>

        <button
        onClick={handleAddSize}
        disabled={size >= 50 ? true : false}

        >
          +
        </button>

        {size}px
      </section>

      <section className={styles.sectionPrevia}>
        <h2>Prévia:</h2>

        <p 
        style={{fontSize: size}}
        ref={fooBarRef}
        id="previa"
        >
          Use máscara
        </p>
      </section>
    </main>
    
    <Footer />
   </>

  );
}