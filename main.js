fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => dataUI(data));

function dataUI(fetchData) {
  const list = document.querySelector("#list");

  fetchData.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${obj.name}</h2>
      <h4>${obj.username}</h4>
      <h3>${obj.email}</h3>
      <h3>${obj.phone}</h3>
      <h3>${obj.company.name}</h3>
      <h3>${obj.address.city}, ${obj.address.street}</h3>
    `;

    list.appendChild(card);
  });
}
