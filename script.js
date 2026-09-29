let idiomaItaliano = false;

function cambiarIdioma() {

    idiomaItaliano = !idiomaItaliano;

    if (idiomaItaliano) {

        // ENCABEZADO
        document.getElementById("titulo").textContent =
            "🌎 Inquinamento Globale";

        document.getElementById("subtitulo").textContent =
            "Un problema che riguarda tutti noi";

        document.getElementById("botonIdioma").textContent =
            "🇪🇸 Leer en español";

        // MENÚ
        document.getElementById("navProblema").textContent =
            "Il problema";

        document.getElementById("navCausas").textContent =
            "Cause";

        document.getElementById("navConsecuencias").textContent =
            "Conseguenze";

        document.getElementById("navSoluciones").textContent =
            "Soluzioni";


        // INICIO
        document.getElementById("inicioTitulo").textContent =
            "🌱 Proteggere il pianeta è responsabilità di tutti";

        document.getElementById("inicioTexto1").textContent =
            "L'inquinamento globale è una delle grandi sfide ambientali del nostro tempo. L'aria, l'acqua e il suolo possono essere danneggiati da diverse attività umane.";

        document.getElementById("inicioTexto2").textContent =
            "Prendersi cura dell'ambiente è una responsabilità di tutti. Con piccoli gesti quotidiani possiamo contribuire a proteggere il nostro pianeta e le generazioni future.";


        // PROBLEMA
        document.getElementById("problemaTitulo").textContent =
            "🌍 Che cos'è l'inquinamento?";

        document.getElementById("problemaTexto").textContent =
            "L'inquinamento si verifica quando sostanze o forme di energia dannose raggiungono l'ambiente e ne alterano l'equilibrio. Può colpire gli ecosistemi, gli animali, le piante e anche le persone.";

        document.getElementById("aireTitulo").textContent =
            "💨 Inquinamento dell'aria";

        document.getElementById("aireTexto").textContent =
            "Si verifica quando gas, particelle e altri contaminanti raggiungono l'atmosfera.";

        document.getElementById("aguaTitulo").textContent =
            "💧 Inquinamento dell'acqua";

        document.getElementById("aguaTexto").textContent =
            "Si verifica quando rifiuti, sostanze chimiche e altri contaminanti raggiungono fiumi, mari e oceani.";

        document.getElementById("sueloTitulo").textContent =
            "🌱 Inquinamento del suolo";

        document.getElementById("sueloTexto").textContent =
            "I rifiuti e alcune sostanze possono deteriorare la qualità del suolo e danneggiare gli ecosistemi.";


        // CAUSAS
        document.getElementById("causasTitulo").textContent =
            "🏭 Principali cause";

        document.getElementById("listaCausas").innerHTML = `
            <li>Uso di combustibili fossili.</li>
            <li>Emissioni delle industrie e dei veicoli.</li>
            <li>Accumulo e cattiva gestione dei rifiuti.</li>
            <li>Deforestazione e degradazione degli ecosistemi.</li>
            <li>Uso eccessivo di determinati prodotti e risorse.</li>
            <li>Inquinamento causato da alcune attività agricole e industriali.</li>
        `;


        // CONSECUENCIAS
        document.getElementById("consecuenciasTitulo").textContent =
            "⚠️ Conseguenze";

        document.getElementById("climaTitulo").textContent =
            "🌡️ Cambiamento climatico";

        document.getElementById("climaTexto").textContent =
            "Le emissioni di gas serra contribuiscono al riscaldamento del pianeta e al cambiamento climatico.";

        document.getElementById("ecosistemasTitulo").textContent =
            "🐢 Danni agli ecosistemi";

        document.getElementById("ecosistemasTexto").textContent =
            "L'inquinamento può danneggiare specie animali, piante ed ecosistemi terrestri e acquatici.";

        document.getElementById("saludTitulo").textContent =
            "🏥 Salute umana";

        document.getElementById("saludTexto").textContent =
            "Alcuni contaminanti possono influire sulla salute, soprattutto quando l'esposizione è elevata o prolungata.";


        // SOLUCIONES
        document.getElementById("solucionesTitulo").textContent =
            "♻️ Cosa possiamo fare?";

        document.getElementById("solucionesTexto").textContent =
            "Affrontare l'inquinamento richiede azioni da parte dei governi, delle aziende e dei cittadini. Anche alcune azioni quotidiane possono aiutare a ridurre il nostro impatto ambientale.";

        document.getElementById("listaSoluciones").innerHTML = `
            <li>♻️ Ridurre, riutilizzare e riciclare.</li>
            <li>🚲 Usare i mezzi pubblici, camminare o andare in bicicletta quando possibile.</li>
            <li>💡 Risparmiare energia.</li>
            <li>💧 Evitare lo spreco d'acqua.</li>
            <li>🛍️ Ridurre i consumi non necessari.</li>
            <li>🌳 Proteggere e recuperare gli spazi naturali.</li>
            <li>📚 Informarsi e condividere conoscenze sulla protezione dell'ambiente.</li>
        `;


        // MENSAJE FINAL
        document.getElementById("finalTitulo").textContent =
            "🌎 Il nostro pianeta è la nostra casa";

        document.getElementById("finalTexto").textContent =
            "I problemi ambientali sono globali, ma anche le nostre azioni possono contribuire al cambiamento. Ogni decisione responsabile può far parte di uno sforzo collettivo per proteggere il pianeta.";


        // FOOTER
        document.getElementById("footer1").textContent =
            "🌱 Progetto educativo sull'inquinamento globale";

        document.getElementById("footer2").textContent =
            "Realizzato con HTML, CSS e JavaScript";

    } else {

        // VOLVER AL ESPAÑOL
        location.reload();

    }
}
