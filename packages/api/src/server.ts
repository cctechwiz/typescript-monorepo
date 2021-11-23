import express from 'express';
import { Person } from '@my-app/shared';

const api = express();
const port = 8080;

const person: Person = {
  firstName: "Josh",
  lastName: "Maxwell"
};
console.log(person);

api.get('/', (req, res) => res.json({
  message: 'Hello World!'
}));

api.listen(port, () => console.log(`Server started at http://localhost:${port}`));
