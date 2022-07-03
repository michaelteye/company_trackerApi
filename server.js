const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000
app.use(cors())
const CompanyTracker = {
    "google":{
        "website":"https://www.google.com/",
        "Industry":'focuses on artificial intelligence, search engine technology, online advertising, cloud computing, computer sofwares, quantum computing',
        "year of establishment":"September 4, 1998, Menlo Park",
        'Founders':"Larry Page",
        "Key People":"Sundar Pichal(CEO)",
        'Location':'Mountain View, California, United States',
    },
    "amazon":{
        "website":"https://www.amazon.com/",
        "Industry":'E-commerce,Cloud Computing, Cloud Computing',
        "year of establishment":"July 5, 1994, Bellevu",
        'Founders':"Jeff Bezos",
        "Key People":"Andy Jassy(CEO)",
        'Location':'Bellevue, Washington, United States',
    },
    "apple":{
        "website":"https://www.apple.com/",
        "Industry":'allow users, who sign-up for free profile, share pictures, music, videos and articles',
        "year of establishment":"April 1, 1976 in los Altos, Califonia, U.S",
        'Founders':"Steve Jobs",
        "Key People":"Tim Cook(CEO)",
        'Location':'Los Altos, California, United States',
    },
    "meta":{
        "website":"https://www.facebook.com/",
        "Industry":'focuses on artificial intelligence, search engine technology, online advertising, cloud computing, computer sofwares, quantum computing',
        "year of establishment":"February 2004, Cambridge, Massachusetts, United State",
        'Founders':"Mark Zuckerberg",
        "Key People":"Mark Zuckerberg(CEO)",
        'Location':'Meta Park, California, United States',
    },
    "microsoft":{
        "website":"https://www.microsoft.com/",
        "Industry":'Consulting,product and solution support services, certify computer system integrators and developers',
        "year of establishment":"April 4, 1975,in Albuquerque,New Mexico,U.S",
        'Founders':"Bill Gates and Paul Allen",
        "Key People":"Satya Nadella(CEO)",
        'Location':'One Microsoft Way Redmod, Washington, United States',
    },
    "linkedIn":{
        "website":"https://www.linkedin.com/",
        "Industry":'A social network that focus on professional networking and career development',
        "year of establishment":"May 5 2003,Mountain View, California",
        'Founders':"Reid Hoffman Eric",
        "Key People":"Ryan ROsiansky(CEO)",
        'Location':'Sunnyvale, California, United States',
    },
    "berkshine_hathaway_inc":{
        "website":"https://www.berkshirehathaway.com/",
        "Industry":'Diversified investments, Property & casualty insurance, Utilities, Restaurants,Food processing',
        "year of establishment":"1839, New Bedford,Massachusetts, United States",
        'Founders':"Oliver and Warren Buffett",
        "Key People":"Warren E Buffett(CEO)",
        'Location':'Kiewit, Omaha, Nebraska, United States',
    },
    "tesla_inc":{
        "website":"https://www.tesla.com/",
        "Industry":'Vehicle servicing Charging Insurance, Softwares Update and upgrades Premium Connectivity',
        "year of establishment":"July 1,San Carlos, California,United States",
        'Founders':"Martin Eberhard",
        "Key People":"Elon Musk(CEO)",
        'Location':'Palo Alto, California, United States',
    },
    "vista_inc":{
        "website":"https://vista.com/",
        "Industry":'A full range of domestic transactions procesing services, from credit and debit cards to funds transfer',
        "year of establishment":"September 1958, Fresno, California, United States",
        'Founders':"Dee Hock",
        "Key People":"Alfred F. kelly Jr(CEO)",
        'Location':'Foster City, California, United States',
    },
    "invalid":{
        "website":"invalid",
        "Industry":"Invalid",
        "year of establishment":"invalid",
        "founder":"invalid",
        "Key People":"invalid",
        "Location":"invalid"
    }
}
app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api/:companyName',(req,res)=>{
    const companyName = req.params.companyName.toLowerCase()
    if(CompanyTracker[companyName]){
        res.json(CompanyTracker[companyName])
    }
    else{
        res.json(CompanyTracker['invalid'])
    }
})
app.listen(PORT, ()=>{
    console.log('the port is running')
})



