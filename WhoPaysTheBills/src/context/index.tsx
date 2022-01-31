import React, { Component } from 'react';

const initalState = {
    stage: 1,
    players: [],
    result: '',
};

const MyContext = React.createContext(initalState);


class MyProvider extends Component {
    state = initalState;

    render() {
        return (
            <>
                <MyContext.Provider value={this.state}>
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