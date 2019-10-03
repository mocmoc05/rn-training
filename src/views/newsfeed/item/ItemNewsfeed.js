import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ultils } from '../../../config/ultils';
import TextApp from '../../../component/TextApp';

export default class ItemNewsfeed extends Component {
    state = {  }
    render() {
        const content = 'Startup Phần Lan Varjo vừa tung bộ kính thực tế ảo (VR) đầu tiên hôm 19/2 trong nỗ lực nắm bắt thị trường VR cho các ngành công nghiệp đang phát triển, bất chấp kính VR chậm được người dùng đón nhận.'
        return (
            <View style={style.card}>
                <View style={[style.row]}>
                    <Image source={require('../../../assets/img/avatar.png')} style={style.avatar}/>
                    <View style={{flex: 1}}>
                        <TextApp style={style.name}>Mark Vu</TextApp>
                        <TextApp style={style.time}>11/05/2019</TextApp>
                    </View>
                    <TouchableOpacity style={{padding: 8}}>
                        <Image source={require('../../../assets/img/3-dots.png')} style={{ width: 18, height: 18 }} resizeMode={'contain'} />
                    </TouchableOpacity>
                </View>
                <View style={style.image}>
                    <TextApp>{content}</TextApp>
                    <Image
                        style={{ flex: 1, width: '100%', marginVertical: 8 }}
                        source={require('../../../assets/img/post.png')}
                    />
                    <View style={[style.row, {justifyContent: 'space-between'}]}>
                        <TextApp>1,189 tokens</TextApp>
                        <TouchableOpacity style={style.vote}>
                            <TextApp>Vote</TextApp>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[style.row, style.footer]}>
                    <View style={[style.row, {flex: 1}]}>
                        <Image source={require('../../../assets/img/like.png')} style={style.reaction} resizeMode={'contain'}/>
                        <TextApp style={style.itemFooter}>10 Like</TextApp>
                    </View>
                    <View style={[style.row, { flex: 1 }]}>
                        <Image source={require('../../../assets/img/comment.png')} style={style.reaction} resizeMode={'contain'}/>
                        <TextApp style={style.itemFooter}>10 Comment</TextApp>
                    </View>
                    <View style={[style.row, { flex: 1, justifyContent: 'flex-end' }]}>
                        <Image source={require('../../../assets/img/share.png')} style={style.reaction} resizeMode={'contain'}/>
                        <TextApp style={style.itemFooter}>Share</TextApp>
                    </View>
                </View>
            </View>
        )
    }
}

const style = {
    row: {flexDirection: 'row', alignItems: 'center',},
    card: {backgroundColor: '#fff', borderRadius: 4, margin: 8, padding: 8},
    avatar: {width: Ultils.dimensions.width / 10, height: Ultils.dimensions.width / 10, borderRadius: Ultils.dimensions.width / 20, marginRight: 8,},
    name: {fontSize: 16, fontWeight: '500',},
    time: {fontSize: 12, color: '#444'},
    image: {marginVertical: 8,},
    footer: { borderTopColor: '#ddd', borderTopWidth: 1,},
    itemFooter: {padding: 8, textAlign: 'center', color: '#555'},
    reaction: {width: 20, height: 27},
    vote: { backgroundColor: '#F2BB77', padding: 8, borderRadius: 20}
}