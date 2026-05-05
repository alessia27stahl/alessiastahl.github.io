/* On memorise la derniere position verticale de la page. */
let dernierePosition = 0;

/* On selectionne la navigation a masquer ou afficher. */
const navigation = document.querySelector('.site-header');

/* On ecoute le defilement de la page. */
window.addEventListener('scroll', function () {
  /* On lit la position actuelle dans la page. */
  const positionActuelle = window.scrollY;

  /* Si on descend, la navigation disparait. */
  if (positionActuelle > dernierePosition) {
    navigation.classList.add('site-header-hidden');
  }

  /* Si on remonte, la navigation reapparait. */
  if (positionActuelle < dernierePosition) {
    navigation.classList.remove('site-header-hidden');
  }

  /* On garde la position actuelle pour la prochaine comparaison. */
  dernierePosition = positionActuelle;
});
