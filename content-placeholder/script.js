const cardEl = document.querySelector(".card");

function loadContent() {
  const markUp = `
  <img
    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
    alt="placeholder image"
    class="card-img"
  />
  <h3 class="card-h3">Lorem ipsum dolor sit amet</h3>
  <p class="card-p">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
    nihil.
  </p>
  <div class="author">
    <img
      src="https://randomuser.me/api/portraits/men/45.jpg"
      alt="Random user image"
      class="author-img"
    />
    <div class="description">
      <h3 class="author-name">John Doe</h3>
      <p class="date">Oct 08, 2020</p>
    </div>
  </div>
  `;
  cardEl.innerHTML = markUp;
}

setTimeout(loadContent, 2000);
