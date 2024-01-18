const http = require('http')
const fs = require('fs/promises')
const server = http.createServer( async (req, res) => {
  if (req.url = '/') {
   const html = await getHtml()
   res.writeHead(200, { "Content-Type": "text/html" })
   res.end(html)
  } 
})

const getHtml = async () => {
  const data = await fs.readFile('./index.html', {encoding: 'utf8'})
  console.log(data)
  return data
}

server.listen(5173, '127.0.0.1', () => {
  console.log('Serving at 127.0.0.1:5173')
})
