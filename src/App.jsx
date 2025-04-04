import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import swordSet from "./assets/SwordSet 400.gif";
import gifBackground from "./assets/imagen1.gif";
import key12 from "/src/assets/Key 12 - GOLD - frame0000.gif"
import largetonic from "/src/assets/Small Vial.gif"
import gem from "/src/assets/GEM 8 - PURPLE - 0000.gif"
import viejo from "/src/assets/2d-2d-GameDev-ru--unscreen.gif"
export default function App() {
  const [menu, setMenu] = useState("main");
  const [difficulty, setDifficulty] = useState("Normal");
  const [volume, setVolume] = useState(50);
  const [startGame, setStartGame] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  // Inventario
  const inventory = [
    {
      id: 1,
      name: "Amuleto Oscuro",
      description: "Un amuleto con inscripciones arcanas.",
      type: "Artefacto",
      quantity: 1,
      image: gem
    },
    {
      id: 2,
      name: "Poción Roja",
      description: "Restaura tu salud. Brilla tenuemente en la oscuridad.",
      type: "Poción",
      quantity: 3,
      image: largetonic
    },
    {
      id: 3,
      name: "Llave de la Cripta",
      description: "Un objeto antiguo que abre el destino.",
      type: "Herramienta",
      quantity: 1,
      image: key12
    },
    {
      id: 4,
      name: "Daga Envenenada",
      description: "La hoja aún gotea veneno oscuro.",
      type: "Arma",
      quantity: 1,
      image: swordSet
    }
  ];

  // Misiones
  const missions = [
    { id: 1, text: "Explora las ruinas antiguas.", completed: false },
    { id: 2, text: "Encuentra la llave de la ciudad perdida.", completed: false },
    { id: 3, text: "Derrota al guardián de la caverna.", completed: true },
    { id: 4, text: "Descifra el pergamino místico.", completed: false }
  ];

  // Partidas guardadas (simulado)
  const savedGames = [
    { id: 1, name: "Partida del Amanecer", date: "2025-03-13", time: "11:18 PM" },
    { id: 2, name: "La Última Cruzada", date: "2025-03-12", time: "09:45 PM" }
  ];

  // Transiciones: solo fade (sin movimiento horizontal)
  const transitionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  // Función de inicio de partida
  const handleStartGame = () => {
    setStartGame(true);
    setTimeout(() => setMenu("gameplay"), 2500);
  };

  // Mensajes según dificultad
  const getDifficultyMessage = (level) => {
    switch (level) {
      case "Fácil":
        return "Para un ser humano débil, acorde a tu eficiencia.";
      case "Normal":
        return "El equilibrio entre la gloria y la perdición. Sopesa bien cada batalla.";
      case "Difícil":
        return "El dolor es la única verdad. Solo los condenados caminan este sendero.";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        fontFamily: "'Cinzel', serif",
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        color: "#fff"
      }}
    >
      {/* Fondo con GIF pixel art */}
      <img
        src={gifBackground}
        alt="Fondo Medieval"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          imageRendering: "pixelated",
          zIndex: 0
        }}
      />

      {/* Título a la izquierda */}
      {menu === "main" && !startGame && (
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            zIndex: 2,
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
          }}
        >
          <h1 style={{ fontSize: "3rem", margin: 0 }}>BLACKVEIL</h1>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Menú Principal: Posicionado a la derecha (como antes) */}
        {menu === "main" && !startGame && (
          <motion.ul
            key="main"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              right: "5%",
              transform: "translateY(-50%)",
              listStyle: "none",
              margin: 0,
              padding: 0,
              zIndex: 2,
              textAlign: "right"
            }}
          >
            <li
              style={{
                margin: "20px 0",
                fontSize: "1.6rem",
                cursor: "pointer",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}
              onClick={handleStartGame}
            >
              Nueva Partida
            </li>
            <li
              style={{
                margin: "20px 0",
                fontSize: "1.6rem",
                cursor: "pointer",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}
              onClick={() => setMenu("load")}
            >
              Cargar Partida
            </li>
            <li
              style={{
                margin: "20px 0",
                fontSize: "1.6rem",
                cursor: "pointer",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}
              onClick={() => setMenu("options")}
            >
              Opciones
            </li>
            <li
              style={{
                margin: "20px 0",
                fontSize: "1.6rem",
                cursor: "pointer",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}
              onClick={() => setMenu("inventory")}
            >
              Inventario
            </li>
            <li
              style={{
                margin: "20px 0",
                fontSize: "1.6rem",
                cursor: "pointer",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}
              onClick={() => setMenu("missions")}
            >
              Misiones
            </li>
            <li
              style={{
                margin: "20px 0",
                fontSize: "1.6rem",
                cursor: "pointer",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)"
              }}
              onClick={() => setMenu("lore")}
            >
              Historia
            </li>
            <li
              style={{
                margin: "20px 0",
                fontSize: "1.6rem",
                cursor: "pointer",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                color: "#e60000"
              }}
              onClick={() => setMenu("exit")}
            >
              Salir
            </li>
          </motion.ul>
        )}

        {/* Submenús: Ahora se muestran centrados (en la mitad) */}
        {menu === "load" && (
          <motion.div
            key="load"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              color: "#fff",
              textAlign: "center",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px"
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Cargar Partida</h2>
            <p>Número de partidas guardadas: {savedGames.length}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "20px",
                textAlign: "left"
              }}
            >
              {savedGames.map((game) => (
                <div
                  key={game.id}
                  style={{
                    border: "2px solid #fff",
                    padding: "10px",
                    borderRadius: "5px"
                  }}
                >
                  <h3>{game.name}</h3>
                  <p>
                    <strong>Fecha:</strong> {game.date}
                  </p>
                  <p>
                    <strong>Hora:</strong> {game.time}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      padding: "8px 16px",
                      backgroundColor: "#666",
                      border: "2px solid #fff",
                      cursor: "pointer"
                    }}
                    onClick={() => alert(`Cargando ${game.name}`)}
                  >
                    Cargar
                  </motion.button>
                </div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenu("main")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#666",
                border: "2px solid #fff",
                cursor: "pointer"
              }}
            >
              Volver
            </motion.button>
          </motion.div>
        )}

        {menu === "options" && (
          <motion.div
            key="options"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              color: "#fff",
              textAlign: "center",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px"
            }}
          >
            <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Opciones</h2>
            <h3>Dificultad:</h3>
            <div style={{ marginBottom: "10px", textAlign: "center" }}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDifficulty("Fácil")}
                style={{
                  margin: "5px",
                  padding: "10px",
                  backgroundColor: difficulty === "Fácil" ? "red" : "#444",
                  color: "#fff",
                  border: "2px solid #fff",
                  cursor: "pointer"
                }}
              >
                Fácil
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDifficulty("Normal")}
                style={{
                  margin: "5px",
                  padding: "10px",
                  backgroundColor: difficulty === "Normal" ? "orange" : "#444",
                  color: "#fff",
                  border: "2px solid #fff",
                  cursor: "pointer"
                }}
              >
                Normal
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDifficulty("Difícil")}
                style={{
                  margin: "5px",
                  padding: "10px",
                  backgroundColor: difficulty === "Difícil" ? "purple" : "#444",
                  color: "#fff",
                  border: "2px solid #fff",
                  cursor: "pointer"
                }}
              >
                Difícil
              </motion.button>
            </div>
            <p style={{ fontStyle: "italic", marginTop: "10px" }}>
              {getDifficultyMessage(difficulty)}
            </p>
            <h3>Volumen:</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              style={{ width: "80%", margin: "10px 0" }}
            />
            <p style={{ margin: "5px 0" }}>
              <input
                type="checkbox"
                id="muteCheck"
                checked={isMuted}
                onChange={() => setIsMuted(!isMuted)}
              />
              <label htmlFor="muteCheck" style={{ marginLeft: "5px" }}>
                Mute
              </label>
            </p>
            <h3>Resolución de Pantalla:</h3>
            <select
              style={{
                padding: "5px",
                backgroundColor: "#333",
                color: "#fff",
                border: "2px solid #fff",
                margin: "10px 0",
                display: "block",
                width: "100%"
              }}
            >
              <option>1920x1080</option>
              <option>1600x900</option>
              <option>1366x768</option>
              <option>1280x720</option>
            </select>
            <h3>Calidad Gráfica:</h3>
            <select
              style={{
                padding: "5px",
                backgroundColor: "#333",
                color: "#fff",
                border: "2px solid #fff",
                margin: "10px 0",
                display: "block",
                width: "100%"
              }}
            >
              <option>Baja</option>
              <option>Media</option>
              <option>Alta</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenu("main")}
              style={{
                padding: "12px",
                backgroundColor: "#666",
                color: "#fff",
                border: "2px solid #fff",
                marginTop: "20px",
                cursor: "pointer"
              }}
            >
              Guardar y Volver
            </motion.button>
          </motion.div>
        )}

        {startGame && (
          <motion.div
            key="gameplay"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "24px",
              padding: "20px",
              color: "#fff",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px",
              textAlign: "center"
            }}
          >
            <p>El mundo se sumerge en sombras...</p>
            <motion.p
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              "Tu destino está a punto de ser forjado..."
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setStartGame(false)}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#666",
                color: "#fff",
                border: "2px solid #fff",
                cursor: "pointer"
              }}
            >
              Regresar al Menú
            </motion.button>
          </motion.div>
        )}

        {menu === "inventory" && (
          <motion.div
            key="inventory"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              color: "#fff",
              textAlign: "center",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Inventario</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                justifyContent: "center"
              }}
            >
              {inventory.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    cursor: "pointer",
                    padding: "10px",
                    border: "2px solid #fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100px"
                  }}
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "64px",
                      height: "64px",
                      marginBottom: "5px",
                      imageRendering: "pixelated"
                    }}
                  />
                  <span>{item.name}</span>
                </motion.div>
              ))}
            </div>
            {selectedItem && (
              <motion.div
                key={selectedItem.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={transitionVariants}
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  border: "2px solid #fff",
                  display: "inline-block",
                  textAlign: "left"
                }}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  style={{
                    width: "96px",
                    height: "96px",
                    imageRendering: "pixelated"
                  }}
                />
                <h3>{selectedItem.name}</h3>
                <p>
                  <strong>Tipo:</strong> {selectedItem.type}
                </p>
                <p>
                  <strong>Cantidad:</strong> {selectedItem.quantity}
                </p>
                <p>{selectedItem.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedItem(null)}
                  style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    backgroundColor: "#666",
                    color: "#fff",
                    border: "2px solid #fff",
                    cursor: "pointer"
                  }}
                >
                  Cerrar
                </motion.button>
              </motion.div>
            )}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenu("main")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#666",
                color: "#fff",
                border: "2px solid #fff",
                cursor: "pointer"
              }}
            >
              Volver
            </motion.button>
          </motion.div>
        )}

        {menu === "missions" && (
          <motion.div
            key="missions"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              color: "#fff",
              textAlign: "center",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px",
              maxWidth: "600px",
              overflowY: "auto",
              maxHeight: "80vh"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Misiones</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                }}
              ></div>
            {missions.map((mission) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  padding: "15px",
                  border: mission.completed ? "2px solid green" : "2px solid red",
                  borderRadius: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  textAlign: "left"
                }}
              >
                <h3 style={{ margin: "0 0 10px 0" }}>
                  {mission.text}{" "}
                  {mission.completed && (
                    <span style={{ color: "green", fontSize: "0.9rem" }}>
                      (Completada)
                    </span>
                  )}
                </h3>
                <p style={{ margin: "5px 0", fontStyle: "italic" }}>
                  Descripción: Explora las ruinas y encuentra el artefacto perdido.
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Recompensas:</strong> 500 XP, 1 Llave Dorada
                </p>
                {!mission.completed && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => alert(`Misión "${mission.text}" completada!`)}
                    style={{
                      marginTop: "10px",
                      padding: "8px 16px",
                      backgroundColor: "#666",
                      color: "#fff",
                      border: "2px solid #fff",
                      cursor: "pointer"
                    }}
                  >
                    Marcar como Completada
                  </motion.button>
                )}
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenu("main")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#666",
                color: "#fff",
                border: "2px solid #fff",
                cursor: "pointer"
              }}
            >
              Volver
            </motion.button>
          </motion.div>
        )}

        {menu === "lore" && (
          <motion.div
            key="lore"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              color: "#fff",
              textAlign: "center",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>Historia</h2>
            <motion.p
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              style={{ fontStyle: "italic", marginBottom: "20px" }}
            >
              "Hace siglos, la oscuridad consumió este mundo..."
            </motion.p>
            <p style={{ marginBottom: "20px" }}>
            En un tiempo olvidado, los reinos vivían en armonía bajo la luz de los cristales sagrados. 
            Pero la codicia de los hombres desató una guerra que fragmentó el equilibrio. 
            Ahora, las sombras gobiernan, y solo los valientes pueden restaurar la esperanza.
            </p> 
            <img
              src= {viejo}
              alt="Escena de la historia"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "10px",
                marginBottom: "20px",
                imageRendering: "pixelated"
              }}
            />
            <p>
            Se dice que un héroe surgirá, guiado por los vestigios de los cristales, para enfrentar 
            al Guardián de las Sombras y devolver la luz al mundo. ¿Serás tú ese héroe?
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenu("main")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#666",
                color: "#fff",
                border: "2px solid #fff",
                cursor: "pointer"
              }}
            >
              Volver
            </motion.button>
          </motion.div>
        )}

        {menu === "exit" && (
          <motion.div
            key="exit"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={transitionVariants}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              color: "#fff",
              textAlign: "center",
              zIndex: 2,
              backgroundColor: "rgba(0,0,0,0.5)",
              borderRadius: "10px"
            }}
          >
            <h2 style={{ marginBottom: "20px" }}>¿Seguro que quieres salir?</h2>
            <motion.p
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              "Una vez que te vayas... no habrá retorno."
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenu("main")}
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#666",
                color: "#fff",
                border: "2px solid #fff",
                cursor: "pointer"
              }}
            >
              Cancelar
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Firma PHANTOM GAMES */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          color: "#777",
          fontSize: "12px",
          zIndex: 2
        }}
      >
        © 2024 PHANTOM GAMES
      </div>
    </div>
  );
}
