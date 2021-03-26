Hello! This is a demo snake game that was bundled via Webpack 5 with using: React.js, Node.js , Phaser3 , Mongoose.

TO START:
MAKE SURE that you have an installed Node, npm.


STRUCTURE:
1) The starting point is "./index.html" with "./src/index.js"
2) API: "./server.js".
3) React's structure is in "./src/components":
    -- App.jsx - fetchs data from API by a specific request to get ALREADY sorted data by SCORE from API. Also it has routes to Pages.
    -- AuthScreen.jsx - 
    -- GameHomePage.jsx - a component to include the Phaser3 game
    -- Header.jsx - a simple header component
    -- RatingTable.jsx - a component to show the sorted by score API data in a table
    -- RatingTableCalc.jsx - an additional component for RatingTable.jsx
    -- StickyFooter.jsx - a simple sticky footer.
4) "./src/phaser" has 3 scenes of the game.
    Game menu - .../StartingScene.js
    GameScene - the snake game - .../GameScene.js
    FinalScene - the final scene to restart game.
5) UI folder contains one React component to make some styling. Basically, a custom made WRAPPER.
6) "./src/assets" contains images for the game.
7) "./src/webpack" contains Web Pack 5 configs. Note about "./.babellrc.js".

STEPS TO USE:
1) clone this project.
2) npm install
3) npm start   <--- first console tab
4) node server.js (for API) <--- second console tab
5) mongod <--- third tab: to use the local MongoDB. 

Additional INFO:
1) you can use MongoDB locally via "mongo" in another tab OR via GUI like Robo 3T.
2) You can use MongoDB Atlas to not run MongoDB locally. Check https://www.mongodb.com/cloud/atlas

Big thanks to Taylor Nodell for giving a template for Phaser + React. 
His contacts: @tayloredtotaylor, https://github.com/nodes777?tab=repositories
