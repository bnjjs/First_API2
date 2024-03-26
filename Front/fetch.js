

async function getNotes() {
     
    const response = await fetch("http://localhost:3000/v1");
    const data = await response.json();

    // je récurère les colonnes séparement

    const noms = data.noms
    const Prenoms =data.Prenoms
    cons


    // je fetch les données demandé

    console.log(typeof(noms), noms)
    console.log(typeof(prix), prix)


    const p = document.getElementById('1');
    const p2 = document.getElementById('2');
    p.innerHTML = noms
    p2.innerHTML = Prenoms
}



async function PostNotes(){

  const form = document.getElementById('myForm');

  form.addEventListener('submit', async function(event) {
      event.preventDefault();

      const formData = new FormData(form);
      const requestData = {
          noms: formData.get('noms'),
          prenoms: formData.get('prenoms'),
          promo: formData.get('promo'),
          
  };

  try {
    const result = await fetch('http://localhost:3000/v5', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })

    if (!result.status) {
        throw new Error('Erreur réseau lors de la requête.');
    }
    const {id} = await result.json()

    window.location.replace('/Qcm.html?id=' + id)


  } catch (error) {
    console.error('Erreur lors de la requête :', error);
  }

  });
    
}
export { getNotes , PostNotes };
