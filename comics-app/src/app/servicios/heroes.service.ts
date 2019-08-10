
import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
    nombre: "Ant-Man",
    bio: "Ant-Man (Scott Lang) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por David Michelinie y John Byrne, Scott Lang apareció por primera vez en The Avengers # 181 (marzo de 1979) y en Marvel Premiere # 47 (abril de 1979) como el segundo personaje de superhéroes en usar el nombre de en el Universo Marvel. Es un ladrón reformado y un experto en electrónica. Fue miembro de los Vengadores, un personaje destacado en la serie de cómics FF, y en 2015 se convirtió en el personaje principal de la serie Ant-Man.",
    img: "assets/img/antman.png",
    aparicion: "1979-03-01",
    casa: "Marvel"
  },
  {
    nombre: "Aquaman",
    bio: "Aquaman (cuyo verdadero nombre es Arthur Curry ) es un superhéroe que aparece en los cómics estadounidenses publicados por DC Comics. Creado por el artista Paul Norris y el escritor Mort Weisinger, el personaje debutó en More Fun Comics # 73 (noviembre de 1941). Inicialmente, una característica de respaldo en los títulos de antología de DC, Aquaman más tarde protagonizó varios volúmenes de una serie de cómics en solitario. Durante los últimos años de la década de 1950 y 1960, el período de recuperación de superhéroes conocido como la Edad de Plata, fue miembro fundador de la Liga de la Justicia. En la Edad Moderna de la década de 1990, los escritores interpretaron el personaje de Aquaman más seriamente, con historias que representan el peso de su papel como rey de la Atlántida.",
    img: "assets/img/aquaman.png",
    aparicion: "1941-11-01",
    casa: "Marvel"
  },
  {
    nombre: "Black Window",
    bio: "Una ex agente de la KGB , Natalia Romanova, también conocida como Black Widow, desertó a los Estados Unidos de la Unión Soviética (más tarde conocida como Rusia ) para unirse a SHIELD . Más tarde, Black Widow se convertiría en miembro de los Avengers y ha estado en el equipo en múltiples ocasiones. Es una mujer con un pasado misterioso que pocos conocen.",
    img: "assets/img/blackwindow.png",
    aparicion: "1964-04-01",
    casa: "Marvel"
  },
  {
    nombre: "Scarlet Witch",
    bio: "La Bruja Escarlata (Wanda Maximoff) es una superheroína ficticia que aparece en los cómics publicados por Marvel Comics. Apareció por primera vez en X-Men #4 (1964) y fue creada por Stan Lee y Jack Kirby, debutando en la denominada Edad de Plata de los Cómics. En sus inicios, fue presentada como una supervillana junto con su hermano gemelo Quicksilver, ambos miembros fundadores de la Hermandad de Mutantes. El personaje, presentado en sus inicios como una mutante, posee habilidades para alterar la realidad de formas no especificadas y es, además, una poderosa hechicera. Más tarde, se convertiría en miembro regular de Los Vengadores. Con el tiempo, contraería matrimonio con su compañero de equipo Visión.",
    img: "assets/img/brujaescarlata.png",
    aparicion: "1964-01-01",
    casa: "Marvel"
  },
  {
    nombre: "Captain America",
    bio: "Durante los días oscuros de la década de 1940, un agente encubierto de EE.UU. Militar experimento volvió a Steve Rogers en América 's primer Super-Soldado, el Capitán América . A lo largo de la guerra, Cap y su compañero, Bucky lucharon junto a la infantería y con un grupo de héroes conocidos como los Invasores . En los últimos meses de la Segunda Guerra Mundial , el Capitán América y Bucky fueron presuntamente muertos en una explosión. Décadas más tarde, el Capitán América fue encontrado atrapado en el hielo y resucitado en el mundo moderno. El Capitán América luego pasaría a ser uno de los miembros más importantes de los Vengadores , así como un líder del equipo.",
    img: "assets/img/capitanamerica.png",
    aparicion: "1941-03-01",
    casa: "Marvel"
  },
  {
    nombre: "Captain Marvel",
    bio: "Carol Danvers es hija de Joe Danvers, Sr. , un ex oficial de la Marina de los EE. UU. Y trabajador de la construcción, así como Mari-Ell , una campeona de los Kree . Los dos se casaron y luego quedó embarazada y dio a luz a una hija, Car-Ell; Campeón en el lenguaje Kree , que cambiaron a Carol para encajar en la Tierra.",
    img: "assets/img/capitanamarvel.png",
    aparicion: "1968-03-01",
    casa: "Marvel"
  },
  {
    nombre: "Deadpool",
    bio: "Es un personaje ficticio, mercenario, supervillanoy antihéroe,​ que aparece en los cómics publicados por Marvel Comics. Creado por el artista Rob Liefeld y el escritor Fabian Nicieza, Deadpool apareció por primera vez en New Mutants (vol. 1) #98 (1991). Wade Wilson era un asesino internacional que había trabajado para varios gobiernos cuando desarrolló un cáncer agresivo. En un esfuerzo por encontrar una cura, se inscribió en el programa Weapon X en Canadá, que le dio un factor de curación de otro miembro y lo puso a trabajar para ellos. Cuando mató a un miembro del equipo, lo echaron del programa y lo enviaron para que le quitaran sus habilidades, donde experimentó en su lugar. Los resultados de su estadía allí fueron un estado mental disminuido, un factor de curación que no podía curar su cáncer o curar sus cicatrices, un enamoramiento con la muerte y su libertad para volver al trabajo mercenario a sueldo. Como 'The Merc with a Mouth' se dispuso a Deadpool a matar y pasar un buen rato haciéndolo.",
    img: "assets/img/deadpool.png",
    aparicion: "1991-01-01",
    casa: "Marvel"
  },
  {
    nombre: "Dr. Strange",
    bio: "Creado por el artista Steve Ditko y el escritor Stan Lee, el personaje apareció por primera vez en Strange Tales #110 (julio de 1963). Doctor Strange sirve como el Hechicero Supremo, el principal protector de la Tierra contra las amenazas mágicas y místicas. Inspirado en historias de magia negra y Chandu el Mago, Strange fue creado durante la edad de plata de los cómics para traer un tipo diferente de personajes y temas a Marvel Comics.",
    img: "assets/img/drstrange.png",
    aparicion: "1963-06-01",
    casa: "Marvel"
  },
  {
    nombre: "Groot",
    bio: "Groot es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por Stan Lee, Larry Lieber y Jack Kirby, el personaje apareció por primera vez en Tales to Astonish # 13 (noviembre de 1960). Una criatura extraterrestre, similar a un árbol sensible, el Groot original apareció por primera vez como un invasor que pretendía capturar humanos para la experimentación.",
    img: "assets/img/groot.png",
    aparicion: "1960-11-01",
    casa: "Marvel"
  },
  {
    nombre: "Hawkeye",
    bio: "Clinton Barton fue un ex trabajador de circo y un criminal convertido en héroe, quien recibió sus habilidades de tiro con arco cuando era niño a través de su entrenamiento con Swordsman y Trickshot . Barton eventualmente se uniría a lasramas dela Costa Este y la Costa Oeste de Los Vengadores, incluso liderando al mismo tiempo. Hawkeye fue creado por Stan Lee y Don Heck , apareciendo por primera vez en Tales of Suspense # 57 ( 1964 ).",
    img: "assets/img/hawkeye.png",
    aparicion: "1964-09-01",
    casa: "Marvel"
  },
  {
    nombre: "Hulk",
    bio: "Hulk es un personaje ficticio, que aparece en los cómics estadounidenses publicados por la editorial Marvel Comics. El personaje fue creado por los escritores Stan Lee y Jack Kirby siendo su primera aparición en The Incredible Hulk #1 publicado en mayo de 1962. En sus apariciones de cómic, el personaje es a la vez Hulk, un ser humanoide enorme de piel verde, corpulento y musculoso que posee una gran fortaleza física, y su alter ego el Dr. Robert Bruce Banner (o Dr. David Bruce Banner, un físico físicamente débil, socialmente retraído y emocionalmente reservado, las dos personalidades existentes como independientes y con resentimiento de la otra.",
    img: "assets/img/hulk.png",
    aparicion: "1962-05-01",
    casa: "Marvel"
  },
  {
    nombre: "Iron-Man",
    bio: "Anthony 'Tony' Stark' El genio, multimillonario inventor, industrial y CEO de Stark Industries, Tony Stark fue herido de muerte en una zona de guerra en Afganistán poco antes de ser secuestrado por terroristas. Stark construyó un traje blindado para escapar del cautiverio, que se duplicó como un dispositivo para mantener el latido de su corazón manteniéndolo vivo. Una vez que regresó a los Estados Unidos, Stark se reinventó a sí mismo como el superhéroe de Iron Man .",
    img: "assets/img/ironman.png",
    aparicion: "1963-03-01",
    casa: "Marvel"
  },
  {
    nombre: "Loki",
    bio: "Loki (Loki Laufeyson) es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por el escritor Stan Lee, el guionista Larry Lieber y el dibujante Jack Kirby, una versión del personaje apareció por primera vez en Venus # 6 (agosto de 1949). La encarnación moderna de Loki apareció por primera vez en Journey into Mystery # 85 (octubre de 1962). Él es el hermano adoptado y, a menudo, el enemigo del superhéroe Thor. Loki se basa en la deidad nórdica del mismo nombre y, a veces se describe como un antihéroe.",
    img: "assets/img/loki.png",
    aparicion: "1949-08-01",
    casa: "Marvel"
  },
  {
    nombre: "Nick Fury",
    bio: "El mayor de tres hijos, Nicholas Joseph Fury creció en la ciudad de Nueva York en la era de la depresión con su hermano Jacob y su hermana Dawn . La madre de Fury murió cuando él era muy joven y su padre Jack Fury , un piloto estadounidense que se unió al esfuerzo de guerra británico durante la Primera Guerra Mundial , se volvió a casar y los hijos fueron criados por su madrastra en lugar de la muerte prematura de Jack Fury. Nicholas 'Nick' Fury, más conocido como Nick Fury (Nick Furia o Capitán Furia anteriormente en España), es un personaje ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por el escritor / artista Jack Kirby y el escritor Stan Lee, Fury apareció por primera vez en Sgt. Fury y sus Comandos Aulladores # 1 (mayo de 1963), una serie de combates de la Segunda Guerra Mundial que retrata a Fury que mastica cigarros como líder de una élite del ejército de los EE. UU. Un personaje popular durante varias décadas, en 2011, Fury ocupó el puesto 33 en los 100 mejores héroes del cómic de IGN,1​y 32 en su lista de 'The Top 50 Avengers'",
    img: "assets/img/nickfury.png",
    aparicion: "1963-05-01",
    casa: "Marvel"
  },
  {
    nombre: "Black Panther",
    bio: "Pantera Negra (T'Challa) (del inglés original, Black Panther) es un superhéroe de la compañía estadounidense Marvel Comics, creado por Stan Lee y Jack Kirby para el número 52 de The Fantastic Four. Es el primer superhéroe de tez negra de la historia de Marvel y se debe destacar que el personaje fue creado con anterioridad al Partido Pantera Negra, el cual fue fundado en octubre del mismo año. Es el rey y protector de la ficticia nación africana de Wakanda. Además de poseer habilidades mejoradas logradas a través de rituales antiguos de Wakanda de beber la esencia de la hierba en forma de corazón, T'Challa también confía en su dominio de la ciencia, el entrenamiento físico riguroso, las habilidades de combate mano a mano y el acceso a la riqueza y la avanzada tecnología de Wakanda para combatir a sus enemigos.",
    img: "assets/img/panteranegra.png",
    aparicion: "1966-01-01",
    casa: "Marvel"
  },
  {
    nombre: "Rocket Raccoon",
    bio: "Es un personaje ficticio, un superhéroe de Marvel Comics. Apareció por primera vez en Marvel Preview #7 (verano de 1976). Rocket Raccoon es un mapache inteligente y antropomórfico. Su nombre está basado en una canción de The Beatles, Rocky Raccoon, la cual fue publicada en 1968. .Rocket Raccoon apareció como miembro destacado en el relanzamiento de 2008 del equipo de superhéroes Guardianes de la Galaxia. El personaje ha aparecido en varias adaptaciones de medios como miembro de ese equipo, incluidas series de televisión animadas, juguetes y videojuegos. Él aparece en la película de acción real de 2014 Guardianes de la Galaxia, su secuela de 2017, Guardianes de la Galaxia Vol. 2, en 2018, Avengers: Infinity War, y también en el 2019, Avengers: Endgame de Marvel Cinematic Universe. Su voz es proporcionada por Bradley Cooper y la captura de movimiento proporcionada por Sean Gunn.",
    img: "assets/img/rocketraccoon.png",
    aparicion: "1979-06-01",
    casa: "Marvel"
  },
  {
    nombre: "Spider-Man",
    bio: "Spider-Man (llamado Hombre Araña en muchas de las traducciones al español) es un superhéroe ficticio creado por los escritores y editores Stan Lee y Steve Ditko. Apareció por primera vez en el cómic de antología Amazing Fantasy # 15 (5 de junio de 1962)[1] en la Edad de Plata de los cómics. Aparece en los cómics estadounidenses publicados por Marvel Comics, así como en varias películas, programas de televisión y adaptaciones de videojuegos ambientadas en el Universo Marvel.",
    img: "assets/img/spiderman.png",
    aparicion: "1962-06-05",
    casa: "Marvel"
  },
  {
    nombre: "Thanos",
    bio: "Thanos es un supervillano ficticio que aparece en los cómics norteamericanos publicados por Marvel Comics. Creado por el escritor y artista Jim Starlin el personaje apareció por primera vez en The Invincible Iron Man # 55 (febrero de 1973). Su nombre es en parte un juego de palabras que hace referencia al término griego Θάνατος (Thánatos), que significa muerte, pero principalmente es una deformación del nombre del dios de la muerte no violenta, Tánatos. Él es el hijo de Mentor y el hermano de Starfox. Thanos es uno de los villanos más poderosos del Mundo Marvel y se ha enfrentado con muchos héroes, incluidos los Vengadores, los Guardianes de la Galaxia, los Cuatro Fantásticos, los X-Men, entre otros.",
    img: "assets/img/thanos.png",
    aparicion: "1973-02-01",
    casa: "Marvel"
  },
  {
    nombre: "Thor",
    bio: "Thor Odinson es el Dios del Trueno y anterior Rey de Asgard. Cuando su comportamiento irresponsable amenazó a su planeta en otra guerra con los Gigantes de Hielo, fue despojado de su poder y desterrado en la Tierra por su padre, Odín. Mientras estaba exiliado en la Tierra, Thor aprendió sobre la humildad, encontró el amor en Jane Foster, y ayudó a salvar a sus nuevos amigos del Destructor, quien fue enviado por su celoso hermano adoptivo, Loki. Como tal, Thor se remidió a los ojos de su padre, se le concedió el acceso a su poder una vez más y regresó a Asgard para confrontar a Loki, quien cayó al vacío cuando Thor destruyó el Puente Bifrost para impedir la destrucción de Jotunheim.",
    img: "assets/img/thor.png",
    aparicion: "1962-08-01",
    casa: "Marvel"
  },
  {
    nombre: "Ultrón",
    bio: "Ultrón fue una inteligencia artificial programada para el mantenimiento de la paz creada por Anthony Stark y Bruce Banner a partir de un código descifrado derivado desde el interior del Cetro de Loki, con la intención de proteger la Tierra de amenazas internas y externas. Ultrón construyó por sí mismo múltiples cuerpos huéspedes y adoptó la personalidad de Stark, aunque considerando a la humanidad misma como la mayor amenaza para la paz en la Tierra, e intentó crear una singularidad tecnológica para cometer genocidio contra ellos.",
    img: "assets/img/ultron.png",
    aparicion: "1968-01-01",
    casa: "Marvel"
  },
  {
    nombre: "Visión",
    bio: "Visión fue un androide creado por el resultado de un cuerpo sintético de Vibranio diseñado por Ultrón y la Doctora Helen Cho. Fue programado por Anthony Stark y Bruce Banner usando la base de datos de J.A.R.V.I.S. y la actividad de la Gema de la Mente dentro del Cetro de Loki. Sin embargo, a diferencia de lo que estaba originalmente destinado a ser, Visión se convirtió en un aliado de la humanidad, lo que llevó a unirse a los Vengadores para detener a Ultrón. Después de la Ofensiva de Ultrón, Visión se convirtió formalmente en un miembro de los Vengadores, bajo el liderazgo de Steven Rogers.",
    img: "assets/img/vision.png",
    aparicion: "1968-10-01",
    casa: "Marvel"
  },
  {
    nombre: "War Machine",
    bio: "El Coronel James Rupert Rhodes es un oficial de la Fuerza Aérea de los Estados Unidos. Es el mejor amigo de Anthony Stark y era el enlace entre Industrias Stark y los militares en el Departamento de Adquisiciones. Cuando Stark fue secuestrado por los Diez Anillos, Rhodes dirigió un rescate para su amigo, con éxito. Luego de que Stark se convirtiera en Iron Man, a Rhodes se le empezó a conocer como Máquina de Guerra después de vestir el traje de combate fuertemente armado de Hammer Industries y ayudó a vencer al criminal Ivan Vanko.",
    img: "assets/img/warmachine.png",
    aparicion: "1979-01-01",
    casa: "Marvel"
  },
];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: string ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
};
