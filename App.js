import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import liblouis from 'liblouis/easy-api'
import capi_url from 'file-loader!liblouis-build/build-no-tables-utf32.js'
import easyapi_url from 'file-loader!liblouis/easy-api'


require.context('liblouis-build/tables', false)
const table_url = 'tables/'
const asyncLiblouis = new liblouis.EasyApiAsync({
	capi: capi_url,
	easyapi: easyapi_url
});

asyncLiblouis.enableOnDemandTableLoading(table_url);

asyncLiblouis.version(function(version) {
  console.log("Running liblouis version ", version, "through asynchronous API.");
});


export default function App() {

  asyncLiblouis.translateString("unicode.dis,de-de-g0.utb", "10 Ziegen", e => {
    console.log('translated string:', e)
  })
  
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
