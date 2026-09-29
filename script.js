let idiomaItaliano = false;

function cambiarIdioma() {

    idiomaItaliano = !idiomaItaliano;


    if (idiomaItaliano) {

        /* =========================
           ENCABEZADO
        ========================== */

        document.getElementById("titulo").textContent =
            "Inquinamento Globale";

        document.getElementById("subtitulo").textContent =
            "Proteggere il nostro pianeta è responsabilità di tutti";

        document.getElementById("botonIdioma").textContent =
            "🇪🇸 Español";


        /* =========================
           MENÚ
        ========================== */

        document.getElementById("navInicio").textContent =
            "Inizio";

        document.getElementById("navProblema").textContent =
            "Il problema";

        document.getElementById("navCausas").textContent =
            "Cause";

        document.getElementById("navConsecuencias").textContent =
            "Conseguenze";

        document.getElementById("navSoluciones").textContent =
            "Soluzioni";


        /* =========================
           INICIO
        ========================== */

        document.getElementById("etiqueta").textContent =
            "🌱 Proteggiamo il pianeta";

        document.getElementById("inicioTitulo").textContent =
            "Un pianeta sano inizia dalle nostre azioni";

        document.getElementById("inicioTexto").textContent =
            "L'inquinamento globale è una delle grandi sfide ambientali del nostro tempo. Conoscere le sue cause e conseguenze ci permette di capire meglio come possiamo proteggere il nostro pianeta.";

        document.getElementById("botonConocer").textContent =
            "Scopri di più";


        /* =========================
           PROBLEMA
        ========================== */

        document.getElementById("problemaTitulo").textContent =
            "Che cos'è l'inquinamento?";

        document.getElementById("problemaTexto").textContent =
            "L'inquinamento si verifica quando sostanze o forme di energia dannose raggiungono l'ambiente e ne alterano l'equilibrio naturale.";


        document.getElementById("aireTitulo").textContent =
            "Inquinamento dell'aria";

        document.getElementById("aireTexto").textContent =
            "Si verifica quando gas, particelle e altri contaminanti raggiungono l'atmosfera.";


        document.getElementById("aguaTitulo").textContent =
            "Inquinamento dell'acqua";

        document.getElementById("aguaTexto").textContent =
            "Si verifica quando rifiuti e sostanze contaminanti raggiungono fiumi, mari e oceani.";


        document.getElementById("sueloTitulo").textContent =
            "Inquinamento del suolo";

        document.getElementById("sueloTexto").textContent =
            "I rifiuti e alcune sostanze possono deteriorare la qualità del suolo.";


        /* =========================
           CAUSAS
        ========================== */

        document.getElementById("causasTitulo").textContent =
            "Principali cause";

        document.getElementById("causasTexto").textContent =
            "Diverse attività umane possono contribuire all'inquinamento ambientale.";

        document.getElementById("causa1").textContent =
            "Uso di combustibili fossili";

        document.getElementById("causa2").textContent =
            "Emissioni industriali";

        document.getElementById("causa3").textContent =
            "Emissioni dei veicoli";

        document.getElementById("causa4").textContent =
            "Cattiva gestione dei rifiuti";

        document.getElementById("causa5").textContent =
            "Deforestazione";

        document.getElementById("causa6").textContent =
            "Attività industriali e agricole";


        /* =========================
           CONSECUENCIAS
        ========================== */

        document.getElementById("consecuenciasTitulo").textContent =
            "Conseguenze";

        document.getElementById("consecuenciasTexto").textContent =
            "L'inquinamento può avere effetti sull'ambiente, sugli ecosistemi e sulle persone.";

        document.getElementById("climaTitulo").textContent =
            "Cambiamento climatico";

        document.getElementById("climaTexto").textContent =
            "Le emissioni di gas serra contribuiscono al riscaldamento del pianeta e al cambiamento climatico.";

        document.getElementById("ecosistemasTitulo").textContent =
            "Danni agli ecosistemi";

        document.getElementById("ecosistemasTexto").textContent =
            "L'inquinamento può danneggiare animali, piante ed ecosistemi terrestri e acquatici.";

        document.getElementById("saludTitulo").textContent =
            "Salute umana";

        document.getElementById("saludTexto").textContent =
            "Alcuni contaminanti possono influire sulla salute quando l'esposizione è elevata o prolungata.";


        /* =========================
           SOLUCIONES
        ========================== */

        document.getElementById("solucionesTitulo").textContent =
            "Cosa possiamo fare?";

        document.getElementById("solucionesTexto").textContent =
            "Affrontare i problemi ambientali richiede la partecipazione dei governi, delle aziende e dei cittadini.";

        document.getElementById("solucion1").textContent =
            "Ridurre, riutilizzare e riciclare";

        document.getElementById("solucion2").textContent =
            "Utilizzare mezzi di trasporto sostenibili";

        document.getElementById("solucion3").textContent =
            "Risparmiare energia";

        document.getElementById("solucion4").textContent =
            "Evitare lo spreco d'acqua";

        document.getElementById("solucion5").textContent =
            "Proteggere gli spazi naturali";

        document.getElementById("solucion6").textContent =
            "Informarsi ed educarsi";


        /* =========================
           MENSAJE FINAL
        ========================== */

        document.getElementById("finalTitulo").textContent =
            "Il nostro pianeta è la nostra casa";

        document.getElementById("finalTexto").textContent =
            "I problemi ambientali sono globali, ma anche le nostre azioni possono contribuire al cambiamento. Proteggere il nostro pianeta è una responsabilità condivisa.";


        /* =========================
           FOOTER
        ========================== */

        document.getElementById("footerTexto").textContent =
            "Progetto educativo sull'inquinamento globale";

    }

    else {

        /* =========================
           VOLVER AL ESPAÑOL
        ========================== */

        document.getElementById("titulo").textContent =
            "Contaminación Global";

        document.getElementById("subtitulo").textContent =
            "Cuidar nuestro planeta es responsabilidad de todos";

        document.getElementById("botonIdioma").textContent =
            "🇮🇹 Italiano";


        document.getElementById("navInicio").textContent =
            "Inicio";

        document.getElementById("navProblema").textContent =
            "El problema";

        document.getElementById("navCausas").textContent =
            "Causas";

        document.getElementById("navConsecuencias").textContent =
            "Consecuencias";

        document.getElementById("navSoluciones").textContent =
            "Soluciones";


        /* INICIO */

        document.getElementById("etiqueta").textContent =
            "🌱 Cuidemos el planeta";

        document.getElementById("inicioTitulo").textContent =
            "Un planeta saludable comienza con nuestras acciones";

        document.getElementById("inicioTexto").textContent =
            "La contaminación global es uno de los grandes desafíos ambientales de nuestro tiempo. Conocer sus causas y consecuencias nos permite comprender mejor cómo podemos cuidar nuestro planeta.";

        document.getElementById("botonConocer").textContent =
            "Conocer más";


        /* PROBLEMA */

        document.getElementById("problemaTitulo").textContent =
            "¿Qué es la contaminación?";

        document.getElementById("problemaTexto").textContent =
            "La contaminación ocurre cuando sustancias o formas de energía perjudiciales llegan al ambiente y alteran su equilibrio natural.";

        document.getElementById("aireTitulo").textContent =
            "Contaminación del aire";

        document.getElementById("aireTexto").textContent =
            "Se produce cuando gases, partículas y otros contaminantes llegan a la atmósfera.";

        document.getElementById("aguaTitulo").textContent =
            "Contaminación del agua";

        document.getElementById("aguaTexto").textContent =
            "Ocurre cuando residuos y sustancias contaminantes llegan a ríos, mares y océanos.";

        document.getElementById("sueloTitulo").textContent =
            "Contaminación del suelo";

        document.getElementById("sueloTexto").textContent =
            "Los residuos y determinadas sustancias pueden deteriorar la calidad del suelo.";


        /* CAUSAS */

        document.getElementById("causasTitulo").textContent =
            "Principales causas";

        document.getElementById("causasTexto").textContent =
            "Existen diferentes actividades humanas que pueden contribuir a la contaminación ambiental.";

        document.getElementById("causa1").textContent =
            "Uso de combustibles fósiles";

        document.getElementById("causa2").textContent =
            "Emisiones industriales";

        document.getElementById("causa3").textContent =
            "Emisiones de vehículos";

        document.getElementById("causa4").textContent =
            "Mala gestión de residuos";

        document.getElementById("causa5").textContent =
            "Deforestación";

        document.getElementById("causa6").textContent =
            "Actividades industriales y agrícolas";


        /* CONSECUENCIAS */

        document.getElementById("consecuenciasTitulo").textContent =
            "Consecuencias";

        document.getElementById("consecuenciasTexto").textContent =
            "La contaminación puede tener efectos sobre el ambiente, los ecosistemas y las personas.";

        document.getElementById("climaTitulo").textContent =
            "Cambio climático";

        document.getElementById("climaTexto").textContent =
            "Las emisiones de gases de efecto invernadero contribuyen al calentamiento del planeta y al cambio climático.";

        document.getElementById("ecosistemasTitulo").textContent =
            "Daño a los ecosistemas";

        document.getElementById("ecosistemasTexto").textContent =
            "La contaminación puede afectar a animales, plantas y ecosistemas terrestres y acuáticos.";

        document.getElementById("saludTitulo").textContent =
            "Salud humana";

        document.getElementById("saludTexto").textContent =
            "Algunos contaminantes pueden afectar la salud cuando la exposición es elevada o prolongada.";


        /* SOLUCIONES */

        document.getElementById("solucionesTitulo").textContent =
            "¿Qué podemos hacer?";

        document.getElementById("solucionesTexto").textContent =
            "Resolver los problemas ambientales requiere la participación de gobiernos, empresas y ciudadanos.";

        document.getElementById("solucion1").textContent =
            "Reducir, reutilizar y reciclar";

        document.getElementById("solucion2").textContent =
            "Utilizar medios de transporte sostenibles";

        document.getElementById("solucion3").textContent =
            "Ahorrar energía";

        document.getElementById("solucion4").textContent =
            "Evitar desperdiciar agua";

        document.getElementById("solucion5").textContent =
            "Proteger los espacios naturales";

        document.getElementById("solucion6").textContent =
            "Informarnos y educarnos";


        /* FINAL */

        document.getElementById("finalTitulo").textContent =
            "Nuestro planeta es nuestro hogar";

        document.getElementById("finalTexto").textContent =
            "Los problemas ambientales son globales, pero nuestras acciones también pueden contribuir al cambio. Cuidar nuestro planeta es una responsabilidad compartida.";


        /* FOOTER */

        document.getElementById("footerTexto").textContent =
            "Proyecto educativo sobre contaminación global";
    }
}
