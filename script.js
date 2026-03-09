document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".minecraft-btn");

  // Precargar audios para que suenen sin retraso
  // Nota: Estas rutas asumen que descargarás los sonidos como 'hover.mp3' y 'click.mp3'
  const hoverSound = new Audio("hover.mp3");
  const clickSound = new Audio("click.mp3");
  const oofSound = new Audio("oof.ogg"); // Cambiado a .ogg porque así se llama tu archivo

  // Reducir un poco el volumen para que no aturda
  hoverSound.volume = 0.03; /* Sonido hover extra sutil */
  clickSound.volume = 0.05; /* Sonido click extra sutil */
  oofSound.volume = 0.3; // Volumen para el sonido Oof

  // Lógica del Modal Personalizado
  const mcModal = document.getElementById("minecraft-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const btnModalOk = document.getElementById("btn-modal-ok");

  function showMCAlert(title, message) {
    if (modalTitle) modalTitle.textContent = title;
    if (modalBody) modalBody.textContent = message;
    if (mcModal) mcModal.style.display = "flex";
  }

  if (btnModalOk) {
    btnModalOk.addEventListener("click", () => {
      if (mcModal) mcModal.style.display = "none";
      clickSound.currentTime = 0;
      clickSound.play().catch(e => {});
    });
  }

  // Funcionalidad basica para manejar clicks en botones
  buttons.forEach((button) => {
    // Efecto hover (Sonido al pasar el ratón)
    button.addEventListener("mouseenter", () => {
      // Reiniciar y reproducir (por si pasa el ratón muy rápido entre botones)
      hoverSound.currentTime = 0;
      hoverSound.play().catch(e => console.log("Navegador bloquea autoplay inicial", e));
    });

    // Evento de clic
    button.addEventListener("click", () => {
      // Reproducir sonido de clic
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.log("Navegador bloquea autoplay inicial", e));

      // Animación extra en JS
      button.style.transform = "scale(0.97)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 100);

      // Ejemplo de redirección:
      if (button.textContent.toLowerCase().includes("salir")) {
        alert("Saliendo de la aventura...");
      }
    });
  });

  // Lógica de la pantalla de carga de Mojang
  const loadingScreen = document.getElementById("loading-screen");
  const loadingMessage = document.getElementById("loading-message");

  // Animar los puntos y el contador "(1s)"
  let seconds = 0;
  const maxSeconds = 4; // Ajusta el tiempo de carga aquí
  const updateLoadingText = setInterval(() => {
    seconds++;
    let dots = "";
    if (seconds % 3 === 1) dots = ".";
    else if (seconds % 3 === 2) dots = "..";
    else dots = "...";
    
    if (loadingMessage) {
        loadingMessage.textContent = `Iniciando el juego${dots} (${seconds}s)`;
    }

    if (seconds >= maxSeconds) {
      clearInterval(updateLoadingText);
    }
  }, 1000);

  // Ocultar la pantalla de carga después del tiempo establecido
  setTimeout(() => {
    if (loadingScreen) {
        // Desvanecer
        loadingScreen.style.opacity = "0";
        
        // Esperar a que termine la transición de opacidad (500ms definidos en CSS)
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500); 
    }
  }, maxSeconds * 1000);

  // Lista de textos aleatorios puramente de Cumpleaños
  const splashTexts = [
    "¡La cumpleañera más pro!",
    "¡Nivel de belleza: MAXIMO!",
    "¡Eres un diamante puro!",
    "¡Un año más de aventuras!",
    "¡La jefa del servidor!",
    "¡Hoy no hay límite de pastel!",
    "¡Más radiante que una antorcha!",
    "¡Tu sonrisa brilla más que el glowstone!",
    "¡Logro desbloqueado: Ser la mejor!",
    "¡Eres épica como un dragón!",
    "¡Mejor que un pack de texturas!",
    "¡Haces que el mundo sea colorido!",
    "¡Nadie construye como tú!",
    "¡Eres el bloque que faltaba!",
    "¡Feliz nivel nuevo!",
    "¡Instalando felicidad eterna...",
    "¡Tienes el inventario lleno de magia!",
    "¡Hoy eres la dueña de la Bedrock!"
  ];

  // Seleccionar aleatoriamente y escribir el splash text
  const splashElement = document.getElementById("dynamic-splash");
  
  function updateSplash() {
    if (splashElement) {
      const randomIndex = Math.floor(Math.random() * splashTexts.length);
      splashElement.textContent = splashTexts[randomIndex];
    }
  }

  // Cambio inicial
  updateSplash();

  // Cambio automático cada 3 segundos
  const splashInterval = setInterval(updateSplash, 3000);

  // Lógica de menús (Navegación entre Principal y Ajustes)
  const btnAjustes = document.getElementById("btn-ajustes");
  const btnAtras = document.getElementById("btn-atras");
  const mainMenu = document.getElementById("main-menu");
  const settingsMenu = document.getElementById("settings-menu");

  if (btnAjustes && btnAtras && mainMenu && settingsMenu) {
    btnAjustes.addEventListener("click", () => {
      // Broma de ajustes (Mantenemos la broma pero bloqueamos el menú)
      showMCAlert("¡Error de Sistema!", "Se ha detectado que la cumpleañera es demasiado hermosa. Todos los ajustes han sido bloqueados para no arruinar su perfección.");
    });

    btnAtras.addEventListener("click", () => {
      settingsMenu.style.display = "none";
      mainMenu.style.display = "flex";
    });
  }

  // =========================================
  // INTERACCIONES DIVERTIDAS (OPCIÓN 3)
  // =========================================
  const btnMercado = document.querySelectorAll(".minecraft-btn")[2]; // Tercer botón
  const btnSalir = document.querySelectorAll(".minecraft-btn")[3];   // Cuarto botón

  if (btnMercado) {
    btnMercado.addEventListener("click", () => {
      showMCAlert("¡Minecoins Agotadas!", "Instalando 99,999 troyanos... \n\n¡Es broma! Pero necesitas 1,000,000 de diamantes para comprar en este mercado.");
    });
  }

  if (btnSalir) {
    btnSalir.addEventListener("click", () => {
      oofSound.currentTime = 0;
      oofSound.play().catch(e => {});
      showMCAlert("¡No tan rápido!", "¡Un Enderman te ha robado el botón de Salir! Tendrás que quedarte a disfrutar el pastel por siempre. 🎂");
    });
  }

  // =========================================
  // LOGO CLICKEABLE (Splash Texts Infinitos)
  // =========================================
  const logoClick = document.getElementById("logo-click");
  if (logoClick && splashElement) {
    logoClick.addEventListener("click", () => {
      const allPossibleSplashes = [...splashTexts];
      const randomSplash = allPossibleSplashes[Math.floor(Math.random() * allPossibleSplashes.length)];
      splashElement.textContent = randomSplash;
      
      // Sonidito de click para que sepa que hizo algo
      clickSound.currentTime = 0;
      clickSound.play().catch(e => {});
    });
  }

  // =========================================
  // LÓGICA DEL REGALO Y GENERACIÓN DE MUNDO (JUGAR)
  // =========================================
  const btnJugar = document.getElementById("btn-jugar");
  const playMenu = document.getElementById("play-menu");
  const btnAtrasPlay = document.getElementById("btn-atras-play");
  const btnEntrarRegalo = document.getElementById("btn-entrar-regalo");
  const worldLoadingScreen = document.getElementById("world-loading-screen");
  const worldProgress = document.getElementById("world-progress");
  const giftScreen = document.getElementById("gift-screen");
  const btnVolverMenu = document.getElementById("btn-volver-menu");

  // 1. Al presionar Jugar, ir al Menú de Selección de Mundos
  if (btnJugar && playMenu) {
    btnJugar.addEventListener("click", () => {
      if (mainMenu) mainMenu.style.display = "none";
      playMenu.style.display = "flex";
      clickSound.currentTime = 0;
      clickSound.play().catch(e => {});
    });
  }

  // Volver atrás desde el Menú de Selección de Mundos
  if (btnAtrasPlay && playMenu) {
    btnAtrasPlay.addEventListener("click", () => {
      playMenu.style.display = "none";
      if (mainMenu) mainMenu.style.display = "flex";
      clickSound.currentTime = 0;
      clickSound.play().catch(e => {});
    });
  }

  // 2. Al presionar "Mi Mundo (Regalo)" iniciar la carga
  if (btnEntrarRegalo) {
    btnEntrarRegalo.addEventListener("click", () => {
      // Ocultar menu de mundos
      if (playMenu) playMenu.style.display = "none";
      
      // Mostrar la pantalla de carga de imagen
      if (worldLoadingScreen) worldLoadingScreen.style.display = "flex";
      
      clickSound.currentTime = 0;
      clickSound.play().catch(e => {});

      const loadingTip = document.getElementById("loading-tip");
      const loadingTips = [
        "Consejo: La cumpleañera siempre tiene la razón el día de hoy.",
        "Consejo: ¡No caves directo hacia abajo!",
        "Consejo: Los creepers no son tus amigos, ¡aléjate!",
        "Consejo: Siempre lleva un cubo de agua en el inventario.",
        "Consejo: ¡Asegúrate de comer pastel para recuperar vida!",
        "Consejo: Los diamantes se encuentran debajo de la capa 16."
      ];
      
      // Seleccionar un consejo aleatorio para esta carga
      if (loadingTip) {
        loadingTip.textContent = loadingTips[Math.floor(Math.random() * loadingTips.length)];
      }

      // 3. Animar barra
      let loadPercentage = 0;
      if (worldProgress) worldProgress.style.width = "0%";

      const loadingInterval = setInterval(() => {
        loadPercentage += Math.floor(Math.random() * 10) + 2; 
        if (loadPercentage >= 100) {
          loadPercentage = 100;
          clearInterval(loadingInterval);
          
          // CAMBIO: Ahora vamos al COFRE, no al regalo directamente
          setTimeout(() => {
            if (worldLoadingScreen) worldLoadingScreen.style.display = "none";
            const chestScreen = document.getElementById("chest-screen");
            if (chestScreen) chestScreen.style.display = "flex";
          }, 800); 
        }
        if (worldProgress) worldProgress.style.width = `${loadPercentage}%`;
      }, 300);
    });
  }

  // Mundos Falsos
  document.querySelectorAll(".fake-world").forEach(world => {
    world.addEventListener("click", () => {
      oofSound.currentTime = 0;
      oofSound.play().catch(e => {});
      showMCAlert("¡Acceso Denegado!", "Este mundo está protegido por un encantamiento de nivel 100. \n\n¡Solo la cumpleañera tiene la llave para el mundo correcto!");
    });
  });

  // Lógica del Cofre
  const chestEmoji = document.querySelector(".chest-emoji");
  const chestScreen = document.getElementById("chest-screen");
  let chestClicks = 0;

  if (chestEmoji) {
    chestEmoji.addEventListener("click", () => {
      chestClicks++;
      
      // Sonido y sacudida
      clickSound.currentTime = 0;
      clickSound.play().catch(e => {});
      chestEmoji.classList.add("shake");
      setTimeout(() => chestEmoji.classList.remove("shake"), 300);

      const instruction = document.getElementById("chest-instruction");

      if (chestClicks === 1) {
        if (instruction) instruction.innerHTML = "¡ESTÁ VIBRANDO! <br><span>(Dale de nuevo)</span>";
      } else if (chestClicks === 2) {
        if (instruction) instruction.innerHTML = "¡ALGO VA A PASAR! <br><span>(¡Un último golpe!)</span>";
      } else if (chestClicks >= 3) {
        // EXPLOSIÓN Y REVELACIÓN
        clickSound.play();
        if (chestScreen) chestScreen.style.display = "none";
        if (giftScreen) giftScreen.style.display = "flex";
        
        startPartyRain();
        showAchievement();
        playMusic();
      }
    });
  }

  // Volver al inicio desde el regalo
  if (btnVolverMenu) {
    btnVolverMenu.addEventListener("click", () => {
      if (giftScreen) giftScreen.style.display = "none";
      if (mainMenu) mainMenu.style.display = "flex";
    });
  }

  // =========================================
  // JUKEBOX MUSICAL (Automático)
  // =========================================
  
  // Crear directamente el reproductor de audio
  const swedenAudio = new Audio("sweden.mp3");
  
  // Para que suene relajado y de fondo
  swedenAudio.volume = 0.2;

  const stopMusic = () => {
    swedenAudio.pause();
    swedenAudio.currentTime = 0;
  };

  const playMusic = () => {
    stopMusic(); // Detenemos si ya estaba sonando
    swedenAudio.play().catch(e => console.log("Imposible reproducir música", e));
  };

  // Al presionar Volver al Menú, detener música
  if (btnVolverMenu) {
    btnVolverMenu.addEventListener("click", () => {
      stopMusic();
      stopPartyRain();
      if (giftScreen) giftScreen.style.display = "none";
      if (mainMenu) mainMenu.style.display = "flex";
    });
  }

  // =========================================
  // SISTEMA DE LLUVIA DE FIESTA
  // =========================================
  let partyInterval;
  const rainContainer = document.getElementById("party-rain-container");

  function startPartyRain() {
    if (!rainContainer) return;
    
    // Limpiar lluvia anterior si existe
    rainContainer.innerHTML = '';
    
    partyInterval = setInterval(() => {
      const hat = document.createElement("div");
      const type = Math.floor(Math.random() * 4) + 1;
      
      hat.classList.add("party-hat", `hat-${type}`);
      
      // Posición horizontal aleatoria
      hat.style.left = Math.random() * 100 + "vw";
      
      // Tamaño aleatorio para dar profundidad
      const size = Math.random() * (2.5 - 1) + 1;
      hat.style.fontSize = `${size}rem`;
      
      // Duración de caída aleatoria (entre 3 y 6 segundos)
      const duration = Math.random() * (6 - 3) + 3;
      hat.style.animationDuration = duration + "s";
      
      // Blur aleatorio para efecto de profundidad
      if (size < 1.5) hat.style.filter = "blur(1px)";

      rainContainer.appendChild(hat);

      // Eliminar el elemento después de que termine la animación para no saturar
      setTimeout(() => {
        hat.remove();
      }, duration * 1000);
      
    }, 300); // Crea un gorrito cada 300ms
  }

  function stopPartyRain() {
    clearInterval(partyInterval);
    if (rainContainer) rainContainer.innerHTML = '';
  }

  // =========================================
  // SISTEMA DE LOGROS
  // =========================================
  function showAchievement() {
    const toast = document.getElementById("achievement-toast");
    if (!toast) return;

    setTimeout(() => {
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 5000);
    }, 1000);
  }

  // =========================================
  // SISTEMA DE PARTÍCULAS AMBIENTALES
  // =========================================
  function createAmbientParticles() {
    const container = document.getElementById("ambient-particles");
    if (!container) return;
    // Más partículas y en toda la pantalla
    for (let i = 0; i < 80; i++) {
      createParticle(container);
    }
  }

  function createParticle(container) {
    const p = document.createElement("div");
    p.classList.add("particle");
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = Math.random() * 100 + "vh";
    const size = Math.random() * 3 + 2;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.animationDuration = Math.random() * 15 + 10 + "s";
    p.style.animationDelay = Math.random() * -20 + "s";
    container.appendChild(p);
  }

  // Iniciar partículas
  createAmbientParticles();

});
