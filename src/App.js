import React, { Component } from 'react';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Card from "./components/Card"
import cards from "./cards.json"
import "./App.css"


class App extends Component {
  state = {
    score: 0,
    topscore: 0,
    prevId: [],
    cards: cards
  };

  componentDidMount() {
    this.shuffleCards();
  };

  shuffleCards = () => {
    const arr = this.state.cards;

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      const x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    this.setState({ cards: arr });
  };

  checkId = (id, prevId) => {
    for (let i = 1; i <= prevId.length; i++) {
      if (prevId[i-1] === id) {
        prevId.length = 0;
        return 1;
      };
    };

    return 0;
  };

  handleImageClicked = id => {
    console.log(`id=${id} prevId=${this.state.prevId} topscore=${this.state.topscore} score=${this.state.score}`);

    if (this.state.topscore === 0) {
      console.log(1);
      this.setState({
        topscore: this.state.topscore + 1,
        score: this.state.score + 1,
        prevId: [...this.state.prevId, id]
      });
    } else {
      if (this.checkId(id, this.state.prevId)) {
        console.log(2);
        if (this.state.topscore < this.state.score) {
          console.log(3);
          this.setState({
            topscore: this.state.score,
            score: 0,
          });
        } else {
          console.log(4);
          this.setState({
            score: 0,
          });
        };

      } else {
        if (this.state.topscore === this.state.score) {
          console.log(5);
          this.setState({
            topscore: this.state.topscore + 1,
            score: this.state.score + 1,
            prevId: [...this.state.prevId, id]
          });
        } else {
          console.log(6);
          this.setState({ 
            score: this.state.score + 1,
            prevId: [...this.state.prevId, id]
          });
        }

      };
    };
  };


  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topscore={this.state.topscore} />
        <Header image='/images/geometry2.png' />
        <div className="container">
          <div className="row">
            {this.state.cards.slice(0, 4).map(item => (
              <div className="col-md-3">
                <Card
                  id={item.id}
                  image={item.image}
                  handleClicked={this.handleImageClicked}
                />
              </div>
            ))}
          </div>

          <div className="row">
            {this.state.cards.slice(4, 8).map(item => (
              <div className="col-md-3">
                <Card
                  id={item.id}
                  image={item.image}
                  handleClicked={this.handleImageClicked}
                />
              </div>
            ))}
          </div>

          <div className="row">
            {this.state.cards.slice(8, 12).map(item => (
              <div className="col-md-3">
                <Card
                  id={item.id}
                  image={item.image}
                  handleClicked={this.handleImageClicked}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }
}

export default App;
