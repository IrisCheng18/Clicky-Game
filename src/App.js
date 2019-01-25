import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Card from "./components/Card"
import cards from "./cards.json"


class App extends Component {
  state = {
    score: 0,
    topscore: 0,
    cards: cards
  };

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Header image='/images/geometry2.png' />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card image={this.state.cards[0].image} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
