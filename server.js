/*
CREATE TABLE module
(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    description VARCHAR(512),
    end_date int(15) NOT undefined ,
    begin_date int(15) NOT undefined,
    
    pay_id INT(11)
);
*/
const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT;
const moduleTable = "module_settings";
let Sequelize = require("sequelize"); 
let models = require("./models");

// need to be changed
const mysql = require('mysql2');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// get routes

app.get('/module/:id', (req, res) => {
	let moduleID = req.params.id;

	models.modules.findAll({
		where: {id: moduleID},
		attributes: ['name'],
		include: [{
			model: models.settings,
			through: { attributes: [] },
			attributes: ['name', 'type', 'description', 'endpoint'],
			include :[{
				model: models.options,
				attributes: ['option_name']
			}],
			required: true
		}]
	}).then((modules, err) => {
		if (err) {
			res.sendStatus(400);
			return;
		}
		if (modules.length === 0) {
			res.status(400).send("no rows");

		}
		res.send(modules);
		return;

	}).catch(() => {

		res.status(503).send();
	});

	// models.module_settings.findByPk(moduleID).then((module, err) => {
	// 	if (err) {
	// 		res.sendStatus(400);
	// 		return;
	// 	}
	// 	if (!module) {
	// 		res.status(400).send("no row by that id");

	// 	}
	// 	console.log(module.dataValues);
	// 	res.send(module.dataValues);
	// 	return;

	// }).catch(err => {
	// 	res.sendStatus(503);
	// });
});

app.get('/module', (req, res) => {
 	let moduleID = req.params.id;
	const query = `select * from ${moduleTable};`;

	models.modules.findAll({
		attributes: ['name'],
		include: [{
			model: models.settings,
			through: { attributes: [] },
			attributes: ['name', 'type', 'description', 'endpoint'],
			include :[{
				model: models.options,
				attributes: ['option_name']
			}],
			required: true
		}]
	}).then((modules, err) => {
		if (err) {
			res.sendStatus(400);
			return;
		}
		if (modules.length === 0) {
			res.status(400).send("no rows");

		}
		res.send(modules);
		return;

	}).catch(() => {

		res.status(503).send();
	});
});

// update routes

app.put('/module-description/:id', (req, res) => {
	let moduleID = req.params.id;
	let description = req.body.description;

	if (req.body.description === undefined) {
		res.sendStatus(400);
		return;
	}

	models.module.update({
		description: description
	}, {
		where: {
			id: moduleID
		}
	}).then((result) => {
		console.log(result);
		if (result === 0) {
			res.status(400).send("no row by that id");

		}

		res.send("updated");
		return;
	}).catch(() => {

		res.status(503).send();
	});
});

app.put('/module-begin/:id', (req, res) => {
	let moduleID = req.params.id;
	let begin_date = req.body.start_date;

	if (req.body.start_date === undefined) {
		res.sendStatus(400);
		return;
	}

	models.module.update({
		begin_date: begin_date
	}, {
		where: {
			id: moduleID
		}
	}).then((result) => {
		console.log(result);
		if (result === 0) {
			res.status(400).send("no row by that id");

		}

		res.send("updated");
		return;
	}).catch(() => {

		res.status(503).send();
	});
});

app.put('/module-end/:id', (req, res) => {
	let moduleID = req.params.id;
	let end_date = req.body.end_date;

	if (req.body.end_date === undefined) {
		res.sendStatus(400);
		return;
	}

	models.module.update({
		end_date: end_date
	}, {
		where: {
			id: moduleID
		}
	}).then((result) => {
		console.log(result);
		if (result === 0) {
			res.status(400).send("no row by that id");

		}

		res.send("updated");
		return;
	}).catch(() => {

		res.status(503).send();
	});
});
app.put('/module-all/:id', (req, res) => {
	let moduleID = req.params.id;
	let description = req.body.description;
	let begin_date = req.body.start_date;
	let end_date = req.body.end_date;

	if (req.body.description === undefined || req.body.start_date === undefined || req.body.end_date === undefined) {
		res.sendStatus(400);
		return;
	}

	models.module.update({
		description: description,
		begin_date: begin_date,
		end_date: end_date
	}, {
		where: {
			id: moduleID
		}
	}).then((result) => {
		console.log(result);
		if (result[0] === 0) {
			res.status(400).send("no row by that id");

		}

		res.send("updated");
		return;
	}).catch(() => {

		res.status(503).send();
	});


});
// post routes

app.post('/module', (req, res) => {
	let description = req.body.description;
	let begin_date = req.body.start_date;
	let end_date = req.body.end_date;

	if (req.body.description === undefined || req.body.start_date === undefined || req.body.end_date === undefined) {
		res.sendStatus(400);
		return;
	}

	models.module.create({
		description: description,
		begin_date: begin_date,
		end_date: end_date,
	}).then((result) => {
		console.log(result);
		if (result === 0) {
			res.status(400).send("not created");

		}

		res.sendStatus(201);
		return;
	}).catch(() => {

		res.status(503).send();
	});


});

// delete routes

app.delete('/module/:id', (req, res) => {
	let moduleID = req.params.id;

	models.module.destroy({
		where: {
			id: moduleID
		}
	}).then((result) => {
		console.log(result);
		if (result === 0) {
			res.status(400).send("no row by that id");
			return;
		}

		res.send("deleted");
		return;
	}).catch(() => {

		res.status(503).send();
	});


});
// run server
let server = app.listen(port, () => console.log(`api listening on port ${port}!`));

module.exports = app;