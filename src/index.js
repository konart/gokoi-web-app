import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import Table from './Table'
import Player from './Player'
import Hand from './Hand'
import Deck from './Deck'
import './index.css';

ReactDOM.render(
  <Table>
      <Player playerName="player1">
          <Hand cssClasses="closed hand"/>
          <Hand cssClasses="open hand"/>
      </Player>
      <Deck/>
      <Player playerName="player2">
          <Hand cssClasses="closed hand"/>
          <Hand cssClasses="open hand"/>
      </Player>
  </Table>,
  document.getElementById('root')
);

ReactDOM.render(
    <Card />,
    document.getElementById('deck')
);
