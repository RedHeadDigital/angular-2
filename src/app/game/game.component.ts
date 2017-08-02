import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private randomNumber = () => 1 + Math.floor(Math.random() * 9);
  private newGameState = () => ({
    randomNumberOfStars: this.randomNumber(),
    selectedNumbers: [],
    usedNumbers: [],
    answerIsCorrect: null,
    redraws: 5,
    status: 'begin'
  })

  constructor() { }

  state;
  ngOnInit() {
    this.state = this.newGameState()
  }

  selectNumber($event) {
    let selection = $event.number
    if (this.state.selectedNumbers.indexOf(selection) >= 0 || this.state.usedNumbers.indexOf(selection) >= 0) { return; }
    this.state.selectedNumbers.push(selection)
    this.state.answerIsCorrect = null
  }

  unselectNumber($event) {
    let selection = $event.number
    this.state.selectedNumbers = this.state.selectedNumbers.filter(number => number !== selection)
    this.state.answerIsCorrect = null
  }

  checkAnswer() {
    this.state.answerIsCorrect = this.state.randomNumberOfStars === this.state.selectedNumbers.reduce((acc, n) => acc + n, 0)
  }

  acceptAnswer() {
    this.state.usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
    this.state.selectedNumbers = [];
    this.state.answerIsCorrect = null;
    this.state.randomNumberOfStars = this.randomNumber();
    this.checkStatus()
  }

  redraw() {
    if (this.state.redraws === 0) { return };
    this.state.selectedNumbers = []
    this.state.randomNumberOfStars = this.randomNumber();
    this.state.answerIsCorrect = null;
    this.state.redraws = this.state.redraws - 1;
    this.checkStatus()
  }

  updateStatus($event) {
    let newStatus = $event.status;

    switch (newStatus) {
      case 'play':
        this.state.status = newStatus
        break;
      case 'reset':
        this.resetGame()
        break;
    }

  }

  private resetGame() {
    this.state = this.newGameState()
    this.state.status = 'play'
  }

  private checkStatus() {
    if (this.state.usedNumbers.length === 9) {
      this.state.status = 'win'
    } else if (this.state.redraws === 0 && !this.possibleOptions(this.state)) {
      this.state.status = 'end'
    }
  }

  private possibleOptions({ randomNumberOfStars, usedNumbers }) {

    const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number => this.state.usedNumbers.indexOf(number) === -1)

    return this.possibleSolutionsSum(possibleNumbers, randomNumberOfStars)

  }

  private possibleSolutionsSum(arr, n) {
    console.log(arr, n)
    if (arr.indexOf(n) >= 0) { return true; }
    if (arr[0] > n) { return false; }
    if (arr[arr.length - 1] > n) {
      arr.pop();
      return this.possibleSolutionsSum(arr, n)
    }
    let listSize = arr.length
      let combinationsCount = (1 << listSize)
      console.log(combinationsCount)
    for (let i = 1; i < combinationsCount; i++) {
      var combinationsSum = 0;
      for (let j = 0; j < listSize; j++) {
        if (i & (1 << j)) { combinationsSum += arr[j] }

      }
      if (n === combinationsSum) { return true; }
    }
  }

  // private possibleSolutions() {
  //   let possibleNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(number => this.state.usedNumbers.indexOf(number) === -1)
  //   let randomNumberOfStars = this.state.randomNumberOfStars

  //   if (possibleNumber.indexOf(randomNumberOfStars) >= 0) { return true; }
  //   if (possibleNumber[0] > randomNumberOfStars) { return false; }
  //   if(possibleNumber[possibleNumber.length - 1] > randomNumberOfStars){
  //     possibleNumber.pop();
  //     return this.possibleSolutions()
  //   }

  // }

}
