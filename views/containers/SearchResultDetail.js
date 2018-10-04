import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookOperations} from '../../state/ducks/book';
import {searchOperations} from "../../state/ducks/search";

class SearchResultDetail extends Component {
    handleOnPress = (bookData) => {
        this.props.addBook(bookData);
        this.props.searchClear();
        this.props.navigation.popToTop()
    };

    render () {
        const {navigation} = this.props;
        const title = navigation.getParam('title', 'NO DATA');
        const authors = navigation.getParam('authors', 'NO DATA');
        const pageCount = navigation.getParam('pageCount', 'NO DATA');
        const publisher = navigation.getParam('publisher', 'NO DATA');
        const publishedDate = navigation.getParam('publishedDate', 'NO DATA');

        const bookData = {
            title,
            authors,
            pageCount
        };

        return (
            <View>
                <Text>出版日: {publishedDate}</Text>
                <Text>出版社: {publisher}</Text>
                <Text>タイトル: {title}</Text>
                <Text>著者: {authors}</Text>
                <Text>ページ数: {pageCount}</Text>
                <TouchableOpacity onPressOut={() => this.handleOnPress(bookData)}>
                    <Text>本を追加する</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({...bookOperations, ...searchOperations}, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchResultDetail);
