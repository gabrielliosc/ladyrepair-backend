//import http from 'node:http' //inserir o node: para diferenciar de módulos externos
//-> HTTP
    //Método HTTP
    //URL
// const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
//     const { method, url } = req

//     console.log(method, url)

//     return res.end('Hello world')
// })
//CommonJS => require
//ESModules => import/export para utilizar no node tem q inserir no package.json //"type": "module"

import express from 'express'
import { routes }  from './routes/index.ts'

const app = express()

app.use(routes)