// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import { BarChart, XAxis } from 'react-native-svg-charts'

class Chart extends Component
{
  constructor (props)
  {
    super(props);
  }

  render ()
  {
    const data   = [29, 30, 70, 50, 34, 98, 51, 35, 53, 24, 50];

    return (
      <View style={styles.container}>
        <BarChart
          style={{ flex: 1 }}
          data={ data }
          contentInset={{ top: 30, bottom: 30 }}/>

        <XAxis
          style={{ marginHorizontal: -10, marginTop: 15}}
          data={ data }
          formatLabel={ (value, index) => index }
          contentInset={{ left: 25, right: 25 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '60%'
  }
});

export default Chart;