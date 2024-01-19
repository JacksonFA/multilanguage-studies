(async () => {
  for (let i = 3000; i <= 3011; i++) {
    const response = await fetch(`http://localhost:${i}`);
    const json = await response.json();
    document.getElementById(i).innerHTML = json.message;
  }
})();
