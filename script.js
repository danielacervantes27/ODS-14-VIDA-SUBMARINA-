* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: linear-gradient(180deg, #b3e5fc 0%, #0288d1 60%, #01579b 100%);
    background-attachment: fixed;
    font-family: 'Segoe UI', Tahoma, sans-serif;
    color: #003366;
    height: 100vh;
}

.main-wrapper {
    max-width: 1000px;
    margin: 30px auto;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 40px;
    border: 3px solid rgba(255, 255, 255, 0.8);
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

/* HEADER Y BOTONES FRUTIGER AERO */
.frutiger-header {
    background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.logo h1 { font-size: 2rem; color: #0077be; text-shadow: 1px 1px 0px white; }
.logo span { color: #4caf50; }

.nav-btn {
    background: linear-gradient(180deg, #fff 0%, #d1d1d1 100%);
    border: 2px solid white;
    padding: 10px 25px;
    border-radius: 25px;
    font-weight: bold;
    cursor: pointer;
    margin: 0 5px;
    transition: 0.3s;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.nav-btn.active {
    background: linear-gradient(180deg, #4fc3f7 0%, #0288d1 100%);
    color: white;
    box-shadow: 0 0 15px #4fc3f7;
}

/* MARQUESINA */
.marquee-container {
    background: #4caf50;
    color: white;
    padding: 8px;
    font-weight: bold;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

/* CONTENIDO */
.content-box { padding: 30px; }

.tab-content { display: none; animation: fadeIn 0.5s ease; }
.tab-content.active { display: block; }

.section-title { margin-bottom: 20px; color: #01579b; text-shadow: 1px 1px 0 white; }

/* CARDS GLASSMORPHISM (ESTILO GLOBO/AQUA) */
.glass-card, .glass-inner {
    background: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    padding: 20px;
    border: 1px solid white;
    margin-bottom: 20px;
    backdrop-filter: blur(5px);
}

/* --- ESTILOS DEL CARRUSEL --- */
.carousel-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto 30px auto;
    overflow: hidden;
    border: 4px solid white;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    /* Efecto de 'burbuja' o 'globo' */
    background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 100%);
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-slide {
    min-width: 100%;
    position: relative;
    display: none; /* Oculto por defecto */
}

.carousel-slide.active {
    display: block; /* Muestra el slide activo */
}

.carousel-slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    display: block;
}

/* Controles del carrusel: Frutiger Buttons */
.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(180deg, #fff 0%, #0288d1 100%);
    border: 2px solid white;
    color: white;
    font-size: 1.5rem;
    padding: 10px 15px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    z-index: 10;
}

.carousel-btn:hover { background: linear-gradient(180deg, #0288d1 0%, #fff 100%); }
.carousel-btn.prev { left: 15px; }
.carousel-btn.next { right: 15px; }

/* Indicadores de punto */
.carousel-dots {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
}

.dot {
    width: 12px; height: 12px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid #0288d1;
    opacity: 0.5;
}

.dot.active { background: #0288d1; opacity: 1; box-shadow: 0 0 10px #4fc3f7; }

/* LAYOUT GRIDS Y ELEMENTOS */
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

.cta-banner {
    background: linear-gradient(135deg, #a5d6a7, #4caf50);
    border-radius: 30px;
    padding: 30px;
    text-align: center;
    border: 3px solid white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.action-button {
    background: linear-gradient(180deg, #fff 0%, #4caf50 100%);
    color: white;
    border: 3px solid white;
    padding: 15px 40px;
    border-radius: 50px;
    font-weight: bold;
    cursor: pointer;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
}

.conclusion-box { background: rgba(0, 51, 102, 0.05); color: #003366; }

/* EQUIPO FRUTIGER STYLE */
.team-container { display: flex; gap: 20px; justify-content: center; }
.member-card { width: 250px; text-align: center; background: white; }
.avatar-glow {
    width: 70px; height: 70px;
    background: radial-gradient(circle, #fff, #b3e5fc);
    border-radius: 50%;
    margin: 0 auto 10px;
    display: flex; align-items: center; justify-content: center;
    font-weight: bold; color: #0288d1;
    border: 3px solid white;
    box-shadow: 0 0 20px #4fc3f7;
}

/* EFECTOS ESPECIALES AERO */
.bubble-effect, .top-brillo { position: relative; }
.top-brillo::after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100%; height: 30%;
    background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%);
    border-radius: 20px 20px 0 0;
}

@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

.frutiger-footer { text-align: center; padding: 20px; font-size: 0.8rem; background: rgba(0,0,0,0.05); }