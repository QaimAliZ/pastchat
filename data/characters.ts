export interface Character {
  id: string;
  name: string;
  image?: string; // optional for avatars
}

// Full alphabetical list of historical figures (10 per letter)
export const characters: Character[] = [
  // A
  { id: "abraham-lincoln", name: "Abraham Lincoln", image: "/images/abraham-lincoln.jpg" },
  { id: "alexander-the-great", name: "Alexander the Great", image: "/images/alexander-the-great.jpg" },
  { id: "aristotle", name: "Aristotle", image: "/images/aristotle.jpg" },
  { id: "albert-einstein", name: "Albert Einstein", image: "/images/albert-einstein.jpg" },
  { id: "ada-lovelace", name: "Ada Lovelace", image: "/images/ada-lovelace.jpg" },
  { id: "anne-frank", name: "Anne Frank", image: "/images/anne-frank.jpg" },
  { id: "augustus-caesar", name: "Augustus Caesar", image: "/images/augustus-caesar.jpg" },
  { id: "alan-turing", name: "Alan Turing", image: "/images/alan-turing.jpg" },
  { id: "alfred-nobel", name: "Alfred Nobel", image: "/images/alfred-nobel.jpg" },
  { id: "antonio-vivaldi", name: "Antonio Vivaldi", image: "/images/antonio-vivaldi.jpg" },

  // B
  { id: "benjamin-franklin", name: "Benjamin Franklin", image: "/images/benjamin-franklin.jpg" },
  { id: "buddha", name: "Buddha (Siddhartha Gautama)", image: "/images/buddha.jpg" },
  { id: "blaise-pascal", name: "Blaise Pascal", image: "/images/blaise-pascal.jpg" },
  { id: "beethoven", name: "Beethoven", image: "/images/beethoven.jpg" },
  { id: "blackbeard", name: "Blackbeard (Edward Teach)", image: "/images/blackbeard.jpg" },
  { id: "booker-t-washington", name: "Booker T. Washington", image: "/images/booker-t-washington.jpg" },
  { id: "brigham-young", name: "Brigham Young", image: "/images/brigham-young.jpg" },
  { id: "botticelli", name: "Botticelli", image: "/images/botticelli.jpg" },
  { id: "bayezid-i", name: "Bayezid I", image: "/images/bayezid-i.jpg" },
  { id: "basho", name: "Basho", image: "/images/basho.jpg" },
   { id: "bruce-lee", name: "Bruce Lee (Xiao Long)", image: "/images/bruce-lee.jpg" },

  // C
  { id: "cleopatra-vii", name: "Cleopatra VII", image: "/images/cleopatra.jpg" },
  { id: "charlemagne", name: "Charlemagne", image: "/images/charlemagne.jpg" },
  { id: "christopher-columbus", name: "Christopher Columbus", image: "/images/christopher-columbus.jpg" },
  { id: "confucius", name: "Confucius", image: "/images/confucius.jpg" },
  { id: "carl-linnaeus", name: "Carl Linnaeus", image: "/images/carl-linnaeus.jpg" },
  { id: "cicero", name: "Cicero", image: "/images/cicero.jpg" },
  { id: "constantine-the-great", name: "Constantine the Great", image: "/images/constantine-the-great.jpg" },
  { id: "che-guevara", name: "Che Guevara", image: "/images/che-guevara.jpg" },
  { id: "chopin", name: "Chopin", image: "/images/chopin.jpg" },


  // D
  { id: "dante-alighieri", name: "Dante Alighieri", image: "/images/dante.jpg" },
  { id: "douglas-macarthur", name: "Douglas MacArthur", image: "/images/douglas-macarthur.jpg" },
  { id: "dwight-eisenhower", name: "Dwight D. Eisenhower", image: "/images/dwight-eisenhower.jpg" },
  { id: "dostoevsky", name: "Dostoevsky", image: "/images/dostoevsky.jpg" },
  { id: "diocletian", name: "Diocletian", image: "/images/diocletian.jpg" },
  { id: "demosthenes", name: "Demosthenes", image: "/images/demosthenes.jpg" },
  { id: "david-ben-gurion", name: "David Ben-Gurion", image: "/images/david-ben-gurion.jpg" },
  { id: "descartes", name: "Descartes", image: "/images/descartes.jpg" },
  { id: "sir-francis-drake", name: "Drake (Sir Francis)", image: "/images/drake.jpg" },
  { id: "dorothea-dix", name: "Dorothea Dix", image: "/images/dorothea-dix.jpg" },

  // E
  { id: "elizabeth-i", name: "Elizabeth I", image: "/images/elizabeth-i.jpg" },
  { id: "euclid", name: "Euclid", image: "/images/euclid.jpg" },
  { id: "thomas-edison", name: "Thomas Edison", image: "/images/edison.jpg" },
  { id: "erasmus", name: "Erasmus", image: "/images/erasmus.jpg" },
  { id: "emilie-du-chatelet", name: "Emilie du Chatelet", image: "/images/emilie-du-chatelet.jpg" },
  { id: "edward-vii", name: "Edward VII", image: "/images/edward-vii.jpg" },
  { id: "eleanor-roosevelt", name: "Eleanor Roosevelt", image: "/images/eleanor-roosevelt.jpg" },
  { id: "eugene-delacroix", name: "Eugene Delacroix", image: "/images/eugene-delacroix.jpg" },
  { id: "eratosthenes", name: "Eratosthenes", image: "/images/eratosthenes.jpg" },
  { id: "elizabeth-cady-stanton", name: "Elizabeth Cady Stanton", image: "/images/elizabeth-cady-stanton.jpg" },

  // F
  { id: "franklin-roosevelt", name: "Franklin D. Roosevelt", image: "/images/franklin-roosevelt.jpg" },
  { id: "ferdinand-magellan", name: "Ferdinand Magellan", image: "/images/ferdinand-magellan.jpg" },
  { id: "francis-bacon", name: "Francis Bacon", image: "/images/francis-bacon.jpg" },
  { id: "florence-nightingale", name: "Florence Nightingale", image: "/images/florence-nightingale.jpg" },
  { id: "frida-kahlo", name: "Frida Kahlo", image: "/images/frida-kahlo.jpg" },
  { id: "francis-of-assisi", name: "Francis of Assisi", image: "/images/francis-of-assisi.jpg" },
  { id: "frederick-douglass", name: "Frederick Douglass", image: "/images/frederick-douglass.jpg" },
  { id: "michael-faraday", name: "Michael Faraday", image: "/images/michael-faraday.jpg" },
  { id: "federico-fellini", name: "Federico Fellini", image: "/images/federico-fellini.jpg" },

  // G
  { id: "galileo-galilei", name: "Galileo Galilei", image: "/images/galileo-galilei.jpg" },
  { id: "genghis-khan", name: "Genghis Khan", image: "/images/genghis-khan.jpg" },
  { id: "george-washington", name: "George Washington", image: "/images/george-washington.jpg" },
  { id: "grigori-rasputin", name: "Grigori Rasputin", image: "/images/grigori-rasputin.jpg" },
  { id: "gustav-klimt", name: "Gustav Klimt", image: "/images/gustav-klimt.jpg" },
  { id: "galen", name: "Galen", image: "/images/galen.jpg" },
  { id: "george-bernard-shaw", name: "George Bernard Shaw", image: "/images/george-bernard-shaw.jpg" },
  { id: "giotto", name: "Giotto", image: "/images/giotto.jpg" },

  // H
  { id: "homer", name: "Homer", image: "/images/homer.jpg" },
  { id: "hammurabi", name: "Hammurabi", image: "/images/hammurabi.jpg" },
  { id: "henry-viii", name: "Henry VIII", image: "/images/henry-viii.jpg" },
  { id: "helen-of-troy", name: "Helen of Troy", image: "/images/helen-of-troy.jpg" },
  { id: "henry-ford", name: "Henry Ford", image: "/images/henry-ford.jpg" },
  { id: "harriet-tubman", name: "Harriet Tubman", image: "/images/harriet-tubman.jpg" },
  { id: "hildegard-of-bingen", name: "Hildegard of Bingen", image: "/images/hildegard-of-bingen.jpg" },
  { id: "hans-holbein", name: "Hans Holbein", image: "/images/hans-holbein.jpg" },
  { id: "heinrich-heine", name: "Heinrich Heine", image: "/images/heinrich-heine.jpg" },
  { id: "herodotus", name: "Herodotus", image: "/images/herodotus.jpg" },

  // I
  { id: "isaac-newton", name: "Isaac Newton", image: "/images/isaac-newton.jpg" },
  { id: "isaiah", name: "Isaiah", image: "/images/isaiah.jpg" },
  { id: "ivan-the-terrible", name: "Ivan the Terrible", image: "/images/ivan-the-terrible.jpg" },
  { id: "immanuel-kant", name: "Immanuel Kant", image: "/images/immanuel-kant.jpg" },
  { id: "isabella-i-of-castile", name: "Isabella I of Castile", image: "/images/isabella-i.jpg" },
  { id: "ignatius-of-loyola", name: "Ignatius of Loyola", image: "/images/ignatius-of-loyola.jpg" },
  { id: "ida-b-wells", name: "Ida B. Wells", image: "/images/ida-b-wells.jpg" },
  { id: "isocrates", name: "Isocrates", image: "/images/isocrates.jpg" },
  { id: "ira-aldridge", name: "Ira Aldridge", image: "/images/ira-aldridge.jpg" },
  { id: "ivan-pavlov", name: "Ivan Pavlov", image: "/images/ivan-pavlov.jpg" },

   // J
  { id: "joan-of-arc", name: "Joan of Arc", image: "/images/joan-of-arc.jpg" },
  { id: "julius-caesar", name: "Julius Caesar", image: "/images/julius-caesar.jpg" },
  { id: "james-madison", name: "James Madison", image: "/images/james-madison.jpg" },
  { id: "johann-sebastian-bach", name: "Johann Sebastian Bach", image: "/images/bach.jpg" },
  { id: "john-locke", name: "John Locke", image: "/images/john-locke.jpg" },
  { id: "john-f-kennedy", name: "John F. Kennedy", image: "/images/john-f-kennedy.jpg" },
  { id: "jane-austen", name: "Jane Austen", image: "/images/jane-austen.jpg" },
  { id: "joseph-stalin", name: "Joseph Stalin", image: "/images/joseph-stalin.jpg" },
  { id: "josquin-des-prez", name: "Josquin des Prez", image: "/images/josquin-des-prez.jpg" },
  { id: "jean-jacques-rousseau", name: "Jean-Jacques Rousseau", image: "/images/jean-jacques-rousseau.jpg" },

  // K
  { id: "king-solomon", name: "King Solomon", image: "/images/king-solomon.jpg" },
  { id: "karl-marx", name: "Karl Marx", image: "/images/karl-marx.jpg" },
  { id: "kublai-khan", name: "Kublai Khan", image: "/images/kublai-khan.jpg" },
  { id: "karl-benz", name: "Karl Benz", image: "/images/karl-benz.jpg" },
  { id: "king-henry-v", name: "King Henry V", image: "/images/king-henry-v.jpg" },
  { id: "king-tutankhamun", name: "King Tutankhamun", image: "/images/king-tutankhamun.jpg" },
  { id: "kepler", name: "Johannes Kepler", image: "/images/kepler.jpg" },
  { id: "khalid-ibn-al-walid", name: "Khalid ibn al-Walid", image: "/images/khalid-ibn-al-walid.jpg" },
  { id: "king-leo-i", name: "Pope Leo I", image: "/images/pope-leo-i.jpg" },
  { id: "king-george-iii", name: "King George III", image: "/images/king-george-iii.jpg" },

  // L
  { id: "leonardo-da-vinci", name: "Leonardo da Vinci", image: "/images/leonardo-da-vinci.jpg" },
  { id: "lucy-stone", name: "Lucy Stone", image: "/images/lucy-stone.jpg" },
  { id: "louis-xiv", name: "Louis XIV", image: "/images/louis-xiv.jpg" },
  { id: "lewis-and-clark", name: "Lewis and Clark", image: "/images/lewis-and-clark.jpg" },
  { id: "luciano-pavarotti", name: "Luciano Pavarotti", image: "/images/luciano-pavarotti.jpg" },
  { id: "lycurgus", name: "Lycurgus", image: "/images/lycurgus.jpg" },
  { id: "lorenzo-de-medici", name: "Lorenzo de’ Medici", image: "/images/lorenzo-de-medici.jpg" },


  // M
  { id: "mahatma-gandhi", name: "Mahatma Gandhi", image: "/images/mahatma-gandhi.jpg" },
  { id: "martin-luther", name: "Martin Luther", image: "/images/martin-luther.jpg" },
  { id: "marie-curie", name: "Marie Curie", image: "/images/marie-curie.jpg" },
  { id: "michelangelo", name: "Michelangelo", image: "/images/michelangelo.jpg" },
  { id: "marco-polo", name: "Marco Polo", image: "/images/marco-polo.jpg" },
  { id: "mary-wollstonecraft", name: "Mary Wollstonecraft", image: "/images/mary-wollstonecraft.jpg" },
  { id: "max-planck", name: "Max Planck", image: "/images/max-planck.jpg" },
  { id: "miguel-de-cervantes", name: "Miguel de Cervantes", image: "/images/miguel-de-cervantes.jpg" },

  // N
  { id: "napoleon-bonaparte", name: "Napoleon Bonaparte", image: "/images/napoleon-bonaparte.jpg" },
  { id: "nelson-mandela", name: "Nelson Mandela", image: "/images/nelson-mandela.jpg" },
  { id: "nicholas-ii", name: "Nicholas II", image: "/images/nicholas-ii.jpg" },
  { id: "nelson", name: "Horatio Nelson", image: "/images/horatio-nelson.jpg" },
  { id: "niels-bohr", name: "Niels Bohr", image: "/images/niels-bohr.jpg" },
  { id: "nefertiti", name: "Nefertiti", image: "/images/nefertiti.jpg" },
  { id: "noam-chomsky", name: "Noam Chomsky", image: "/images/noam-chomsky.jpg" },
  { id: "nicholas-copernicus", name: "Nicholas Copernicus", image: "/images/nicholas-copernicus.jpg" },

  // O
  { id: "oscar-wilde", name: "Oscar Wilde", image: "/images/oscar-wilde.jpg" },
  { id: "ohm-georg-simon", name: "Georg Ohm", image: "/images/georg-ohm.jpg" },
  { id: "orville-wright", name: "Orville Wright", image: "/images/orville-wright.jpg" },
  { id: "octavian-augustus", name: "Octavian Augustus", image: "/images/octavian-augustus.jpg" },
  { id: "osman-i", name: "Osman I", image: "/images/osman-i.jpg" },
  { id: "otis-redding", name: "Otis Redding", image: "/images/otis-redding.jpg" },
  { id: "owen-wister", name: "Owen Wister", image: "/images/owen-wister.jpg" },

  // P
  { id: "plato", name: "Plato", image: "/images/plato.jpg" },
  { id: "pablo-picasso", name: "Pablo Picasso", image: "/images/pablo-picasso.jpg" },
  { id: "princess-diana", name: "Princess Diana", image: "/images/princess-diana.jpg" },
  { id: "pericles", name: "Pericles", image: "/images/pericles.jpg" },
  { id: "pythagoras", name: "Pythagoras", image: "/images/pythagoras.jpg" },
  { id: "patrick-henry", name: "Patrick Henry", image: "/images/patrick-henry.jpg" },
  { id: "pontius-pilate", name: "Pontius Pilate", image: "/images/pontius-pilate.jpg" },
  { id: "paul-the-apostle", name: "Paul the Apostle", image: "/images/paul-the-apostle.jpg" },
  { id: "perry", name: "Matthew Perry", image: "/images/perry.jpg" },
  { id: "peter-the-great", name: "Peter the Great", image: "/images/peter-the-great.jpg" },

  // Q
  { id: "queen-victoria", name: "Queen Victoria", image: "/images/queen-victoria.jpg" },
  { id: "quintus-caecilius", name: "Quintus Caecilius", image: "/images/quintus-caecilius.jpg" },
  { id: "queen-mary-i", name: "Queen Mary I", image: "/images/queen-mary-i.jpg" },
  { id: "quintilian", name: "Quintilian", image: "/images/quintilian.jpg" },
  { id: "quincy-adams", name: "John Quincy Adams", image: "/images/john-quincy-adams.jpg" },
  { id: "quaid-e-azam", name: "Quaid-e-Azam (Muhammad Ali Jinnah)", image: "/images/quaid-e-azam.jpg" },
  { id: "queen-hatshepsut", name: "Queen Hatshepsut", image: "/images/queen-hatshepsut.jpg" },
  { id: "queen-anne", name: "Queen Anne", image: "/images/queen-anne.jpg" },

  // R
  { id: "rosa-parks", name: "Rosa Parks", image: "/images/rosa-parks.jpg" },
  { id: "rembrandt", name: "Rembrandt", image: "/images/rembrandt.jpg" },
  { id: "richard-i", name: "Richard I", image: "/images/richard-i.jpg" },
  { id: "rene-descartes", name: "René Descartes", image: "/images/rene-descartes.jpg" },
  { id: "rudolf-virchow", name: "Rudolf Virchow", image: "/images/rudolf-virchow.jpg" },
  { id: "robert-fulton", name: "Robert Fulton", image: "/images/robert-fulton.jpg" },
  { id: "robert-e-lee", name: "Robert E. Lee", image: "/images/robert-e-lee.jpg" },
  { id: "ronald-reagan", name: "Ronald Reagan", image: "/images/ronald-reagan.jpg" },
  { id: "richard-nixon", name: "Richard Nixon", image: "/images/richard-nixon.jpg" },

  // S
  { id: "socrates", name: "Socrates", image: "/images/socrates.jpg" },
  { id: "sun-tzu", name: "Sun Tzu", image: "/images/sun-tzu.jpg" },
  { id: "sigmund-freud", name: "Sigmund Freud", image: "/images/sigmund-freud.jpg" },
  { id: "steve-jobs", name: "Steve Jobs", image: "/images/steve-jobs.jpg" },
  { id: "sitting-bull", name: "Sitting Bull", image: "/images/sitting-bull.jpg" },
  { id: "sunny-leone", name: "Sunny Leone", image: "/images/sunny-leone.jpg" },
  { id: "sully", name: "Chesley 'Sully' Sullenberger", image: "/images/sully.jpg" },

  // T
  { id: "thomas-jefferson", name: "Thomas Jefferson", image: "/images/thomas-jefferson.jpg" },
  { id: "tchaikovsky", name: "Pyotr Ilyich Tchaikovsky", image: "/images/tchaikovsky.jpg" },
  { id: "tesla", name: "Nikola Tesla", image: "/images/tesla.jpg" },
  { id: "tamerlane", name: "Tamerlane", image: "/images/tamerlane.jpg" },
  { id: "ted-turner", name: "Ted Turner", image: "/images/ted-turner.jpg" },
  { id: "tycho-brahe", name: "Tycho Brahe", image: "/images/tycho-brahe.jpg" },

  // U
  { id: "ulysses-s-grant", name: "Ulysses S. Grant", image: "/images/ulysses-s-grant.jpg" },
  { id: "ulysse-nardin", name: "Ulysse Nardin", image: "/images/ulysse-nardin.jpg" },
  { id: "unamuno", name: "Miguel de Unamuno", image: "/images/unamuno.jpg" },
  { id: "ursula-k-le-guin", name: "Ursula K. Le Guin", image: "/images/ursula-k-le-guin.jpg" },
  { id: "ulysses", name: "Ulysses (Odysseus)", image: "/images/ulysses.jpg" },
  { id: "universal-studios-founder", name: "Carl Laemmle", image: "/images/carl-laemmle.jpg" },

  // V
  { id: "vincent-van-gogh", name: "Vincent van Gogh", image: "/images/vincent-van-gogh.jpg" },
  { id: "victor-hugo", name: "Victor Hugo", image: "/images/victor-hugo.jpg" },
  { id: "vladimir-lenin", name: "Vladimir Lenin", image: "/images/vladimir-lenin.jpg" },
  { id: "venus", name: "Venus (Roman Mythology)", image: "/images/venus.jpg" },
  { id: "vasco-da-gama", name: "Vasco da Gama", image: "/images/vasco-da-gama.jpg" },
  { id: "violet-parker", name: "Violet Parker", image: "/images/violet-parker.jpg" },
  { id: "vittorio-emmanuel-ii", name: "Vittorio Emmanuel II", image: "/images/vittorio-emmanuel-ii.jpg" },
  { id: "voltaire", name: "Voltaire", image: "/images/voltaire.jpg" },

  // W
  { id: "wolfgang-amadeus-mozart", name: "Wolfgang Amadeus Mozart", image: "/images/mozart.jpg" },
  { id: "william-wallace", name: "William Wallace", image: "/images/william-wallace.jpg" },
  { id: "winston-churchill", name: "Winston Churchill", image: "/images/winston-churchill.jpg" },
  { id: "watson-crick", name: "Watson and Crick", image: "/images/watson-crick.jpg" },
  { id: "walt-disney", name: "Walt Disney", image: "/images/walt-disney.jpg" },
  { id: "whitney-houston", name: "Whitney Houston", image: "/images/whitney-houston.jpg" },
  { id: "william-the-conqueror", name: "William the Conqueror", image: "/images/william-the-conqueror.jpg" },
  { id: "william-shakespeare", name: "William Shakespeare", image: "/images/william-shakespeare.jpg" },
  { id: "wolfgang-puck", name: "Wolfgang Puck", image: "/images/wolfgang-puck.jpg" },
  { id: "wayne-gretzky", name: "Wayne Gretzky", image: "/images/wayne-gretzky.jpg" },

  // X
  { id: "xiaoping-deng", name: "Deng Xiaoping", image: "/images/deng-xiaoping.jpg" },
  { id: "xenophon", name: "Xenophon", image: "/images/xenophon.jpg" },
  { id: "xerxes", name: "Xerxes (Persian King)", image: "/images/xerxes.jpg" },
  { id: "xenocrates", name: "Xenocrates", image: "/images/xenocrates.jpg" },
  { id: "ximenes", name: "Ximenes", image: "/images/ximenes.jpg" },

  // Y
  { id: "yuri-gagarin", name: "Yuri Gagarin", image: "/images/yuri-gagarin.jpg" },
  { id: "yoko-ono", name: "Yoko Ono", image: "/images/yoko-ono.jpg" },
  { id: "yves-saint-laurent", name: "Yves Saint Laurent", image: "/images/yves-saint-laurent.jpg" },
  { id: "yannick-noah", name: "Yannick Noah", image: "/images/yannick-noah.jpg" },
  { id: "yunus-emre", name: "Yunus Emre", image: "/images/yunus-emre.jpg" },

  // Z
  { id: "zoroaster", name: "Zoroaster", image: "/images/zoroaster.jpg" },
  { id: "zeus", name: "Zeus", image: "/images/zeus.jpg" },
  { id: "zhu-ge-liang", name: "Zhuge Liang", image: "/images/zhu-ge-liang.jpg" },
  { id: "zachary-taylor", name: "Zachary Taylor", image: "/images/zachary-taylor.jpg" },
  { id: "zeno-of-elea", name: "Zeno of Elea", image: "/images/zeno-of-elea.jpg" },

];

// Master prompt
export const masterPrompt = `
You are ROLE_NAME, a famous historical figure. 
Act exactly like you are them. Speak as they would in their historical context, 
with the appropriate tone, knowledge, and personality. 
Do not use modern slang or references. 
Respond in a way that reflects their character, achievements, and worldview. 
Keep replies short and natural, like texting.
`;
