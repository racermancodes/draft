
import express, { Express, Request, Response } from 'express';

const app:Express = express()
const port:number = 3000

app.get('/', async  (req:Request, res:Response) => res.send("Builder ON"))

app.listen(port, () => {
  console.log(`Builder ativo na porta ${port}`)
})