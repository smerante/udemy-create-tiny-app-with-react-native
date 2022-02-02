import React, { Component } from 'react';

const initalState = {
    data: {
        stage: 1,
        players: [],
        result: '',
    },
    addPlayer: (name: string) => { },
    removePlayer: (i: number) => { },
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
        copyOfPlayers.splice(i,1);
        this.setState((prevState: any) => ({
            ...prevState,
            data: {
                ...prevState.data,
                players: copyOfPlayers,
            }
        }));
    }

    render() {
        return (
            <>
                <MyContext.Provider value={{
                    data: this.state.data,
                    addPlayer: this.addPlayerHandler,
                    removePlayer: this.removePlayerHandler,
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