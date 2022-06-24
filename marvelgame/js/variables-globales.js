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
["/images/sc(1).webp", "/images/sc(2).webp"],
["/images/sc(3).webp", "/images/sc(4).webp"],
["/images/sc(5).webp", "/images/sc(6).webp", "/images/sc(7).webp", "/images/sc(8).webp"],
["/images/sc(9).webp", "/images/sc(10).webp", "/images/sc(11).webp", "/images/sc(12).webp"],
["/images/sc(13).webp", "/images/sc(14).webp", "/images/sc(15).webp", "/images/sc(16).webp"]
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
