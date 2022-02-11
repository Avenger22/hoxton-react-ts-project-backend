// #region 'Importing anc Config stuff'
import express from 'express'

import {
    items, users, services, companies, 
    favorites, subscribe, articles, coaches
} from "./data/data"

import {
    Item, Service, Coach, Article, Company, Subscribe, Favorite, User
} from './types/typesData'

// const express = require('express');
// const bodyParser = require('body-parser');
// const url = require('url');
// const querystring = require('querystring');

const app = express();
const cors = require('cors')
const PORT: number = 8000;
app.use(cors())

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// #endregion

// #region 'Getting all arrray"
app.get('/', (req, res) => {
    
  res.send(

        `<p style="display:grid; place-items: center; font-size: 26px; color: #000; font-weight: 900;">Welcome to AlbVitaFitness, use / and arrays for navigation in the backend server</p>
        
        <div style = "display: grid; grid-template-rows: repeat(11,0.8fr); grid-gap: 35px; place-items:center; background-color: #191919; height: 100vh; margin: 0 0; paddig: 0 0; box-sizing: border-box;">
            
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

            <a style="color: #fff; text-decoration: none; font-size: 22px;">
                If you want to get random object from the array you can have endpoint random-["name of the array"] and you have use it in front end etc
            </a>

            <a style="color: #fff; text-decoration: none; font-size: 22px;">
                If you want to query like /items?type=proteins etc you can query based on all properties from here backend and fetch in frontend
            </a>

        </div>`

    );

});

app.get('/items', (req, res) => {

    const itemId = req.query.id
    const itemType = req.query.type
    const itemName = req.query.name
    const itemDate = req.query.date
    const itemStock = req.query.stock
    const itemDescription = req.query.description

    // const matchTypeStock = items.filter(item => (item.type === String(itemType)) && (item.stock === Number(itemStock)) )

    const matchId = items.find(item => item.id === Number(itemId))
    const matchType = items.filter(item => item.type === String(itemType))
    
    const matchTypeStock = matchType.filter(item => item.stock === Number(item.stock))
    
    const matchName = items.find(item => item.name === String(itemName))
    const matchDate = items.filter(item => item.date === String(itemDate))
    const matchStock = items.filter(item => item.stock === Number(itemStock))
    const matchDescription = items.filter(item => item.description === String(itemDescription))
    
    if (matchId) {
        res.send(matchId);
    }

    else if (matchName) {
        res.send(matchName)
    }

    else if (matchType.length > 0) {
        res.send(matchType)
    }

    else if (matchDate.length > 0) {
        res.send(matchDate)
    }

    else if (matchStock.length > 0) {
        res.send(matchStock)
    }

    else if (matchDescription.length > 0) {
        res.send(matchDescription)
    }

    else if (matchTypeStock.length > 0) {
        res.send(matchTypeStock)
    }
  
    else {
        res.send(items)
    }
  
});

// #region 'experimental items'
// app.get('/items', (req, res) => {

//     let itemsToSend = items
//     let search = req.query.search as string
  
//     if (search) {
//       itemsToSend = itemsToSend.filter(item =>
//         item.name.toUpperCase().includes(search.toUpperCase())
//       )
//     }
  
//     for (const key in req.query) {

//       const query = req.query[key]
//       const itemKeys = Object.keys(items[0])
  
//       if (itemKeys.includes(key)) {
//         itemsToSend = itemsToSend.filter(
//           // @ts-ignore
//           quote => String(quote[key]) === query
//         )
//       }

//     }
  
//     res.send(itemsToSend)

// })
// #endregion

app.get('/random-items', (req, res) => {
    const randomItem: Item = items[Math.floor(Math.random() * items.length)]
    res.send(randomItem);
});

app.get('/articles', (req, res) => {
    res.send(articles);
});

app.get('/random-articles', (req, res) => {
    const randomArticle: Article = articles[Math.floor(Math.random() * articles.length)]
    res.send(randomArticle);
});

app.get('/coaches', (req, res) => {
    res.send(coaches);
});

app.get('/random-coaches', (req, res) => {
    const randomCoach: Coach = coaches[Math.floor(Math.random() * coaches.length)]
    res.send(randomCoach);
});

app.get('/services', (req, res) => {
    res.send(services);
});

app.get('/random-services', (req, res) => {
    const randomService: Service = services[Math.floor(Math.random() * services.length)]
    res.send(randomService);
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/random-users', (req, res) => {
    const randomUser: User = users[Math.floor(Math.random() * users.length)]
    res.send(randomUser);
});

app.get('/companies', (req, res) => {
    res.send(companies);
});

app.get('/random-companies', (req, res) => {
    const randomCompany: Company = companies[Math.floor(Math.random() * companies.length)]
    res.send(randomCompany);
});

app.get('/favorites', (req, res) => {
    res.send(favorites);
});

app.get('/random-favorites', (req, res) => {
    const randomFavorite: Favorite = favorites[Math.floor(Math.random() * favorites.length)]
    res.send(randomFavorite);
});

app.get('/subscribe', (req, res) => {
    res.send(subscribe);
});

app.get('/random-subscribe', (req, res) => {
    const randomSubscribe: Subscribe = subscribe[Math.floor(Math.random() * subscribe.length)]
    res.send(randomSubscribe);
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

  console.log(

    `-------------------------------------------------------------------------------------

    --------------------------------------------------------------------------------------

        Welcome to AlbVitaFitness backend API, here we have all our data and stuff stored, 
        you can acces it for good use!
        
        Server running on: http://localhost:${PORT}
        
            Go to items : http://localhost:${PORT}/items
            Go to services : http://localhost:${PORT}/services
            Go to coaches : http://localhost:${PORT}/coaches
            Go to subscribe : http://localhost:${PORT}/subscribe
            Go to users : http://localhost:${PORT}/users
            Go to favorites : http://localhost:${PORT}/favorites
            Go to companies : http://localhost:${PORT}/companies
            Go to articles : http://localhost:${PORT}/articles
            
        If you want to go to individual items just add an number id after 
        / like items/1 gets the first item
        
        If you want to get random object from the array you can have endpoint 
        random-["name of the array"] and you have use it in front end etc

        If you want to query like /items?type="proteins" or without "" etc you 
        can query based on all properties from here backend and fetch in frontend

    -----------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------`
    
    );

})
// #endregion