// #region 'Importing anc Config stuff'
import express from 'express';
import {
    items, users, services, companies, 
    favorites, subscribe, articles, coaches
} from "./db/db"

const app = express();
const cors = require('cors')
const PORT: number = 8000;
app.use(cors())
// #endregion

// #region 'Getting all arrray"
app.get('/', (req, res) => {

  res.send(`
    <p style="display:grid; place-items: center; font-size: 26px; color: #000; font-weight: 900;">Welcome to AlbVitaFitness, use / and arrays for navigation in the backend server</p>
    
    <div style = "display: grid; grid-template-rows: repeat(8,1.2fr); grid-gap: 35px; place-items:center; background-color: #191919; height: 100vh;">
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/items">Go to Items</a>
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/services">Go to Services</a>
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/users">Go to Users</a>
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/companies">Go to Companies</a>
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/favorites">Go to Favorites</a>
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/subscribe">Go to Subscribe</a>
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/articles">Go to Articles</a>
        <a style="color: #fff; text-decoration: none; font-size: 22px;" href = "/coaches">Go to Coaches</a>
        
        <a style="color: #fff; text-decoration: none; font-size: 22px;">
            If you want to go to individual items just add an number id after / like items/1 gets the first item
        </a>
    </div>`);

});

app.get('/items', (req, res) => {
  res.send(items);
});

app.get('/articles', (req, res) => {
    res.send(articles);
});

app.get('/coaches', (req, res) => {
    res.send(coaches);
});

app.get('/services', (req, res) => {
    res.send(services);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/companies', (req, res) => {
    res.send(companies);
});

app.get('/favorites', (req, res) => {
    res.send(favorites);
});

app.get('/subscribe', (req, res) => {
    res.send(subscribe);
});
// #endregion

// #region 'Getting individual objects'
app.get('/items/:id', (req, res) => {

  const id = Number(req.params.id)
  const match = items.find((item) => item.id === id)
  
  if (match) {
    res.send(match)
  } 
  
  else {
    res.status(404).send({ error: 'Item not found.' })
  }

})

app.get('/coaches/:id', (req, res) => {

    const id = Number(req.params.id)
    const match = coaches.find((coach) => coach.id === id)

    if (match) {
        res.send(match)
    } 

    else {
        res.status(404).send({ error: 'Item not found.' })
    }

})

app.get('/services/:id', (req, res) => {

    const id = Number(req.params.id)
    const match = services.find((service) => service.id === id)

    if (match) {
        res.send(match)
    } 

    else {
        res.status(404).send({ error: 'Service not found.' })
    }

})

app.get('/favorites/:id', (req, res) => {

    const id = Number(req.params.id)
    const match = favorites.find((favorite) => favorite.id === id)

    if (match) {
        res.send(match)
    } 

    else {
        res.status(404).send({ error: 'Favorite not found.' })
    }

})

app.get('/subscribe/:id', (req, res) => {

    const id = Number(req.params.id)
    const match = subscribe.find((sub) => sub.id === id)

    if (match) {
        res.send(match)
    } 

    else {
        res.status(404).send({ error: 'Sub not found.' })
    }

})

app.get('/companies/:id', (req, res) => {

    const id = Number(req.params.id)
    const match = companies.find((company) => company.id === id)

    if (match) {
        res.send(match)
    } 

    else {
        res.status(404).send({ error: 'Company not found.' })
    }

})

app.get('/articles/:id', (req, res) => {

  const id = Number(req.params.id);
  const match = articles.find((article) => article.id === id)
  
  if (match) {
    res.send(match)
  } 
  
  else {
    res.status(404).send({ error: 'Article not found.' })
  }

})

app.get('/users/:id', (req, res) => {

    const id =  Number(req.params.id);
    const match = users.find((user) => user.id === id)
    
    if (match) {
      res.send(match)
    } 
    
    else {
      res.status(404).send({ error: 'User not found.' })
    }
  
})
// #endregion

// #region 'Console log info about API'
app.listen(PORT, () => {
  console.log(`
  -------------------------------------------------------------------------------------------------------------------
  Welcome to AlbVitaFitness backend API, here we have all our data and stuff stored, you can acces it for good use!
  
  Server running on: http://localhost:${PORT}
  
  Go to items : http://localhost:${PORT}/items
  Go to services : http://localhost:${PORT}/services
  Go to coaches : http://localhost:${PORT}/coaches
  Go to subscribe : http://localhost:${PORT}/subscribe
  Go to users : http://localhost:${PORT}/users
  Go to favorites : http://localhost:${PORT}/favorites
  Go to companies : http://localhost:${PORT}/companies
  Go to articles : http://localhost:${PORT}/articles
  
  If you want to go to individual items just add an number id after / like items/1 gets the first item
  -------------------------------------------------------------------------------------------------------------------------`);
})
// #endregion