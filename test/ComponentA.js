//1. Class component => Stateful component
// định nghĩa component bằng class.
// chuẩn react => JSX 
import React from 'react';
import {Text, View, Button, FlatList} from 'react-native';
import { PropsComponent } from './PropsComponent';

const arr1 = [ 1, 87, 13, 23];
const arr2 = [ 12, 43, 12, 98];

class ComponentA extends React.Component{
    constructor(){
        super();
        //state
        this.state = {
            name: 'Hoan',
            number: 0,
            number1: null,
            number2: null,
            index1: null,
            index2: null,
            result: ''
        }
        this.changeName = this.changeName.bind(this)
        this.giam = this.giam.bind(this)
        this.tang = this.tang.bind(this)
        this.check = this.check.bind(this)
    }

    changeName(){
        // console.log(this)
        this.setState({name: 'Huy'})
    }

    giam(){
        this.setState({ number: this.state.number - 1 })
    }

    tang(){
        this.setState({ number: this.state.number + 1 })
    }

    check() {
        const {number1, number2} = this.state;
        if(number1 > number2) this.setState({result: 'lớn hơn'})
        this.setState({result: 'nhỏ hơn'})
    }

    render(){
        return(
            <View>
                <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
                    <FlatList
                        data={arr1}
                        renderItem={({item, index}) => (
                            <PropsComponent number={item} style={{ backgroundColor: this.state.index2 == index ? '#666' : '#eee', margin: 8, flex: 1, textAlign: 'center', padding: 20 }}/>
                        )}
                        numColumns={4}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <FlatList
                        data={arr2}
                        renderItem={({ item, index }) => (
                            <Text 
                                style={{ backgroundColor: this.state.index2 == index ? '#666' : '#eee', margin: 8, flex: 1, textAlign: 'center', padding: 20 }}
                                onPress={() => this.setState({ number2: item, index2: index })}
                            >
                                {item}
                            </Text>
                        )}
                        numColumns={4}
                        keyExtractor={(item, index) => index.toString()}
                        extraData={this.state}
                    />
                </View>
                <Button title={'Kiem tra'} onPress={this.check}/>
                <Text>ket qua: {this.state.number1} {this.state.result} {this.state.number2}</Text>
            </View>
        )
    }
}

export default ComponentA;