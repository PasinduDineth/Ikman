import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, FlatList, Image, Alert } from 'react-native'
import flatListData from '../Data/flatListData'
import Swipeout from 'react-native-swipeout'

class FlatListItem extends Component {
    static navigationOptions = {
        header: {
            visible: false,
          }
    }

    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null
        }
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null})
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key })
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey
                        Alert.alert(
                            'Alert',
                            'Are you sure want to delete ?',
                            [
                                {text: 'No', onPress: () => console.log('cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1)
                                    // Refresh FlatList
                                    this.props.parentFlatList.refreshFlatList(deletingRow)
                                }}
                            ],
                            { cancelable: true}
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipeSettings}>
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
            </Swipeout>
        )
    }
}

export default class BasicFlatList extends Component<{}> {
    constructor(props) {
        super(props)
        this.state = {
            deleteRowKey: null
        }
    }
    // refresh by changing state
    refreshFlatList = (deleteKey) => {
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            }
        })
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index})=>{
                        //console.log('Item = ${JSON.stringify(item)}, index = ${index}')
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>

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