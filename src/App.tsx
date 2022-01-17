import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>(dummyData)

  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people} />
      <AddToList setPeople={setPeople} people={people} />
    </div>
  );
}

export default App;


const dummyData: IState["people"] = [
  {
    name: "LeBron James",
    age: 35,
    img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    note: "Allegeric to staying on the same team",
  },
  {
    name: "Dennis Kesho",
    age: 42,
    img: "https://i2-prod.mirror.co.uk/incoming/article25955639.ece/ALTERNATES/s615b/0_GettyImages-1237198637.jpg"
  },
  {
    name: "Leonardo Decaprio",
    age: 33,
    img: "https://github.com/Bileonaire.png"
  }
];