const mongoose = require('mongoose');

var DataSchema = mongoose.Schema({
	principle : {
		type : Number,
		//required : true
	},

	rate : {
		type : Number,
		//required : true
	},

	time : {
		type : Number,
		//required : true
	}
});

module.exports = mongoose.model('Data', DataSchema, "interestData");
