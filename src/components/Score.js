import React from 'react';
import { connect } from 'react-redux'


const Score = props => (
    <div>
        <div>Player {props.currentPlayer}'s turn</div>
        <div>Right Guesses: {props.correctGuesses}</div>
        <div>Cards Left On Deck: {props.cardsRemaining}</div>
        <div>Face Up Pile: {props.faceUpPileCount}</div>
        <div>Gamer 1: {props.player1}</div>
        <div>Gamer 2: {props.player2}</div>
    </div>
)

const mapStateToProps = (state) => {
    console.log('map to state to props, state.deckId: ', state);
    return {
        player1: state.game.scores[0],
        player2: state.game.scores[1],
        currentPlayer: state.game.currentPlayer + 1,
        correctGuesses: state.game.correctGuesses,
        faceUpPileCount: state.deck.faceUpPile.length,
        cardsRemaining: state.deck.remaining,
    }
}

export default connect(
    mapStateToProps
)(Score);
