import {Text, View} from 'react-native';
import React, {Component} from 'react';
import {DataProvider, LayoutProvider, RecyclerListView} from 'recyclerlistview';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import SingleUser from '../organization/single_user/SingleUser';
import styles from './styles';

class UserList extends Component {
  constructor(props) {
    super(props);

    //state
    this.state = {
      list: new DataProvider((r1, r2) => {
        return r1 != r2;
      }),
      userDataList: [],
    };

    //ref
    this.layoutProvider = new LayoutProvider(
      i => {
        return this.state.list.getDataForIndex(i).type;
      },
      (type, dim) => {
        (dim.width = ScreenRatio.width),
          (dim.height = ScreenRatio.height / 7.5);
      },
    );
  }

  //loadData
  componentDidMount() {
    this.loadDataFromApi();
  }

  loadDataFromApi = () => {
    const data = this.props.route.params.data;
    if (data.length != 0) {
      for (i in data) {
        this.state.userDataList.push({
          type: 'NORMAL',
          item: {
            id: data[i].id,
            email: data[i].email,
            firstName: data[i].first_name,
            lastName: data[i].last_name,
            avatar: data[i].avatar,
          },
        });
        if (i == data.length - 1) {
          this.setState({
            list: new DataProvider((r1, r2) => {
              r1 != r2;
            }).cloneWithRows(this.state.userDataList),
          });
        }
      }
    }
  };

  //recycler render
  rowRenderer = (type, data, index) => {
    return <SingleUser data={data.item} />;
  };
  render() {
    const {list, userDataList} = this.state;
    return (
      <View style={styles.container}>
        {userDataList.length !== 0 && (
          <RecyclerListView
            dataProvider={list}
            rowRenderer={this.rowRenderer}
            layoutProvider={this.layoutProvider}
          />
        )}
      </View>
    );
  }
}

export default UserList;
