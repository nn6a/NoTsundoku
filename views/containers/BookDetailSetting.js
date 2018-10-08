import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookOperations, bookSelectors} from '../../state/ducks/book';

import {DatePicker} from 'native-base';

class BookDetailSetting extends Component {
    render() {
        const {selectedBook} = this.props;

        return (
            <View>
                <Text>ID: {selectedBook.id}</Text>
                <Text>Title: {selectedBook.title}</Text>
                <Text>Author: {selectedBook.authors}</Text>
                <Text>Page Count: {selectedBook.pageCount}</Text>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"ja"}
                    modalTransparent={true}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                />
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        selectedBook: bookSelectors.getBookByID(state)
    };
}

function mapDispatchToProps (dispatch) {
    return {
        ...bindActionCreators(bookOperations, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookDetailSetting);
