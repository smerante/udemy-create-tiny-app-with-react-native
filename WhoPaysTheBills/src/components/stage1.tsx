import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StageOne = () => {
    return  <View style={styles.container}>
      <Text>Stage 1</Text>
    </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default StageOne;