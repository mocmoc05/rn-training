import React, { Component } from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import {connect} from 'react-redux';

import {changeName, changeAge} from '../../redux/action'

class HomeA extends Component {
    
    static navigationOptions = {
        title: 'Home A'
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#ddd'}}>
                <Text>Home A</Text>
                <Text>Name: {this.props.data.name}</Text>
                <Text>Age: {this.props.data.age}</Text>
                <Button
                    title={'Open Modal'}
                    onPress={() => this.props.navigation.navigate('MyModal')}
                />
                <Button 
                    title={'Change Name'} 
                    onPress={() => this.props.changeName()}
                />

                <Button
                    title={'Change Age'}
                    onPress={() => this.props.changeAge(100)}
                />

                <Button 
                    title='Go to B' 
                    onPress={() => {this.props.navigation.navigate('HomeB')}}
                />
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.homeReducer,
    }
}

export default connect(mapStateToProps, {changeName, changeAge})(HomeA);


// đưa những state có khả năng được sử dụng ở các màn hình.

// xay dung 1 kho (store: tat ca state sử dụng chung, các hành động (action) sử dụng chung, ... )

// trong kho chưa nhiều kho nhỏ, mỗi kho chứa 1 tập hợp các state dùng chung.

