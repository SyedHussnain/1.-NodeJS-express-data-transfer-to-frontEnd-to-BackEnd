let myExpress = require("express");
let app = myExpress();
app.use(myExpress.json());

let users = [];

app.post("/signup", (req, res) => {
  users.push(req.body);
});

app.get("/all-users", (req, res) => {
  res.json(users);
});

app.delete("/user-delete", (req, res) => {
  let indexFound = users.findIndex((item) => item.id === req.query.id);
  if (indexFound !== -1) {
    users.splice(indexFound, 1);
  }
  res.json({
    success: true,
  });
});

app.post("/abc", (req, res) => {
  let user = users.find((user) => {
    if (
      user.name === req.body.name &&
      user.password === req.body.password &&
      user.company === req.body.company
    ) {
      return true;
    }
  });
  res.json(user);
});

app.listen(8080, () => {
  console.log("Listening Port is Working Which is localhost:8080");
});