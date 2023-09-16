fetch("https://api.countrystatecity.in/v1/countires", {
  headers: {
    "X-CSCAPI-KEY": "API_KEY",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
