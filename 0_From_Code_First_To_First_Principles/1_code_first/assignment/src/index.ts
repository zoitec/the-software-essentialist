import * as express from 'express'
import { Request, Response } from 'express'
// import { createConnection, Connection } from 'typeorm';
import 'reflect-metadata';
import { User } from './entities/User'; // Import your User entity class
import { myDataSource } from './app-data-source';
const port = 3000
// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err)
  })


// create and setup express app
const app = express()
app.use(express.json())

// register routes
app.get("/users", async function (req: Request, res: Response) {
  const users = await myDataSource.getRepository(User).find()
  res.json(users)
})

app.get("/users/:id", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(User).findOneBy({
    id: Number(req.params.id),
  })
  return res.send(results)
})

app.post("/users", async function (req: Request, res: Response) {
  const user = await myDataSource.getRepository(User).create(req.body)
  const results = await myDataSource.getRepository(User).save(user)
  return res.send(results)
})

app.put("/users/:id", async function (req: Request, res: Response) {
  const user = await myDataSource.getRepository(User).findOneBy({
    id: Number(req.params.id),
  })
  myDataSource.getRepository(User).merge(user, req.body)
  const results = await myDataSource.getRepository(User).save(user)
  return res.send(results)
})

app.delete("/users/:id", async function (req: Request, res: Response) {
  const results = await myDataSource.getRepository(User).delete(req.params.id)
  return res.send(results)
})

// start express server
//app.listen(3000)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
