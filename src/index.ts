import express from 'express';
import bodyParser from 'body-parser';
import multiparty from 'multiparty';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

app.get('/handle', (req, res) => {
  res.send(
    `я бекэнд простой, получаю ${req.query.message} - вывожу ${req.query.message}`
  );
});

app.put('/handle/:message', (req, res) => {
  res.send(
    `я бекэнд простой, получаю ${req.params.message} - вывожу ${req.params.message}`
  );
});

app.post('/handle/post-form', (req, res) => {
  const form = new multiparty.Form();

  form.parse(req, function (err, fields, files) {
    const reqBody = fields;
    res.send(
      `я бекэнд простой, получаю ${reqBody.message} - вывожу ${reqBody.message}`
    );
  });
});

app.post('/handle/post-encode', (req, res) => {
  res.send(
    `я бекэнд простой, получаю ${req.body.message} - вывожу ${req.body.message}`
  );
});

app.patch('/handle/patch', (req, res) => {
  res.send(
    `я бекэнд простой, получаю ${req.body.message} - вывожу ${req.body.message}`
  );
});

startServer();
