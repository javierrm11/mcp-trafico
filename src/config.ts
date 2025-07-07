// config.js
const paisesLatitudLong:any = {
    "Argentina": {
        "latitud": -38.4161,
        "longitud": -63.6167
    },
    "Bolivia": {
        "latitud": -16.5000,
        "longitud": -68.1193
    },
    "Brasil": {
        "latitud": -14.2350,
        "longitud": -51.9253
    },
    "Chile": {
        "latitud": -35.6751,
        "longitud": -71.5430
    },
    "Colombia": {
        "latitud": 4.5709,
        "longitud": -74.2973
    },
    "Ecuador": {
        "latitud": -1.8312,
        "longitud": -78.1834
    },
    "Paraguay": {
        "latitud": -23.4424,
        "longitud": -58.4438
    },
    "Perú": {
        "latitud": -9.1899,
        "longitud": -75.0152
    },
    "Uruguay": {
        "latitud": -32.5228,
        "longitud": -55.7658
    },
    "Venezuela": {
        "latitud": 6.4238,
        "longitud": -66.5897
    },
    "España": {
        "latitud": 40.4637,
        "longitud": -3.7492
    },
    "México": {
        "latitud": 23.6345,
        "longitud": -102.5528
    },
    "Estados Unidos": {
        "latitud": 37.0902,
        "longitud": -95.7129
    },
    "Canadá": {
        "latitud": 56.1304,
        "longitud": -106.3468
    },
    "Reino Unido": {
        "latitud": 55.3781,
        "longitud": -3.4360
    },
    "Alemania": {
        "latitud": 51.1657,
        "longitud": 10.4515
    },
    "Francia": {
        "latitud": 46.6034,
        "longitud": 1.8883
    },
    "Italia": {
        "latitud": 41.8719,
        "longitud": 12.5674
    },
    "Japón": {
        "latitud": 36.2048,
        "longitud": 138.2529
    },
    "China": {
        "latitud": 35.8617,
        "longitud": 104.1954
    },
    "India": {
        "latitud": 20.5937,
        "longitud": 78.9629
    },
    "Rusia": {
        "latitud": 61.5240,
        "longitud": 105.3188
    },
    "Australia": {
        "latitud": -25.2744,
        "longitud": 133.7751
    },
    "Sudáfrica": {
        "latitud": -30.5595,
        "longitud": 22.9375
    },
    "Egipto": {
        "latitud": 26.8206,
        "longitud": 30.8025
    },
    "Arabia Saudita": {
        "latitud": 23.8859,
        "longitud": 45.0792
    },
    "Turquía": {
        "latitud": 38.9637,
        "longitud": 35.2433
    },
    "Indonesia": {
        "latitud": -0.7893,
        "longitud": 113.9213
    },
    "Tailandia": {
        "latitud": 15.8700,
        "longitud": 100.9925
    },
    "Malasia": {
        "latitud": 4.2105,
        "longitud": 101.9758
    },
    "Filipinas": {
        "latitud": 12.8797,
        "longitud": 121.7740
    },
    "Corea del Sur": {
        "latitud": 35.9078,
        "longitud": 127.7669
    },
    "Vietnam": {
        "latitud": 14.0583,
        "longitud": 108.2772
    },
    "Suecia": {
        "latitud": 60.1282,
        "longitud": 18.6435
    },
    "Noruega": {
        "latitud": 60.4720,
        "longitud": 8.4689
    },
    "Finlandia": {
        "latitud": 61.9241,
        "longitud": 25.7482
    },
    "Polonia": {
        "latitud": 51.9194,
        "longitud": 19.1451
    },
    "Países Bajos": {
        "latitud": 52.1326,
        "longitud": 5.2913
    },
    "Bélgica": {
        "latitud": 50.8503,
        "longitud": 4.3517
    },
    "Suiza": {
        "latitud": 46.8182,
        "longitud": 8.2275
    },
    "Austria": {
        "latitud": 47.5162,
        "longitud": 14.5501
    },
    "Grecia": {
        "latitud": 39.0742,
        "longitud": 21.8243
    },
    "Portugal": {
        "latitud": 39.3999,
        "longitud": -8.2245
    },
    "República Checa": {
        "latitud": 49.8175,
        "longitud": 15.4730
    },
    "Hungría": {
        "latitud": 47.1625,
        "longitud": 19.5033
    },
    "Rumanía": {
        "latitud": 45.9432,
        "longitud": 24.9668
    },
    "Ucrania": {
        "latitud": 48.3794,
        "longitud": 31.1656
    },
    "Bulgaria": {
        "latitud": 42.7339,
        "longitud": 25.4858
    },
    "Serbia": {
        "latitud": 44.0165,
        "longitud": 21.0059
    },
    "Croacia": {
        "latitud": 45.1000,
        "longitud": 15.2000
    },
    "Eslovaquia": {
        "latitud": 48.6690,
        "longitud": 19.6990
    },
    "Eslovenia": {
        "latitud": 46.1512,
        "longitud": 14.9955
    },
    "Dinamarca": {
        "latitud": 56.2639,
        "longitud": 9.5018
    },
    "Islandia": {
        "latitud": 64.9631,
        "longitud": -19.0208
    },
    "Irlanda": {
        "latitud": 53.4129,
        "longitud": -8.2439
    },
    "Malta": {
        "latitud": 35.9375,
        "longitud": 14.3754
    },
    "Luxemburgo": {
        "latitud": 49.6118,
        "longitud": 6.1319
    },
    "Liechtenstein": {
        "latitud": 47.1660,
        "longitud": 9.5554
    },
    "Mónaco": {
        "latitud": 43.7384,
        "longitud": 7.4246
    },
    "San Marino": {
        "latitud": 43.9333,
        "longitud": 12.4667
    },
    "Andorra": {
        "latitud": 42.5063,
        "longitud": 1.5211
    },
    "Ciudad del Vaticano": {
        "latitud": 41.9029,
        "longitud": 12.4534
    },
    "Kosovo": {
        "latitud": 42.6026,
        "longitud": 20.9020
    },
    "Montenegro": {
        "latitud": 42.7087,
        "longitud": 19.3744
    },
    "Macedonia del Norte": {
        "latitud": 41.6086,
        "longitud": 21.7453
    },
    "Albania": {
        "latitud": 41.1533,
        "longitud": 20.1683
    },
    "Bosnia y Herzegovina": {
        "latitud": 43.9159,
        "longitud": 17.6791
    },
    "Georgia": {
        "latitud": 42.3154,
        "longitud": 43.3569
    },
    "Armenia": {
        "latitud": 40.0691,
        "longitud": 45.0382
    },
    "Azerbaiyán": {
        "latitud": 40.1431,
        "longitud": 47.5769
    },
    "Kazajistán": {
        "latitud": 48.0196,
        "longitud": 66.9237
    },
    "Uzbekistán": {
        "latitud": 41.3775,
        "longitud": 64.5853
    },
    "Turkmenistán": {
        "latitud": 38.9697,
        "longitud": 59.5563
    },
    "Kirguistán": {
        "latitud": 41.2044,
        "longitud": 74.7661
    },
    "Tayikistán": {
        "latitud": 38.8610,
        "longitud": 71.2761
    },
    "Afganistán": {
        "latitud": 33.9391,
        "longitud": 67.7099
    },
    "Pakistán": {
        "latitud": 30.3753,
        "longitud": 69.3451
    },
    "Bangladesh": {
        "latitud": 23.685,
        "longitud": 90.3563
    },
    "Sri Lanka": {
        "latitud": 7.8731,
        "longitud": 80.7718
    },
    "Nepal": {
        "latitud": 28.3949,
        "longitud": 84.1240
    },
    "Bután": {
        "latitud": 27.5142,
        "longitud": 90.4336
    },
    "Maldivas": {
        "latitud": 3.2028,
        "longitud": 73.2207
    },
    "Myanmar": {
        "latitud": 21.9162,
        "longitud": 95.9550
    },
    "Camboya": {
        "latitud": 12.5657,
        "longitud": 104.9910
    },
    "Laos": {
        "latitud": 19.8563,
        "longitud": 102.4955
    },
    "Mongolia": {
        "latitud": 46.8625,
        "longitud": 103.8467
    },
};

export default paisesLatitudLong;