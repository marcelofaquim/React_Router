import cardapio from "data/cardapio.json";

import styles from "./Inicio.module.scss";
import Menu from "Components/Menu";

export default function Inicio() { 
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() =>0.5 - Math.random()).
    splice(0,3); //Itens que eu quero que seja recomendando (estou querendo os 3 primeiro)

  return(
    <section>
     

      <h3  className={styles.titulo}>
            Recomenadações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item =>(
          <div key={item.id} className={styles.recomendado}>

            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>

            <button className={styles.recomendado__botao}>
                    Ver mais
            </button>

          </div>
        ))}

      </div>
    </section>
  );
}