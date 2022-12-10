fetch("http://127.0.0.1:80/message/3")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    fetch("https:/127.0.0.1:80/submit", {
      headers: { "content-type": "application/json" },
      body: data,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });
  });

