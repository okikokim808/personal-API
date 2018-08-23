// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const new_show = {
    type: "Anime",
    name: "Boku No Hero Academia",
    description: "My Hero Academia is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi, but was later adapted into an anime television series produced by Bones. The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself, and is scouted by the world's greatest hero who shares his powers with Izuku after recognizing his value and enrolls him in a high school for heroes in training.",
    episodes: 63,
    seasons: 3,
    active: true,
    characters: [
        {name: "Izuku Midoriya", Alias: "Deku", quirk: "One for all", isAlive: true},
        {name: "Katsuki Bakugo", Alias: "Bakugo", quirk: "Explosion", isAlive: true},
        {name: "Ochaco Uraka", Alias: "Uravity", quirk: "Gravity", isAlive: true},
        {name: "Tenya Iida", Alias: "Ingenium", quirk: "Engine", isAlive: true},
        {name: "Ejiro Kirishima", Alias: "Red Riot", quirk: "Hardening", isAlive: true},
        {name: "Shoto Todoroki", Alias: "Shoto", quirk: "Half-cold Half-hot", isAlive: true},
        {name: "Shota Aizawa", Alias: "Eraser Head", quirk: "Erasure", isAlive: true},
        {name: "Yagi Toshinori", Alias: "All Might", quirk: "One for all", isAlive: true}
    ]
}

db.Show.create(new_show, (err, show) => {
    if(err){
        return console.log("Error: ", err);
    }
    console.log("Created new show", show._id)
    process.exit();
}) 
// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })
