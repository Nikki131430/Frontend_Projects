let buses = [
    { number: "BUS101", time: "08:00 AM", driver: "Raj Singh", destination: "Delhi", seats: 5 },
    { number: "BUS102", time: "09:30 AM", driver: "Anita Verma", destination: "Mumbai", seats: 3 },
    { number: "BUS103", time: "11:00 AM", driver: "Mohit Sharma", destination: "Delhi", seats: 2 },
    { number: "BUS104", time: "01:00 PM", driver: "Priya Reddy", destination: "Chennai", seats: 4 }
  ];
  
  const busList = document.getElementById("busList");
  const historyList = document.getElementById("historyList");
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modalMessage");
  
  // Load booking history from localStorage
  function loadHistory() {
    const history = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    historyList.innerHTML = "";
    history.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      historyList.appendChild(li);
    });
  }
  
  function saveHistory(entry) {
    const history = JSON.parse(localStorage.getItem("bookingHistory")) || [];
    history.push(entry);
    localStorage.setItem("bookingHistory", JSON.stringify(history));
    loadHistory();
  }
  
  function searchBuses() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const dateInput = document.getElementById("dateInput").value;
    const filtered = buses.filter(bus => bus.destination.toLowerCase().includes(searchInput));
  
    if (searchInput && dateInput) {
      saveHistory(`${searchInput.toUpperCase()} - ${dateInput}`);
    }
  
    displayBuses(filtered);
  }
  
  function displayBuses(busArray) {
    busList.innerHTML = "";
    if (busArray.length === 0) {
      busList.innerHTML = "<p>No buses found.</p>";
      return;
    }
  
    busArray.forEach((bus, index) => {
      const card = document.createElement("div");
      card.className = "bus-card";
      card.innerHTML = `
        <strong>Bus Number:</strong> ${bus.number}<br>
        <strong>Time:</strong> ${bus.time}<br>
        <strong>Driver:</strong> ${bus.driver}<br>
        <strong>Destination:</strong> ${bus.destination}<br>
        <strong>Seats Left:</strong> ${bus.seats}<br>
        <button ${bus.seats === 0 ? "disabled" : ""} onclick="bookSeat(${index})">Book Seat</button>
      `;
      busList.appendChild(card);
    });
  }
  
  function bookSeat(index) {
    if (buses[index].seats > 0) {
      buses[index].seats--;
      displayBuses(buses);
      showModal(`Seat booked on ${buses[index].number} to ${buses[index].destination} at ${buses[index].time}.`);
    }
  }
  
  function showModal(message) {
    modalMessage.textContent = message;
    modal.classList.remove("hidden");
  }
  
  function closeModal() {
    modal.classList.add("hidden");
  }
  
  // Live Clock
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleString();
  }
  setInterval(updateClock, 1000);
  
  // Initialize
  window.onload = () => {
    loadHistory();
    displayBuses(buses);
    updateClock();
  };
  