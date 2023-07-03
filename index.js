// Fetch movies data
fetch('http://localhost:3000/films')
  .then(response => response.json())
  .then(data => {
    
    const filmsList = document.getElementById('films');
    data.forEach(film => {
      const li = document.createElement('li');
      li.classList.add('film', 'item');
      li.textContent = film.title;
      li.addEventListener('click', () => showFilmDetails(film));
      filmsList.appendChild(li);
    });
  })
  .catch(error => console.error(error));

// Show movie details
function showFilmDetails(film) {
  document.getElementById('poster').src = film.poster;
  document.getElementById('title').textContent = film.title;
  document.getElementById('runtime').textContent = `Runtime: ${film.runtime} min`;
  document.getElementById('showtime').textContent = `Showtime: ${film.showtime}`;
  
  const availableTickets = film.capacity - film.tickets_sold;
  const availableTicketsElement = document.getElementById('available-tickets');
  availableTicketsElement.textContent = `Available Tickets: ${availableTickets}`;
  
  if (availableTickets === 0) {
    document.getElementById('buy-ticket').disabled = true;
    availableTicketsElement.classList.add('sold-out');
  } else {
    document.getElementById('buy-ticket').disabled = false;
    availableTicketsElement.classList.remove('sold-out');
  }
}

// Buy ticket
document.getElementById('buy-ticket').addEventListener('click', () => {
  const availableTicketsElement = document.getElementById('available-tickets');
  const availableTickets = parseInt(availableTicketsElement.textContent.split(': ')[1]);
  
  if (availableTickets > 0) {
    availableTicketsElement.textContent = `Available Tickets: ${availableTickets - 1}`;
  }
});
