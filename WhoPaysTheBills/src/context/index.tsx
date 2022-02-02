import React, { Component } from 'react';
import Toast from 'react-native-toast-message';

const initalState = {
    data: {
        stage: 1,
        players: [],
        result: '',
    },
    addPlayer: (name: string) => { },
    removePlayer: (i: number) => { },
    nextStage: () => { },
};

const MyContext = React.createContext(initalState);



class MyProvider extends Component {
    state = initalState;

    addPlayerHandler = (name: string) => {
        this.setState((prevState: any) => ({
            ...prevState,
            data: {
                ...prevState.data,
                players: [...prevState.data.players, name],
            }
        }));
    }
    removePlayerHandler = (i: number) => {
        const copyOfPlayers = this.state.data.players;
        copyOfPlayers.splice(i, 1);
        this.setState((prevState: any) => ({
            ...prevState,
            data: {
                ...prevState.data,
                players: copyOfPlayers,
            }
        }));
    }

    nextStageHandler = () => {
        const { players } = this.state.data;
        if (players.length > 1) {
            this.setState((prevState: any) => ({
                ...prevState,
                data: {
                    ...prevState.data,
                    stage: 2,
                }
            }));
        } else {
            Toast.show({
                type: 'error',
                text1: 'Not enough players',
                text2: 'Should have 2 or more players'
            })
        }
    }
    render() {
        return (
            <>
                <MyContext.Provider value={{
                    data: this.state.data,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHandler,
                    nextStage: this.nextStageHandler,
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export {
    MyProvider,
    MyContext,
}