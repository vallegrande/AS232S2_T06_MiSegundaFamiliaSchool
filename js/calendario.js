const MAIN_PATH = "http://localhost:3000/api/";

const date = new Date();
let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

fetch(MAIN_PATH + "dates/" + currentDate)
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  })
  .then(data => {
    if (data != null) {
      const currentDateFormatted = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
      const announcement = `<h1> ${currentDateFormatted} </h1>
            <h2>${data.NAMECAL}</h2>
            <p>${data.DESCRIPTION}</p>`;
      displayAnnouncement(announcement);
    } else {
      console.error("No se encontraron datos para la fecha actual.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  function displayAnnouncement(announcement) {
    const marqueeContainer = document.getElementById("marqueeContainer");
    marqueeContainer.innerHTML = announcement;
    console.log(announcement);
}
