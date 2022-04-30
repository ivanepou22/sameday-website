const app = require("./server/app");

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
