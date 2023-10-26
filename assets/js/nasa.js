// document.addEventListener('DOMContentLoaded', function () {
//   // Obtenez la date d'aujourd'hui au format ISO (AAAA-MM-JJ)
//   const today = new Date().toISOString().split('T')[0];

//   // Obtenez la date d'hier en soustrayant un jour à la date d'aujourd'hui
//   const yesterday = new Date();
//   yesterday.setDate(yesterday.getDate() - 1);
//   const yesterdayISO = yesterday.toISOString().split('T')[0];

//   // Requête pour l'image ou la vidéo d'aujourd'hui
//   fetch(`https://api.nasa.gov/planetary/apod?api_key=PwT1TbcYPC76WkxXetd77pnwakNT1uNU0ldQK6SC&date=${today}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Erreur de réponse du serveur');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Traitez l'image ou la vidéo d'aujourd'hui ici
//       const mediaType = data.media_type;

//       if (mediaType === 'image') {
//         // Si le média est une image, affichez l'image dans .nasaConteneurToday
//         const imageUrl = data.url;
//         const nasaConteneurToday = document.querySelector('.nasaConteneurToday');
//         const imageElement = document.createElement('img');
//         imageElement.src = imageUrl;
//         nasaConteneurToday.appendChild(imageElement);
//       } else if (mediaType === 'video') {
//         // Si le média est une vidéo, affichez la vidéo dans .nasaConteneurToday
//         const videoUrl = data.url;
//         const nasaConteneurToday = document.querySelector('.nasaConteneurToday');
//         const videoElement = document.createElement('iframe');
//         videoElement.src = videoUrl;
//         nasaConteneurToday.appendChild(videoElement);
//       } else {
//         console.error('Type de média non pris en charge :', mediaType);
//       }
//     })
//     .catch(error => {
//       console.error('Erreur lors de la requête à l\'API de la NASA (aujourd\'hui) :', error);
//     });

//   // Requête pour l'image ou la vidéo de la veille
//   fetch(`https://api.nasa.gov/planetary/apod?api_key=PwT1TbcYPC76WkxXetd77pnwakNT1uNU0ldQK6SC&date=${yesterdayISO}`)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Erreur de réponse du serveur');
//       }
//       return response.json();
//     })
//     .then(data => {
//       // Traitez l'image ou la vidéo de la veille ici
//       const mediaType = data.media_type;

//       if (mediaType === 'image') {
//         // Si le média est une image, affichez l'image dans .nasaConteneurYesterday
//         const imageUrl = data.url;
//         const titre = data.title; 
        
//         const nasaConteneurYesterday = document.querySelector('.nasaConteneurYesterday');
//         const imageElement = document.createElement('img');
//         imageElement.src = imageUrl;
//         nasaConteneurYesterday.appendChild(imageElement);
//         document.createElement('p').innerHTML.titre;
//         // document.querySelector('#nasaTodayTitre').innerHTML.titre;

//       } else if (mediaType === 'video') {
//         // Si le média est une vidéo, affichez la vidéo dans .nasaConteneurYesterday
//         const videoUrl = data.url;
//         const nasaConteneurYesterday = document.querySelector('.nasaConteneurYesterday');
//         const videoElement = document.createElement('iframe');
//         videoElement.src = videoUrl;
//         nasaConteneurYesterday.appendChild(videoElement);

//         document.querySelector('#nasaYesterdayTitre').innerHTML.data.title;
//       } else {
//         console.error('Type de média non pris en charge :', mediaType);
//       }
//     })
//     .catch(error => {
//       console.error('Erreur lors de la requête à l\'API de la NASA (hier) :', error);
//     });
// });
