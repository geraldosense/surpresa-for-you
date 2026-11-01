import { useState } from 'react'
import Folder from './components/Folder'
import Lanyard from './components/Lanyard'
import foto1 from './assets/fotos/foto1.png'
import foto2 from './assets/fotos/foto2.png'
import foto3 from './assets/fotos/foto3.png'
import './App.css'

function Memory({ image, alt, title, note }) {
  return (
    <article className="memory">
      <div className="memory-photo">
        <img src={image} alt={alt} draggable={false} />
      </div>
      <div className="memory-copy">
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
    </article>
  )
}

function IntroScreen({ onOpen }) {
  return (
    <section className="screen screen-intro">
      <div className="glow" aria-hidden="true" />
      <header className="intro intro-lanyard">
        <p className="brand">Elvira</p>
        <h1>Um crachá só teu</h1>
        <p className="lead">Puxa, balança… e quando quiseres, abre o que guardei.</p>
      </header>

      <div className="lanyard-wrap">
        <Lanyard
          frontImage={foto1}
          backImage={foto2}
          cardColor="#fff7f2"
          strapColor="#8f3d57"
          metal="gold"
          finish="glossy"
          orientation="portrait"
          imageFit="cover"
          size={0.5}
          strapLength={0.48}
          gravity={1}
          breeze={0.15}
          intro
          interactive
        />
      </div>

      <div className="surprise">
        <span className="surprise-hint">Há algo escondido aqui</span>
        <div className="surprise-orbit" aria-hidden="true">
          <span className="spark spark-a" />
          <span className="spark spark-b" />
          <span className="spark spark-c" />
          <span className="spark spark-d" />
        </div>
        <button type="button" className="open-btn" onClick={onOpen}>
          <span className="open-btn-shine" aria-hidden="true" />
          <span className="open-btn-seal" aria-hidden="true" />
          <span className="open-btn-label">Abrir a surpresa</span>
        </button>
        <span className="surprise-sub">Toca para descobrir</span>
      </div>
    </section>
  )
}

function GiftScreen() {
  return (
    <section className="screen screen-gift">
      <div className="glow" aria-hidden="true" />
      <header className="intro">
        <p className="brand">Elvira</p>
        <h1>Feliz aniversário, com atraso e com o coração</h1>
        <p className="lead">Abre a pasta. Guardei três pedacinhos de ti.</p>
      </header>

      <div className="folder-wrap">
        <Folder
          label="Pra você"
          color="#c45c7a"
          paperColor="#fff7f2"
          mode="flap"
          variant="solid"
          theme="dark"
          size={1.2}
          layout="spread"
          openOn="click"
          draggable={false}
          zoomOnClick
        >
          <Memory
            image={foto1}
            alt="Elvira sorrindo junto à janela"
            title="O teu brilho"
            note="Mesmo um dia depois, continuo a celebrar você. O teu sorriso ilumina qualquer canto e eu fico grato por existir no teu mundo."
          />
          <Memory
            image={foto2}
            alt="Elvira de teal contra parede rosa"
            title="A tua presença"
            note="Tu tens uma forma quieta e forte de ocupar o espaço. Ontem foi o teu dia, hoje ainda quero dizer: és rara, és linda, és inesquecível."
          />
          <Memory
            image={foto3}
            alt="Elvira com filtro divertido"
            title="A tua alegria"
            note="Adoro o teu lado leve, o brincalhão, o que faz a vida saber a mais. Parabéns, Elvira, que este novo ciclo te abrace com doçura."
          />
        </Folder>
      </div>
    </section>
  )
}

function App() {
  const [opened, setOpened] = useState(false)

  return (
    <main className={`stage ${opened ? 'is-gift' : 'is-intro'}`}>
      {!opened ? <IntroScreen onOpen={() => setOpened(true)} /> : <GiftScreen />}
    </main>
  )
}

export default App
