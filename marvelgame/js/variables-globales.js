var modoRelax = false;
var movimientos = 0;
var cronometro;
//var grupoTarjetas = [
//  ["🦄", "🍦"],
//  ["🌈", "👽"],
//  ["👾", "🤖", "👹", "👺"],
//  ["🤡", "💩", "🎃", "🙀"],
//  ["☠️", "👾", "😽", "😼"]
//];

var grupoTarjetas = [
["https://elderbruno84.github.io/marvelgame/images/sc(1).webp", "https://elderbruno84.github.io/marvelgame/images/sc(2).webp"],
["https://elderbruno84.github.io/marvelgame/images/sc(3).webp", "https://elderbruno84.github.io/marvelgame/images/sc(4).webp"],
["https://elderbruno84.github.io/marvelgame/images/sc(5).webp", "https://elderbruno84.github.io/marvelgame/images/sc(6).webp", "https://elderbruno84.github.io/marvelgame/images/sc(7).webp", "https://elderbruno84.github.io/marvelgame/images/sc(8).webp"],
["https://elderbruno84.github.io/marvelgame/images/sc(9).webp", "https://elderbruno84.github.io/marvelgame/images/sc(10).webp", "https://elderbruno84.github.io/marvelgame/images/sc(11).webp", "https://elderbruno84.github.io/marvelgame/images/sc(12).webp"],
["https://elderbruno84.github.io/marvelgame/images/sc(13).webp", "https://elderbruno84.github.io/marvelgame/images/sc(14).webp", "https://elderbruno84.github.io/marvelgame/images/sc(15).webp", "https://elderbruno84.github.io/marvelgame/images/sc(16).webp"]
];

var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60
  }
];
