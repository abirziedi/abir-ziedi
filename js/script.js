document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');

    if (submitBtn) {
        submitBtn.addEventListener('click', function() {
            const answers = {
                q1: "HTML",
                q2: "CSS"
            };
            let score = 0;
            for (let key in answers) {
                const answer = document.querySelector(`input[name="${key}"]:checked`);
                if (answer && answer.value === answers[key]) {
                    score++;
                }
            }
            resultDiv.textContent = `Votre score est : ${score}/2`;
        });
    }
});

// Fonction pour afficher les détails de chaque compétence
function afficherCompetence(categorie) {
    // Masquer tous les textes des compétences
    let competences = document.querySelectorAll('.competence-text');
    competences.forEach(function(competence) {
        competence.style.display = 'none';
    });

    // Afficher le texte correspondant à la catégorie sélectionnée
    let competence = document.getElementById(categorie);
    if (competence) {
        competence.style.display = 'block';
    }
}


