import React from 'react'

export default class Cell extends React.Component{
  constructor(){
    super()

    this.state ={
      X: false,
      O: false,
      clicked: false
    }
  }

  handleClick(){
    let roundCounter = this.props.currentTurn % 2
    roundCounter === 1 ? this.clickedO() : this.clickedX()
    this.props.incrementTurn()
  }

  clickedX(){
    this.props.adjustGameBoard(this.props.id, "X")
    this.setState({
      X: true,
      clicked: true
    })
  }

  clickedO(){
    this.props.adjustGameBoard(this.props.id, "O")
    this.setState({
      O: true,
      clicked: true
    })
  }

  cellStatus(){
    let winner = this.props.winningCells.includes(this.props.id)
    if (winner){
      return 'cell win'
    }else{
      return 'cell'
    }
  }

  oVsX(){
    if (this.state.X){
      return <span className="animated fadeIn letter">X</span>
    }else if (this.state.O){
      return <span className="animated fadeIn letter">O</span>
    }else {
      return null
    }
  }

  render(){
    if (!this.props.win){
      return (
        <div className={this.cellStatus()} onClick={() => this.handleClick()}>
          {this.oVsX()}
        </div>
      )
    }else{
      return (
        <div className={this.cellStatus()} >
          {this.oVsX()}
        </div>
      )
    }
  }
}
