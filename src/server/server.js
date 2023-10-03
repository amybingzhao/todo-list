const express = require("express");
const itemManager = require("./itemManager");
// post new item

// post move item to column

// get items

// post updated item

// item: id, content, columnId
// columns: id, name
const app = express()
app.use(express.json());
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get("/columns", async (req, res) => {
  const columns = await itemManager.getColumns()
  res.json({ columns })
})
app.get("/items", async (req, res) => {
  const items = await itemManager.getItems()
  res.json({ items })
});

app.post('/items/new', async (req, res) => {
  try {
    await itemManager.createNewItem(req.body.item)
    res.status(200).send()
  } catch (err) {
    console.log("FAILED")
    console.log(err)
    res.status(500).send()
  }
});

app.post('/items/update', async (req, res) => {
  await itemManager.updateItem(req.body.item)
  res.status(200).send()
});

app.listen(port, () => {
  console.log(`Running server on port ${port}`)
});