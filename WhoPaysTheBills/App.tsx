import { Component, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MyProvider, MyContext } from './src/context/index';
import StageOne from './src/components/stage1';
import StageTwo from './src/components/stage2';
import Toast from 'react-native-toast-message';

const Provider = (props: any) => {
  return <MyProvider>
    {props.children}
  </MyProvider>
};

const AppWrapper = () => {

  const context = useContext(MyContext);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>

          {
            context.data.stage === 1 ?
              <StageOne /> :
              <StageTwo />
          }

        </View>
      </ScrollView>
      <Toast />
    </>
  );
}
class App extends Component {
  render() {
    return <Provider>
      <AppWrapper></AppWrapper>
    </Provider>
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
