#  Hi - Lo 

# The Rules 

Play consists of a dealer and a player.

The dealer draws a card from the top of the deck and places it face up.

The player must guess whether the next card drawn from the deck will be higher or lower than the face up card.

Once the player guesses, the dealer draws the next card and places it face up on top of the previous card.

If the player is correct, go back to step 2.

If the player is wrong, the player receives a point for each card in the face up pile, and the face up pile is discarded. Then play begins at step 1 again.

When the player has made three correct guesses in a row, s/he may make another guess, or choose to pass and the roles are reversed with the face up pile continuing to build. The player may choose to continue if there is a high likelihood that their next guess would be correct. If they are wrong, play starts over at step 1 and the player must again make three correct guesses before being allowed to pass. If they are correct, they can continue or pass. The goal is to end the game with as few points as possible.

The App Your goal is to build a simple web app to implement this game. The Deck Of Cards API should be useful. You can use whatever frameworks you deem useful.

# The UI contains:

· An image of the current card to guess against.

· Some indication of whose turn it is.

· Scores for each player.

· Number of cards remaining in the deck.

· Number of cards in the face up pile (i.e., the points on the line).

· Buttons to guess Hi or Low, which drive the game forward.

· A button to pass which is disabled unless it is allowed given the current game state.

· A button to reset the game.

· High levels of polish on the UI styling are less important than an intuitive interface and working javascript. You can assume this game will be played hotseat style (i.e., two people passing the computer back and forth), so you don't need to implement an AI for player 2.

You can assume that we will be using the Chrome browser to play your game, so there is no need to worry about browser compatibility.

# Setup 

Install NodeJS and then npm install

# Available Scripts In the project directory, you can run:

npm start Runs the app in the development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

npm run build Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!