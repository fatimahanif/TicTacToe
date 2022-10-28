import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const alertFunc = () => {
    alert('hi i am here')
  }
  return (
    <View style={styles.container}>
      {/* heading */}
      <Text style={styles.heading}>Tic Tac Toe</Text>

      {/* turn text */}
      <Text style={styles.turn_txt} >Turn: Player 1</Text>

      {/* buttons grid */}
      <View style={styles.btn_grid}>

        {/* row 1 */}
        <View style={styles.btn_row}>

          {/* button 1 */}
          <Pressable style={{...styles.button, ...styles.button_top, ...styles.button_left}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

          {/* button 2 */}
          <Pressable style={{...styles.button, ...styles.button_top}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

          {/* button 3 */}
          <Pressable style={{...styles.button, ...styles.button_top, ...styles.button_right}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

        </View>

        {/* row 2 */}
        <View style={styles.btn_row}>

          {/* button 4 */}
          <Pressable style={{...styles.button, ...styles.button_left}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

          {/* button 5 */}
          <Pressable style={styles.button} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

          {/* button 6 */}
          <Pressable style={{...styles.button, ...styles.button_right}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

        </View>

        {/* row 3 */}
        <View style={styles.btn_row}>

          {/* button 7 */}
          <Pressable style={{...styles.button, ...styles.button_bottom, ...styles.button_left}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

          {/* button 8 */}
          <Pressable style={{...styles.button, ...styles.button_bottom}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

          {/* button 9 */}
          <Pressable style={{...styles.button, ...styles.button_bottom, ...styles.button_right}} onPress={alertFunc} >
            <Text style={styles.btn_text}> </Text>
          </Pressable>

        </View>
        {/* end of grid */}
      </View>
      {/* player text and symbols */}
      <View>
        <Text style={styles.player_txt} >Player 1: X</Text>
        <Text style={styles.player_txt} >Player 2: O</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2430',
    alignItems: 'center'
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
    marginTop: 30,
    marginBottom: 30,
  },
  btn_row: {
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  button: {
    padding: 10,
    // backgroundColor: '#51557E',
    // elevation: 3,
    borderWidth: 1.5,
    height: 50,
    width: 50,
    borderColor: '#eee',
  },
  button_top:{
    borderTopWidth: 0,
  },
  button_bottom:{
    borderBottomWidth: 0,
  },
  button_left:{
    borderLeftWidth: 0,
  },
  button_right:{
    borderRightWidth: 0,
  },
  btn_text: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 18,
  },
  player_txt: {
    color: '#eee',
    fontSize: 16,
    textAlign: 'center',
  },
  turn_txt: {
    color: '#eee',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
});
