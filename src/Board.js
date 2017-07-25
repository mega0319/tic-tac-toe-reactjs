import React from 'react'
import Cell from './Cell.js'

export default class Board extends React.Component{
  constructor(){
    super()

    this.state ={
      winMsg: false,
      turn: 1,
      board: [
        ['   ', '   ', '   '],
        ['   ', '   ', '   '],
        ['   ', '   ', '   ']
      ]
    }
  }

  incrementTurn(){
    this.setState({
      turn: this.state.turn + 1
    })
  }

  adjustGameBoard(id, letter){
    console.log(id, letter)
    let boardCopy = this.state.board.slice()
    let positionMap = {
      1: () => boardCopy[0][0] = ` ${letter} `,
      2: () => boardCopy[0][1] = ` ${letter} `,
      3: () => boardCopy[0][2] = ` ${letter} `,
      4: () => boardCopy[1][0] = ` ${letter} `,
      5: () => boardCopy[1][1] = ` ${letter} `,
      6: () => boardCopy[1][2] = ` ${letter} `,
      7: () => boardCopy[2][0] = ` ${letter} `,
      8: () => boardCopy[2][1] = ` ${letter} `,
      9: () => boardCopy[2][2] = ` ${letter} `
    }
    positionMap[id]()

    console.log(positionMap[id])
    console.log(boardCopy)
    this.setState({ board: boardCopy } , () => this.calculateWinForOs() )
  }

  calculateWinForOs(){
    let board = this.state.board
    if (board[0][0] === " O " && board[0][1] === " O " && board[0][2] === " O "){
      console.log("O WINS!!")
      this.setState({ winMsg: "O wins!" })
    }
  }

  render(){
    return(
      <main>
        <h3>Turn: {this.state.turn}</h3>
        <div className="row">

          <Cell
            id="1"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

          <Cell
            id="2"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

          <Cell
            id="3"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

        </div>

        <div className="row">

          <Cell
            id="4"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

          <Cell
            id="5"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

          <Cell
            id="6"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />
        </div>

        <div className="row">

          <Cell
            id="7"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

          <Cell
            id="8"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

          <Cell
            id="9"
            incrementTurn={this.incrementTurn.bind(this)}
            currentTurn={this.state.turn}
            adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
          />

        </div>
        {this.state.winMsg ? <h3 className="win-msg">{this.state.winMsg}</h3> : null}
      </main>
    )
  }
}
