var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id":"233kak",
        "text":"Eggs"
    },
    {
        "id":"dkP345",
        "text":"Milk"        
    },
    {
        "id":"dkcuu7",
        "text":"Bacon"
    },
    {
        "id":"73hdy",
        "text":"Frog Legs"
    }
]

app.get('/ingredients', function(req, res){
    res.send(ingredients);
});

app.post('/ingredients', function(req, res){
    var ingredient = req.body;
    if (!ingredient || ingredient.text === ""){
        res.status(500).send({error: "Your ingredient must have a name"})
    } else {
        ingredients.push(req.body);
        res.status(200).send(ingredients);
    }
    
});

app.put('/ingredients/:ingredientId', function(req, res){
    
    var newText = req.body.text;
    console.log("ingredientID: " + req.params.ingredientId);
    console.log("body text: " + newText);
    if (!newText || newText ==="") {
        res.stats(500).send({error:"You must provide ingredient text"})
    } else {
        var objectFound = false;
        for (var x = 0; x < ingredients.length; x++) {
            var ing = ingredients[x];
            
            if (ing.id === req.params.ingredientId) {
                ingredients[x].text = newText;
                objectFound = true;
                break;
            }
        }
        if (!objectFound) {
            response.status(500).send({error:"Ingredient id not found"});
        } else {
            res.send(ingredients);
        }        
    }
});

app.get('/funions', function(req, res){
    res.send('Give me some funions!')
});

app.listen(3000, function() {
    console.log("First API running on port 3000!")
});