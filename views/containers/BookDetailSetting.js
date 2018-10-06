import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookOperations, bookSelectors} from '../../state/ducks/book';

class BookDetailSetting extends Component {
    render() {
        const {selectedBook} = this.props;

        return (
            <View>
                <Text>ID: {selectedBook.id}</Text>
                <Text>Title: {selectedBook.title}</Text>
                <Text>Author: {selectedBook.authors}</Text>
                <Text>Page Count: {selectedBook.pageCount}</Text>
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
