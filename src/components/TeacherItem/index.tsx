import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/14030606?s=460&u=7fbc4faec60f2bdd20a5c6f902d08b4abfc7bc26&v=4"
          alt="Michelon Souza"
        />
        <div>
          <strong>Michelon Souza</strong>
          <span>Front-end</span>
        </div>
      </header>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        suscipit culpa itaque tempora modi, laboriosam id voluptatibus
        <br />
        <br />
        molestiae debitis magnam perspiciatis? Atque odit quaerat qui officia at
        minima? Qui, ex?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
