import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  //functions and variables
  function playTurn(index) {
    //displaying the move
    let newList = gameList;
    newList.forEach((value, i) => {
      index == i ? newList[index] = turn.symbol : value
    });
    setGameList(newList);

    // changing player and symbol
    turn.player == 1 ? setTurn({ player: 2, symbol: 'O' }) : setTurn({ player: 1, symbol: 'X' });

    // alert('hi i am ' + index + turn.symbol);

    //checking game status
    checkGame();
  }

  const checkGame = () => {
    //defing rules
    //rows
    let row1 = gameList[0] != '' && gameList[0] === gameList[1] && gameList[1] === gameList[2];
    let row2 = gameList[3] != '' && gameList[3] === gameList[4] && gameList[4] === gameList[5];
    let row3 = gameList[6] != '' && gameList[6] === gameList[7] && gameList[7] === gameList[8];
    //columns
    let col1 = gameList[0] != '' && gameList[0] === gameList[3] && gameList[3] === gameList[6];
    let col2 = gameList[1] != '' && gameList[1] === gameList[4] && gameList[4] === gameList[7];
    let col3 = gameList[2] != '' && gameList[2] === gameList[5] && gameList[5] === gameList[8];
    //diagonals
    let diag1 = gameList[0] != '' && gameList[0] === gameList[4] && gameList[4] === gameList[8];
    let diag2 = gameList[2] != '' && gameList[2] === gameList[4] && gameList[4] === gameList[6];

    //checking rules
    let rules = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    //checking winner if any
    let winner = rules.findIndex((e => e == true));
    if (winner > -1) {
      // row 1, col 1 or diag 1
      if (winner == 0 || winner == 3 || winner == 6) {
        alert(gameList[0] + ' won !');
      }
      // col 3 or diag 2
      else if (winner == 5 || winner == 7) {
        alert(gameList[2] + ' won !');
      }
      // row 2 or col 2
      else if (winner == 1 || winner == 4) {
        alert(gameList[4] + ' won !');
      }
      // row 3
      else if (winner == 2) {
        alert(gameList[6] + ' won !');
      }
      //resetting the game
      resetGame();
    }
    //checking draw
    else if (gameList.filter(e => e != '').length == 9) {
      alert('Game Draw!');
      resetGame();
    }
  }

  const startGame = () => {
    setGameList(['', '', '', '', '', '', '', '', '']);
    setTurn({ player: 1, symbol: 'X' });
  }

  const resetGame = () => {
    setGameList(['', '', '', '', '', '', '', '', '']);
    setTurn({ player: 1, symbol: 'X' });
  }

  // setting variables for turn and game list
  const [winner, setWinner] = useState('Draw');
  const [gameList, setGameList] = useState(['', '', '', '', '', '', '', '', '']);
  const [turn, setTurn] = useState({
    player: 1,
    symbol: 'X'
  });

// layout
  return (
    <View style={styles.container}>
      {/* heading */}
      <Text style={styles.heading}>Tic Tac Toe</Text>

      {/* body container */}
      <View style={styles.body}>

        {/* turn text */}
        <Text style={styles.turn_txt} >Turn: Player {turn.player}</Text>

        {/* buttons grid */}
        <View style={styles.btn_grid}>

          {/* row 1 */}
          <View style={styles.btn_row}>

            {/* button 1 */}
            <Pressable style={{ ...styles.button, ...styles.button_top, ...styles.button_left }} onPress={() => { playTurn(0) }} disabled={gameList[0] != ''} >
              <Text style={styles.btn_text}>{gameList[0]}</Text>
            </Pressable>

            {/* button 2 */}
            <Pressable style={{ ...styles.button, ...styles.button_top }} onPress={() => { playTurn(1) }} disabled={gameList[1] != ''}>
              <Text style={styles.btn_text}>{gameList[1]}</Text>
            </Pressable>

            {/* button 3 */}
            <Pressable style={{ ...styles.button, ...styles.button_top, ...styles.button_right }} onPress={() => { playTurn(2) }} disabled={gameList[2] != ''}>
              <Text style={styles.btn_text}>{gameList[2]}</Text>
            </Pressable>

          </View>

          {/* row 2 */}
          <View style={styles.btn_row}>

            {/* button 4 */}
            <Pressable style={{ ...styles.button, ...styles.button_left }} onPress={() => { playTurn(3) }} disabled={gameList[3] != ''}>
              <Text style={styles.btn_text}>{gameList[3]}</Text>
            </Pressable>

            {/* button 5 */}
            <Pressable style={styles.button} onPress={() => { playTurn(4) }} disabled={gameList[4] != ''}>
              <Text style={styles.btn_text}>{gameList[4]}</Text>
            </Pressable>

            {/* button 6 */}
            <Pressable style={{ ...styles.button, ...styles.button_right }} onPress={() => { playTurn(5) }} disabled={gameList[5] != ''}>
              <Text style={styles.btn_text}>{gameList[5]}</Text>
            </Pressable>

          </View>

          {/* row 3 */}
          <View style={styles.btn_row}>

            {/* button 7 */}
            <Pressable style={{ ...styles.button, ...styles.button_bottom, ...styles.button_left }} onPress={() => { playTurn(6) }} disabled={gameList[6] != ''}>
              <Text style={styles.btn_text}>{gameList[6]}</Text>
            </Pressable>

            {/* button 8 */}
            <Pressable style={{ ...styles.button, ...styles.button_bottom }} onPress={() => { playTurn(7) }} disabled={gameList[7] != ''}>
              <Text style={styles.btn_text}>{gameList[7]}</Text>
            </Pressable>

            {/* button 9 */}
            <Pressable style={{ ...styles.button, ...styles.button_bottom, ...styles.button_right }} onPress={() => { playTurn(8) }} disabled={gameList[8] != ''}>
              <Text style={styles.btn_text}>{gameList[8]}</Text>
            </Pressable>

          </View>
          {/* end of grid */}
        </View>

        {/* player text and symbols */}
        <View>
          <Text style={styles.player_txt} >Player 1: X</Text>
          <Text style={styles.player_txt} >Player 2: O</Text>
        </View>

        {/* start and reset buttons */}
        <View style={styles.btns_container} >
          <Button color='#51557E' title='Start' onPress={startGame} />
          <Button color='#51557E' title='Reset' onPress={resetGame} />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2430',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
  body: {
    flex: 1,
    backgroundColor: '#1B2430',
    justifyContent: 'center'
  },
  heading: {
    backgroundColor: '#51557E',
    color: '#eee',
    fontSize: 24,
    width: '100%',
    padding: 10,
  },
  btn_grid: {
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 70,
  },
  btn_row: {
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: '#51557E',
    // elevation: 3,
    borderWidth: 1.5,
    height: 70,
    width: 70,
    borderColor: '#eee',
  },
  button_top: {
    borderTopWidth: 0,
  },
  button_bottom: {
    borderBottomWidth: 0,
  },
  button_left: {
    borderLeftWidth: 0,
  },
  button_right: {
    borderRightWidth: 0,
  },
  btn_text: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 32,
  },
  player_txt: {
    color: '#eee',
    fontSize: 16,
    textAlign: 'center',
  },
  turn_txt: {
    color: '#eee',
    fontSize: 22,
    textAlign: 'center',
  },
  btns_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30
  },
});
