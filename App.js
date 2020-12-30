import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const liblouis = require('liblouis/easy-api')
// eslint-disable-next-line import/no-webpack-loader-syntax
const capi_url = require('file-loader!liblouis-build')
// eslint-disable-next-line import/no-webpack-loader-syntax
const easyapi_url = require('file-loader!liblouis/easy-api')


require.context('liblouis-build/tables', false)
const table_url = 'tables/'
const asyncLiblouis = new liblouis.EasyApiAsync({
  capi: capi_url,
  easyapi: easyapi_url,
})

asyncLiblouis.enableOnDemandTableLoading(table_url);

asyncLiblouis.version(function(version) {
  console.info("Running liblouis version ", version, "through asynchronous API.");
});

asyncLiblouis.translateString(
  'tables/unicode.dis,tables/en-ueb-g2.ctb',
  'Hi, Mom! You owe me: $3.50.',
  e => {
    console.log(e)
  }
)


export default function App() {

  // var unicode_braille = liblouis.lou_translateString("tables/unicode.dis,tables/de-de-g0.utb", "10 Ziegen")
  // console.log(unicode_braille, "unicode_braille")
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
