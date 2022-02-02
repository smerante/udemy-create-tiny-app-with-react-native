import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { MyContext } from '../context';

const StageTwo = () => {
    const context = useContext(MyContext);

    return <View>
        <Text>Who Pays:</Text>
        <Text style={styles.title}>{context.data.result}</Text>
        <Button
            style={styles.button}
            title={'Try Again'}
            onPress={() => context.tryAgain()}
        />
        <Button
            style={styles.button}
            title={'Start Over'}
            onPress={() =>context.resetGame()}
        />
    </View >
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DB3EB1',
        marginTop: 20
    },
    title: {
        fontSize: 24
    }
});

export default StageTwo;