const app = require('http').createServer()
const io = require('socket.io')(app)
app.listen(1337, () => {
  console.info('Server is Listening')
})

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' })

  socket.on('attemptLogin', (data) => {
    console.log('Attempting Login')
    console.log(data)
    if ( data.username === data.password) return socket.emit('loginSuccess', { username: data.username, email: 'james@james-black.com', sessionId: 123})
    return socket.emit('loginFailure', { error: 'Invalid username/password combination' })
  })
  socket.on('my other event', (data) => {
    console.log(data)
  })
})
