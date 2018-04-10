const
  express = require('express'),
  app = express(),
  router = express.Router();

const list = {
  title: 'Test list',
  items: [{
      color: 'teal',
      title: 'One'
    },
    {
      color: 'grey',
      title: 'Two'
    },
    {
      color: 'orange',
      title: 'Three'
    },
    {
      color: 'pink',
      title: 'Four'
    },
    {
      color: 'yellow',
      title: 'Five'
    },
    {
      color: 'magenta',
      title: 'Six'
    },
    {
      color: 'purple',
      title: 'Seven'
    },
    {
      color: 'lime',
      title: 'Eight'
    },
  ]
}

app.use('/api', router);
require('http').createServer(app).listen(8080);

router.get('/list', (req, res) => {
  res.json(list);
});

router.delete('/list/:index', (req, res) => {
  setTimeout(() => {
    const r = Math.ceil(Math.random() * 10);
    if (r >= 5) {
      list.items.splice(req.params.index, 1);
      res.status(200).json({});
    } else {
      res.status(500).json({
        error: `Random error (r = ${r})`
      });
    }
  }, 2000);
});
