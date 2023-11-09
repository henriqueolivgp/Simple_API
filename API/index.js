// imports
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// models
const Person = require("./models/Person");

// start api
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// connection
mongoose
  .connect(
    "mongodb+srv://henry:4545@cluster0.selfb9i.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexao a BD bem sucedida!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

// requests
app.get("/", (req, res) => {
  res.json({ message: "Ola Express!" });
});

// post one person
app.post("/person", async (req, res) => {
  const { name, salary, approved } = req.body;
  const person = {
    name,
    salary,
    approved,
  };
  try {
    await Person.create(person);
    res
      .status(201)
      .json({ message: "Person inserted successfully inside the system!!" });
  } catch (error) {
    res.status(500).json({ erro: error });
  }
});

// get all persons
app.get("/person", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ erro: eero });
  }
});

// get person by Id
app.get("/person/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      res.status(422).json({ message: "Person Not Found!!" });
      return;
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ err: error });
  }
});

// get person by id
app.patch("/person/:id", async (req, res) => {
	const id = req.params.id
	const { name, salary, approved } = req.body
	const person = {
		name,
		salary,
		approved,
	}
	try{
		const updatePerson = await Person.updateOne({ _id: id }, person)
		if( updatePerson.matachedCount === 0){
			res.status(422).json({ message: 'Person Not Found!!' })
			return
		}
		res.status(200).json(person)
	} catch (error) {
		res.status(500).json({ error: error})
	}
});

// delete person by Id
app.delete("/person/:id", async (req, res) => {
	const id = req.params.id;

	const person = await Person.findOne({ _id: id });
    if (!person) {
      res.status(422).json({ message: "Person Not Found!!" });
      return
    }
	try {
	  await Person.deleteOne({ _id: id });
		res.status(200).json({ message: "Person as been removed successfully" });
	  } catch (error){
	  res.status(500).json({ erro: error });
	  }
})
