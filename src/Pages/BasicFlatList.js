import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, FlatList, Image } from 'react-native'
import flatListData from '../Data/flatListData'

class FlatListItem extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#154360' }}>
                    <Image source={{uri: this.props.item.imageURL}} style={{width: 100, height: 100, margin: 5}} />

                    <View style={{ flex: 1, flexDirection:'column'}}>
                        <Text style={styles.FlatListItem}> {this.props.item.name} </Text>
                        <Text style={styles.FlatListItem}> {this.props.item.foodDescription} </Text>
                    </View>

                </View>
                <View style={{height: 1, backgroundColor: 'white'}} />
            </View>   
        )
    }
}

export default class BasicFlatList extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index})=>{
                        //console.log('Item = ${JSON.stringify(item)}, index = ${index}')
                        return (
                            <FlatListItem item={item} index={index}>

                            </FlatListItem>
                        )
                    }}
                    >

                </FlatList>
            </View>       
        )
    }
}

const styles = StyleSheet.create({
    FlatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 20
    }
})