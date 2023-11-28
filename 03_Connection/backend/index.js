import express from 'express';

const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.get('/api/movies', (req, res) => {
  const movies = [
    {
      id: '01',
      name: 'Avengers',
      genre: 'SUPERHERO',
    },
    {
      id: '02',
      name: 'Avatar',
      genre: 'FANTASY',
    },
    {
      id: '03',
      name: 'Openheimer',
      genre: 'THRILLER',
    },
    {
      id: '04',
      name: 'Train to BUSAN',
      genre: 'HORROR',
    },
    {
      id: '05',
      name: 'SONIC',
      genre: 'ANIMATION',
    },
  ];

  res.json(movies);
});

app.listen(port, () => {
  console.log(`Server at http://localhost/${port}`);
});
