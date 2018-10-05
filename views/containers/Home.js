import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchOperations} from '../../state/ducks/search';

import BookList from '../components/BookList';
import SearchList from '../components/SearchList';

class Home extends Component {
    handleSearch = (query) => {
        this.props.searchBooks(query);
    };

    handleItemPress = (item) => {
        const {id} = item;
        const {
            title,
            authors,
            pageCount,
            publisher,
            publishedDate
        } = item.volumeInfo;

        this.props.navigation.navigate('Detail', {
            id,
            title,
            authors,
            pageCount,
            publisher,
            publishedDate
        });
    };

    render () {
        const {
            isFetching,
            responses,
            books
        } = this.props;

        return (
            <View style={styles.home}>
                <TextInput onChangeText={(text) => this.handleSearch(text)} style={styles.input}/>
                {(!isFetching && responses && responses.length !== 0) ? (
                    <SearchList items={responses} onItemPress={this.handleItemPress}/>
                ) : (
                    <BookList books={books}/>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 280,
        marginTop: 56,
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: StyleSheet.hairlineWidth
    }
});

function mapStateToProps (state) {
    const {
        isFetching,
        responses,
        responseCount
    } = state.searchState;

    const {
        books
    } = state.bookState;

    return {
        isFetching,
        responses,
        responseCount,
        books
    }
}

function mapDispatchToProps (dispatch) {
    return {
        ...bindActionCreators(searchOperations, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
