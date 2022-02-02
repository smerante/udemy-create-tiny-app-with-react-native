import { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyProvider, MyContext } from './src/context/index';
import StageOne from './src/components/stage1';
import StageTwo from './src/components/stage2';

const Provider = (props: any) => {
  return <MyProvider>
    {props.children}
  </MyProvider>
};
class App extends Component {

  static contextType?= MyContext;

  render() {
    return (
      <Provider>
        <ScrollView>
          <View style={styles.container}>
           
           {
             this.context.data.stage === 1 ?
             <StageOne/> : 
             <StageTwo/>
           }

          </View>
        </ScrollView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
  },
});

export default App;
