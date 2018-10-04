import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SearchResultDetail extends Component {
    render () {
        const {navigation} = this.props;
        const title = navigation.getParam('title', 'NO DATA');
        const authors = navigation.getParam('authors', 'NO DATA');
        const pageCount = navigation.getParam('pageCount', 'NO DATA');
        const publisher = navigation.getParam('publisher', 'NO DATA');
        const publishedDate = navigation.getParam('publishedDate', 'NO DATA');

        return (
            <View>
                <Text>出版日: {publishedDate}</Text>
                <Text>出版社: {publisher}</Text>
                <Text>タイトル: {title}</Text>
                <Text>著者: {authors}</Text>
                <Text>ページ数: {pageCount}</Text>
            </View>
        )
    }
}

export default SearchResultDetail
