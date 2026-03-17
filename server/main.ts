import Fastify from "fastify";
import 'dotenv/config'

const app = Fastify()
const port = Number(process.env.PORT)

app.get("/", async (request, reply) => {

})

app.listen({ port: port }, () => {
    console.log(`Server running on port ${port}`)
})