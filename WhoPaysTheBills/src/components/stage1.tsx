import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button, ListItem, Text } from 'react-native-elements';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MyContext } from '../context';

const StageOne = () => {
    const context = useContext(MyContext);
    const minNameLength = 3;
    const maxNameLength = 3;
    return (
        <Formik
            initialValues={{ player: '' }}
            validationSchema={Yup.object({
                player: Yup.string()
                    .min(minNameLength, `Must be more than ${minNameLength} characters`)
                    .max(maxNameLength, `Max amount of characters is ${maxNameLength}`)
                    .required('Name is required'),
            })}
            onSubmit={(values, { resetForm }) => { alert(JSON.stringify(values)) }}>
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
                    />
                    <Button 
                        title='Add Player'
                        onPress={() => handleSubmit()}
                    />
                </>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default StageOne;