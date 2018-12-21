db.movieDetails.find(
	{
		$or:[
			{"tomato.meter":{$gt:95}},
			{"metacritic":{$gt:88}}
		]
	},
	{
		_id:0, title:1, "tomato.meter":1, "metacritic":1
	}
)

db.movieDetails.find(
	{
		$and:[
			{"tomato.meter":{$gt:95}},
			{"metacritic":{$gt:88}}
		]
	},
	{
		_id:0, title:1, "tomato.meter":1, "metacritic":1
	}
)

db.movieDetails.find(
	{
		{"tomato.meter":{$gt:95}},
		{"metacritic":{$gt:88}
	}
	,
	{
		_id:0, title:1, "tomato.meter":1, "metacritic":1
	}
)

db.movieDetails.find(
	{$and:[
		{"metacritic":{$ne:null}},
		{"metacritic":{$exists:true}}
		]
	},	
	{
		_id:0, title:1, metacritic:1
	}
)

db.movieDetails.find(
	{
		{"metacritic":{$ne:null}},
		{"metacritic":{$exists:true}
	},	
	{
		_id:0, title:1, metacritic:1
	}
)

db.movieDetails.find({$or:[{"tomato.meter":{$gt:95}},{"metacritic":{$gt:88}}]},{_id:0, title:1, "tomato.meter":1, "metacritic":1})

db.shipwrecks.find({$or:[{watlev:"equal dry"},{depth:0}]}).found()