// imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// models
const Person = require('./models/Person')

// start api
app.use(
	express.urlencoded({
	extended: true,
	}),
)

app.use(express.json())

// connection
mongoose.connect(
'mongodb+srv://henry:4578@cluster0.lojbbih.mongodb.net/?retryWrites=true&w=majority',
)
.then(() => {
	console.log('Conexao a BD bem sucedida!')
	app.listen(3000)
})
.catch((err) => console.log(err))

// requests 
app.get("/", (req, res) => {
	res.json({ message: "Ola Express!" });
}); 

// post one person
app.post('/person', async (req, res) => {
	const { name, salary, approved } = req.body
	const person = {
		name,
		salary,
		approved,
		}
	try {
		await Person.create(person)
		res.status(201).json({ message: 'Pessoa foi inserida com sucesso no sistema!!' })
		} catch (error) {
		res.status(500).json({ erro: error })
		}
})

// get all persons
app.get('/person', async (req, res) => {
	try{
		const people = await Person.find()
		res.status(200).json(people)
		} catch (error) {
		res.status(500).json({ erro: eero })
	}
})

app.get('/person/:id', async (req, res) => {
	const id = req.params.id
	try {
		const person = await Person.findOne({ _id: id})
		res.status (200).json(person)
	}catch (error) {
		res.status(500).json ({ err: error })
	}
})
