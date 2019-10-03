import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import { connect } from 'react-redux';

class ScreenD extends Component {

    static navigationOptions = {
        title: 'Screen D'
    }

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <SafeAreaView>
                <Text>Screen D</Text>
                <Button
                    title={'Go Back'}
                    onPress={() => this.props.navigation.goBack()}
                />
            </SafeAreaView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        username: state.screenReducer.username
    }
}

export default connect(mapStateToProps, {})(ScreenD);