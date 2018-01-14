const Discord = require('discord.js'); //rattache à discord

var bot = new Discord.Client(); //crée le bot mais ne le connecte pas
var prefix = ("!--");
var a

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};


bot.on('ready', () => {
  console.log('bot ready!');
});

bot.login('NDAxODAzOTQ2MDMwNzkyNzA1.DTvgyA.8YzlJ93qAPKeb_-kLZzGWXX4q_I');

bot.on('message', message => {
  if (message.content === "!--6") {
    a = getRandomInt(6);
    console.log(a);
    a = a + 1;
    message.reply(a);
    console.log(a);

  }

  if (message.content === "!--10") {
    a = getRandomInt(10);
    console.log(a);
    a = a + 1;
    message.reply(a);
    console.log(a);

  }

  if (message.content === "!--20") {
    a = getRandomInt(20);
    console.log(a);
    a = a + 1;
    message.reply(a);
    console.log(a);

  }

  if (message.content === prefix + "help") {
    message.channel.sendMessage("Voici les commandes du bot :\n !--help pour afficher les commandes \n !--6 pour lancer le dé à 6 faces\n !--10 pour lancer le dé à 10 faces\n !--20 pour lancer le dé à 20 faces");
    console.log("commandes help demandée ! ")
  }
});
