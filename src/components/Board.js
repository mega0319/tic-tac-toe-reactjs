import React from 'react'
import Cell from './Cell.js'

export default class Board extends React.Component{
  constructor(){
    super()

    this.state ={
      winningCells: [],
      winMsg: false,
      turn: 1,
      turnMsg: "O's turn",
      board: [
        ['   ', '   ', '   '],
        ['   ', '   ', '   '],
        ['   ', '   ', '   ']
      ]
    }
  }

  incrementTurn(){
    this.setState({
      turn: this.state.turn + 1,
      turnMsg: this.turnMsg()
    })
    if (this.state.turn === 9 && this.state.winMsg === false) {
      this.setState({ winMsg: "DRAW!"})
    }
  }

  turnMsg(){
    let roundCounter = this.state.turn % 2
    return roundCounter === 1 ? "X's turn" : "O's turn"
  }

  adjustGameBoard(id, letter){
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

    this.setState({ board: boardCopy } , () => {
      this.calculateWin("O")
      this.calculateWin("X")
    })
  }

  calculateWin(letter){
    let board = this.state.board
    if (board[0][0] === ` ${letter} ` && board[0][1] === ` ${letter} ` && board[0][2] === ` ${letter} `){
      let cells = ['1', '2', '3']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }else if (board[1][0] === ` ${letter} ` && board[1][1] === ` ${letter} ` && board[1][2] === ` ${letter} `){
      let cells = ['4', '5', '6']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }else if (board[2][0] === ` ${letter} ` && board[2][1] === ` ${letter} ` && board[2][2] === ` ${letter} `){
      let cells = ['7', '8', '9']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }else if (board[0][0] === ` ${letter} ` && board[1][0] === ` ${letter} ` && board[2][0] === ` ${letter} `){
      let cells = ['1', '4', '7']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }else if (board[0][1] === ` ${letter} ` && board[1][1] === ` ${letter} ` && board[2][1] === ` ${letter} `){
      let cells = ['2', '5', '8']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }else if (board[0][2] === ` ${letter} ` && board[1][2] === ` ${letter} ` && board[2][2] === ` ${letter} `){
      let cells = ['3', '6', '9']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }else if (board[0][0] === ` ${letter} ` && board[1][1] === ` ${letter} ` && board[2][2] === ` ${letter} `){
      let cells = ['1', '5', '9']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }else if (board[0][2] === ` ${letter} ` && board[1][1] === ` ${letter} ` && board[2][0] === ` ${letter} `){
      let cells = ['3', '5', '7']
      this.setState({ winMsg: `${letter} wins!`, winningCells: cells })
    }
  }

  handlePlayAgainClick(){
      window.location.reload()
  }

  render(){
    return(
      <main>
        <h3 className="animated bounce title">Turn: {this.state.turn}</h3>
        <h4 className="title"> {this.state.turnMsg} </h4>
        <div className="board">
          <div className="row">

            <Cell
              id="1"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

            <Cell
              id="2"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

            <Cell
              id="3"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

          </div>

          <div className="row">

            <Cell
              id="4"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

            <Cell
              id="5"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

            <Cell
              id="6"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />
          </div>

          <div className="row">

            <Cell
              id="7"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

            <Cell
              id="8"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

            <Cell
              id="9"
              incrementTurn={this.incrementTurn.bind(this)}
              currentTurn={this.state.turn}
              adjustGameBoard={(id, letter) => this.adjustGameBoard(id, letter)}
              winningCells={this.state.winningCells}
              win={this.state.winMsg}
            />

          </div>
        </div>
        {this.state.winMsg ? <div className="align"> <br/> <button className="animated slideInLeft btn" onClick={this.handlePlayAgainClick.bind(this)}> Play Again! </button><h3 className="win-msg">{this.state.winMsg}</h3> </div> : null}
      </main>
    )
  }
}
