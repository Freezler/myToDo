
const r = require
const e = r('express')
const x = r('body-parser')
const a = e()
const c = console

a.use(x)

a.post('/', function (q, w) {
  q.body
})
a.listen(3000, () => {
  c.log("Listening on http://localhost:3000.")
})