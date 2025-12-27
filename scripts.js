function calculateResult() {
    let score = 0;

    for (let i = 1; i <= 8; i++) {
        let answer = document.getElementById("q" + i).value;

        // verifică dacă nu a fost ales nimic
        if (answer === "") {
            document.getElementById("output").innerText =
                "Te rugăm să răspunzi la toate întrebările înainte de a vedea rezultatul.";
            return;
        }

        score += parseInt(answer);
    }

    let resultText = "";

    if (score >= 13) {
    resultText = "Domenii recomandate: IT, Inginerie, Tehnologie.";
} else if (score >= 10) {
    resultText = "Domenii recomandate: Sănătate, Medicină, Biologie.";
} else if (score >= 6) {
    resultText = "Domenii recomandate: Economie, Management, Educație.";
} else {
    resultText = "Domenii recomandate: Arte, Comunicare, Științe sociale.";
}

    document.getElementById("output").innerText = resultText;
}