/**
 * This is a sample configuration file for openparty.
 * Copy it to `config.js` in the same directory, and change it to fit your needs.
 */

module.exports = {

  port: 8080,                 // open party listenning port (http)
  bind: "0.0.0.0",            // bound ip - use 127.0.0.1 for localhost use only
  sessionSecret: "changeMe",  // not used yet, but you should change it for security reasons
  password: null,             // change it to set a server password for user access
  shutdownDelay: 0,           // delay before server kill on SIGTERM/SIGINT - useful in production

  maxRooms: 10,               // maximum number of rooms allowed
  maxPlayers: 100,            // maximum number of connected players allowed

  locales: ["en","fr", "es"],
  defaultLocale: "fr",

  name: "Mafia RDI",                   // custom server name
  welcomeMsg: "Un monde de tremperie et d'usurpation vous attend!<br/>Entrez un pseudonyme reconnaissable et commencez à jouer.",             // shown on "home" page
  motd: "Pour commencer à jouer, rejoignez vos amis dans une des parties existantes ou créez en une nouvelle.",                   // shown on "lobby" page
  description: "Une petite application pour jouer à Mafia en tout temps sur votre navigateur. Fait par la RDI, pour la RDI.",            // shown on "about" page
};
