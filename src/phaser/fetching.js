export function fetchingGET() {
  const url = "/api/rating";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.map((part) => {
        console.log(part);
      });
    });
}

export function fetchingPOST(data) {
  const url = "/api/rating/add";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.log(err));
}
export function fetchingPOSTandGetLevel(data) {
  const url = "/api/rating/level";
  console.log(JSON.stringify(data) + " is the data for this fetch");
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => console.log(err));
}
