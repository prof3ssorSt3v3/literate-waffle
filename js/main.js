const movies = [
  {
    uuid: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    title: 'Alien',
    release_date: '1979-05-25',
    director: 'Ridley Scott',
    series: 'Alien',
  },
  {
    uuid: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    title: 'Aliens',
    release_date: '1986-07-18',
    director: 'James Cameron',
    series: 'Alien',
  },
  {
    uuid: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
    title: 'Predator',
    release_date: '1987-06-12',
    director: 'John McTiernan',
    series: 'Predator',
  },
  {
    uuid: '4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s',
    title: 'Predator 2',
    release_date: '1990-11-21',
    director: 'Stephen Hopkins',
    series: 'Predator',
  },
  {
    uuid: '5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t',
    title: 'Alien 3',
    release_date: '1992-05-22',
    director: 'David Fincher',
    series: 'Alien',
  },
  {
    uuid: 'b2d3e5d7-a7h8-4i0b-2b3l-k1e8o5p6q8u7',
    title: 'Tucker and Dale vs. Evil',
    release_date: '2011-09-23',
    director: 'Eli Craig',
  },
  {
    uuid: '6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t1u',
    title: 'Alien: Resurrection',
    release_date: '1997-11-26',
    director: 'Jean-Pierre Jeunet',
    series: 'Alien',
  },
  {
    uuid: '7g8h9i0j-1k2l-3m4n-5o6p-7q8r9s0t1u2v',
    title: 'AVP: Alien vs. Predator',
    release_date: '2004-08-13',
    director: 'Paul W. S. Anderson',
    series: 'Alien vs Predator',
  },
  {
    uuid: '8h9i0j1k-2l3m-4n5o-6p7q-8r9s0t1u2v3w',
    title: 'AVPR: Aliens vs Predator - Requiem',
    release_date: '2007-12-25',
    director: 'Colin Strause, Greg Strause',
    series: 'Alien vs Predator',
  },
  {
    uuid: '9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w4x',
    title: 'Predators',
    release_date: '2010-07-09',
    director: 'Nimród Antal',
    series: 'Predator',
  },
  {
    uuid: '0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x5y',
    title: 'The Predator',
    release_date: '2018-09-14',
    director: 'Shane Black',
    series: 'Predator',
  },
  {
    uuid: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    title: 'Alien: Covenant',
    release_date: '2017-05-19',
    director: 'Ridley Scott',
    series: 'Alien',
  },
  {
    uuid: 'b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7',
    title: 'Alien: Romulus',
    release_date: '2024-05-16',
    director: 'Fede Álvarez',
    series: 'Alien',
  },
  {
    uuid: 'c3d4e5f6-g7h8-9i0j-1k2l-m3n4o5p6q7r8',
    title: 'Prometheus',
    release_date: '2012-06-08',
    director: 'Ridley Scott',
    series: 'Alien',
  },
];

(() => {
  //when the page loads...
  const main = document.querySelector('main');
  const template = document.getElementById('movieitem');
  // let clone = template.content.cloneNode(true);
  // buildCard(movies[0], clone);
  // let section = document.createElement('section');
  // section.append(clone);
  // main.append(section);

  const grouped = Object.groupBy(movies, callback);
  console.log(grouped);
  for (let group in grouped) {
    let section = document.createElement('section');
    section.className = group; // Alien, unknown
    grouped[group].forEach((item) => {
      let clone = template.content.cloneNode(true); //create card
      buildCard(item, clone);
      section.append(clone);
    });
    main.append(section);
  }
})();

function callback(item, index) {
  // return 'Ripley';
  // return Math.floor(Math.random() * 3) + 1; // 1, 2, 3
  return 'series' in item ? item.series : 'unknown';
}

function buildCard(data, element) {
  element.querySelector('.movie').setAttribute('data-ref', data.uuid);
  element.querySelector('.movie').setAttribute('data-series', data.series ? data.series : 'unknown');

  element.querySelector('.title').textContent = data.title;
  element.querySelector('.director').textContent = data.director;
  element.querySelector('.release > time').textContent = data.release_date;
  element.querySelector('.release').setAttribute('datetime', data.release_date);
}
