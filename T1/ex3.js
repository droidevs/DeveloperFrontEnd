

const inscriptions = [
  { id: 10, nom: 'Rami', filiere: 'DEV' },
  { id: 11, nom: 'Kamali', filiere: 'DEV' },
  { id: 12, nom: 'Fahmi', filiere: 'DEV' },
  { id: 13, nom: 'Chaouki', filiere: 'DEV' }
];

function ajouterInscription(liste, newInscription) {
  return [...liste, newInscription];
}


const inscription = { id: 14, nom: 'Mouad', filiere: 'DEV' };

const newInscriptions = ajouterInscription(inscriptions, inscription);

console.log(newInscriptions);

