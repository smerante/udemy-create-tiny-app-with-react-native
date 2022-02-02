import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, ListItem, Text } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyContext } from '../context';

const StageOne = () => {
    const context = useContext(MyContext);
    const minNameLength = 3;
    const maxNameLength = 10;
    console.warn(context.data);

    const renderPlayers = () => {

    }
    return (
        <>
            <Formik
                initialValues={{ player: '' }}
                validationSchema={Yup.object({
                    player: Yup.string()
                        .min(minNameLength, `Must be more than ${minNameLength} characters`)
                        .max(maxNameLength, `Max amount of characters is ${maxNameLength}`)
                        .required('Name is required'),
                })}
                onSubmit={(values, { resetForm }) => { context.addPlayer(values.player) }}>
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                    <>
                        <Text>Who Pays The Bill?</Text>
                        <Input
                            placeholder='Add name'
                            leftIcon={{ type: 'antdesign', name: 'adduser' }}
                            inputContainerStyle={{
                                marginHorizontal: 50,
                                marginTop: 50,
                            }}
                            onChangeText={handleChange('player')}
                            onBlur={handleBlur('player')}
                            value={values.player}
                            renderErrorMessage={errors.player !== undefined && touched.player}
                            errorMessage={errors.player}
                            errorStyle={{
                                marginHorizontal: 50
                            }}
                        />
                        <Button
                            title='Add Player'
                            onPress={() => handleSubmit()}
                            buttonStyle={styles.button}
                        />
                    </>
                )}
            </Formik>
            <View style={{ padding: 20, width: '100%' }}>
                {
                    context?.data?.players?.length > 0 &&
                    <>
                        <Text>List of players</Text>
                        {context?.data?.players.map((player, i) => {
                           return <ListItem
                                key={i}
                                bottomDivider
                                style={{ width: '100%' }}
                                onLongPress={()=>{context.removePlayer(i)}}
                            >
                                <ListItem.Chevron />
                                <ListItem.Content>
                                    <ListItem.Title>{player}</ListItem.Title>
                                </ListItem.Content>

                            </ListItem>
                        })}
                        <Button
                            title='Find who pays'
                            onPress={() => context.nextStage()}
                            buttonStyle={styles.button}
                        />
                    </>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DB3EB1',
        marginTop: 20
    }
});

export default StageOne;