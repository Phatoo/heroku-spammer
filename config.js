var cfg = {
	app: {
		port: 5000,
		secretString: "123"
	},
	db: {
		mongoUrl: 'mongodb://localhost/bender-13'
	}
}

if (process.env.NODE_ENV == 'production') {

    cfg.app.url = 'http://bender-13.herokuapp.com'
    cfg.app.port = process.env.PORT;
    // cfg.db.mongoUrl = process.env.MONGOHQ_URL;
}

module.exports = cfg;