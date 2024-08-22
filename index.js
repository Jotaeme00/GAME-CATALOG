const express = require('express');
const app = express();

app.use(express.json());


const games = [ 
{   
        "id": 1,
        "name": "Zelda",
        "genre": "RPG",
       "releaseDate": "2015",
       "platform": "Playstation 4",
       "rating": 2000   
},  
{   
    "id": 2,
        "name": "FIFA",
        "genre": "Esportes",
       "releaseDate": "2024",
       "platform": "Playstation 4/5",
       "rating": 2000   
},
{
    "id": 3,
        "name": "Resident Evil 6",
        "genre": "Survival",
       "releaseDate": "2016",
       "platform": "Multiplataform",
       "rating": 2000   
},
{   
    "id": 4,
        "name": "Fortnite",
        "genre": "Battle Royale",
       "releaseDate": "2015",
       "platform": "Multiplataform",
       "rating": 2000  
}
]

  
/*app.get('/games', (req, res) => {   
    res.send(games)
})
*/

app.get('/games', (req, res) => {
    res.json(games);
  });


app.post('/games', (req, res) => {   
    const { id, name, genre, releaseDate, platform, rating} = req.body;
    const game = { id, name, genre, releaseDate, platform, rating };
    games.push(game);
    res.status(201).json(game);
})


app.put('/games/:id', (req, res) => {    
    const {id} = req.params;
    const { name, genre, releaseDate, platform, rating} = req.body;
    const game = games.find (g => g.id == id);

    if (game){  
        game.name = name;
        game.genre = genre;
        game.releaseDate = releaseDate;
        game.platform = platform;
        game.rating = rating;
        res.json(game)  
    } else {    
        res.status(404).send('Game not found')
    }
    
})

app.delete('/games/:id', (req, res) => {    
    const {id} = req.params;
    const index = games.findIndex(g => g.id == id);

    if ( index !== -1) {    
        games.splice(index, 1);
        res.status(204).send();
    } else {    
        res.status(404).send('Game not found')
    }
})



app.get('/', (req,res) => { 
    res.send('Hello World');
});

app.listen(3000, () => {    
    console.log('Server is running on http://localhost:3000');
});