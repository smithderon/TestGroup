    //Video juegos
    fetch(`https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple`)
    .then(function(it){
        return it.json()
    })
    .then((returned) =>{
        console.log(returned)
    })
    //General knowledge
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`)
    .then(function(it){
        return it.json()
    })
    .then((returned) =>{
        console.log(returned)
    })

    //mixed
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`)
    .then(function(it){
        return it.json()
    })
    .then((returned) =>{
        console.log(returned)
    })

    //History
    fetch(`https://opentdb.com/api.php?amount=10&category=23`)
    .then(function(it){
        return it.json()
    })
    .then((returned) =>{
        console.log(returned)
    })

    //Japanese Anime/Manga
    fetch(`https://opentdb.com/api.php?amount=10&category=31&difficulty=medium`)
    .then(function(it){
        return it.json()
    })
    .then((returned) =>{
        console.log(returned)
    })