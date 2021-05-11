/* You are given coordinates, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.
Return true if the square is white, and false if the square is black.
The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second. */

var squareIsWhite = function(coordinates) {
     square = {
        a2: 'white', a4: 'white', a6: 'white', a8: 'white',
        b1: 'white', b3: 'white', b5: 'white', b7: 'white',
        c2: 'white', c4: 'white', c6: 'white', c8: 'white',
        d1: 'white', d3: 'white', d5: 'white', d7: 'white',
        e2: 'white', e4: 'white', e6: 'white', e8: 'white',
        f1: 'white', f3: 'white', f5: 'white', f7: 'white',
        g2: 'white', g4: 'white', g6: 'white', g8: 'white',
        h1: 'white', h3: 'white', h5: 'white', h7: 'white'       
    }
    if(coordinates === 'white'){
        return true;
        }else{
        return false;
        }
}