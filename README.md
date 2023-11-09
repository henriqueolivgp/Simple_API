
<p text-align="center" align="center">
  
  <h1 align="center">Simple API</h1>
  
  This project is a simple API made in <a href="https://nodejs.org/en">node.js</a> (javascript back-end framework)
</p>

## 🧭 Table of contents

- [Layout](#-layout)
- [Learning and more Implementations](#-learning-and-more-implementations)
- [Technologies Used](#-technologies-used)
- [Folder Structure](#-folder-structure)
- [Running the Project](#-running-the-project)
  - [Back-end](#back-end)
  - [Front-end Web](#front-end-web)
  - [Mobile](#mobile)
- [Routes](-routes)
- [License](#-license)
- [Author](#-author)

## 👏 Learning and more Implementations

In this project i learnded how it works one API and what are your's requests.

## 💡 Technologies Used

- [x] [JavaScript](https://www.javascript.com/)
- [x] [Node.js](https://nodejs.org/en)
```version: "18.18.0"```

## 📂 Folder Structure

```plainText
Simple_API
.
├── API                    
├── API                         
│   ├── img                          # Insomnia prints     
│   ├── index.js                    # Main file          
│   ├── models     
│           └── Person.js           # File responsible for table person criation in mongoose database 
│   ├── node_modules                 
│   ├── package.json             
│   ├── package-lock.json              
.
└── README.md
```

## 🚀 Running the Project

### Back-end

Clone the project

```bash
  git clone https://github.com/henriqueolivgp/Simple_API.git
```

Enter the project directory

```bash
  cd Simple-API
```

Install with dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 📝 Routes
Get All for test API
```js
  app.get("/", (req, res) => {
  res.json({ message: "Ola Express!" });
});
```
Post new person
```js
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
```
Get All users
```js
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
```
Get one person by ID
```js
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
```
Get one person by ID with patch
```js
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
```
Delete one person by ID
```js
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
```

## 🌎 License

This project is under the MIT license. See the [LICENSE](https://github.com/henriqueolivgp/MyREADME/blob/main/LICENSE) file for more details.

## ✒ Author

<p align="center">
  <svg width="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <image width="100%" height="100%" xlink:href="https://github.com/henriqueolivgp/MyREADME/raw/main/assets/henriqueoliv_gp.svg" />
  </svg>

  <h3 align="center">Henrique Oliveira</h3>
  
  <p align="center">  
    Made with love and hate 😅, get in touch!
  </p>
</p> 
  
<div align="center">

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-1f6feb?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henrique-oliveira-gp)](https://www.linkedin.com/in/henrique-oliveira-gp) 
[![Gmail Badge](https://img.shields.io/badge/-henriqueoliveira.g.p-1f6feb?style=flat-square&logo=Gmail&logoColor=white&link=mailto:henriqueoliveira.g.p)](mailto:henriqueoliveira.g.p@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-1f6feb?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/henriqueolivgp)](https://github.com/henriqueolivgp)

</div>  
  
 
