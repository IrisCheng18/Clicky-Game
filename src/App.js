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
    cards: cards,
    msg: "Click an image to begin!"
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
      if (prevId[i - 1] === id) {
        prevId.length = 0;
        return 1;
      };
    };

    return 0;
  };

  handleImageClicked = id => {
    // console.log(`id=${id} prevId=${this.state.prevId} topscore=${this.state.topscore} score=${this.state.score}`);
    this.shuffleCards();

    if (this.state.topscore === 0) {
      this.setState({
        topscore: this.state.topscore + 1,
        score: this.state.score + 1,
        prevId: [...this.state.prevId, id],
        msg: "You guessed correctly!"
      });
    } 
    else {
      if (this.checkId(id, this.state.prevId)) {
        if (this.state.topscore < this.state.score) {
          this.setState({
            topscore: this.state.score,
            score: 0,
          });
        } else {
          this.setState({
            score: 0,
          });
        };

        this.setState({ msg: "You guessed incorrectly" });
      } else {
          if (this.state.topscore === this.state.score) {
            this.setState({
              topscore: this.state.topscore + 1,
              score: this.state.score + 1,
              prevId: [...this.state.prevId, id]
            });
          } else {
            this.setState({
              score: this.state.score + 1,
              prevId: [...this.state.prevId, id]
            });
          }
          this.setState({ msg: "You guessed correctly" });
      };
    };

  };


  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topscore={this.state.topscore} message={this.state.msg} />
        <Header image='/images/geometry2.png' />
        <div className="container">
          <div className="row">
            {this.state.cards.slice(0, 4).map(item => (
              <div className="col-md-3" key={item.id}>
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  handleClicked={this.handleImageClicked}
                />
              </div>
            ))}
          </div>

          <div className="row">
            {this.state.cards.slice(4, 8).map(item => (
              <div className="col-md-3" key={item.id}>
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  handleClicked={this.handleImageClicked}
                />
              </div>
            ))}
          </div>

          <div className="row">
            {this.state.cards.slice(8, 12).map(item => (
              <div className="col-md-3" key={item.id}>
                <Card
                  key={item.id}
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
