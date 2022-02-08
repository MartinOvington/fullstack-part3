require('dotenv').config()
const express = require('express')
const Person = require('./models/person')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('post-body', (request, response) => {
    if (request.method === 'POST') {
        return JSON.stringify(request.body)
    }
    return ''
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-body'))

let persons =
[
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const infoPage = () => (
    `<!DOCTYPE html>
    <div>
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${Date()}</p>
    </div>`
)

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
      response.json(persons)
    })
  })

  app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
      response.json(person)
    })
  })

app.get('/info', (request, response) => {
    response.send(infoPage())
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id != id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'name is missing'
        })
    } else if (!body.number) {
        return response.status(400).json({
            error: 'number is missing'
        })
    } else if (persons.find(person => person.name == body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = new Person ({
        id: Math.floor(Math.random() * 100000),
        name: body.name,
        number: body.number
    })

    person.save().then(savedNote => {
        response.json(savedNote)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})