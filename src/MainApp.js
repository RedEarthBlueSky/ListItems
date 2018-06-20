import React, { Component } from 'react';
import { StyleSheet, View, ListView, Image, Text }
  from 'react-native';

const basketIcon = require('./images/backet.png');

//  create the class to render the list of Items
//  keep the items on the state so we can insert and remove easily
class MainApp extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //  the dataSource property defines the array of elements
    //  we are going to render to the list
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  //  used to render individual items
  renderRow(record) {
    // to be defined
  }

  //  render method defines the list view component
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sales</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
  flex: 1,
  backgroundColor: '#fff',
  },
  title: {
    backgroundColor: '#0f1b29',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    tintColor: '#fff',
    height: 22,
    width: 22,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
