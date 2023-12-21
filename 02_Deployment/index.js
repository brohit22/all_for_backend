const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 3000;

const githubData = {
  login: 'brohit22',
  id: 127715071,
  node_id: 'U_kgDOB5zG_w',
  avatar_url: 'https://avatars.githubusercontent.com/u/127715071?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/brohit22',
  html_url: 'https://github.com/brohit22',
  followers_url: 'https://api.github.com/users/brohit22/followers',
  following_url: 'https://api.github.com/users/brohit22/following{/other_user}',
  gists_url: 'https://api.github.com/users/brohit22/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/brohit22/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/brohit22/subscriptions',
  organizations_url: 'https://api.github.com/users/brohit22/orgs',
  repos_url: 'https://api.github.com/users/brohit22/repos',
  events_url: 'https://api.github.com/users/brohit22/events{/privacy}',
  received_events_url: 'https://api.github.com/users/brohit22/received_events',
  type: 'User',
  site_admin: false,
  name: 'Mr Mic',
  company: null,
  blog: '',
  location: 'Mumbai , India',
  email: null,
  hireable: null,
  bio: 'Hi👋, I\'m Artist. "Welcome to my world 🌍, where your screen transforms into my canvas 🖥 and my artistry takes \r\ncenter stage.',
  twitter_username: 'Mr_Mic_200',
  public_repos: 13,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2023-03-13T04:58:15Z',
  updated_at: '2023-11-06T15:23:31Z',
};

dotenv.config();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/profile', (req, res) => {
  res.send(`<h1>My Profile </h1>`);
});

app.get('/github', (req, res) => {
  res.json(githubData);
});

// * chained route handlers
app
  .route('/')
  .get((req, res) => {
    res.send('Hello World!');
  })
  .post((req, res) => {
    res.send(`Post Request`);
  })
  .put((req, res) => {
    res.send(`Put request at /user`);
  })
  .delete((rea, res) => {
    res.send(`Delete request at /user`);
  });

// app.post('/', (res, req) => {
//   res.send(`Post Request`);
// });

// app.put('/profile', (req, res) => {
//   res.send(`Put request at /user`);
// });

// app.delete('/profile', (req, res) => {
//   res.send(`Delete request at /user`);
// });

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port : ${process.env.PORT}`);
});
