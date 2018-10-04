import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchOperations} from '../../state/ducks/search';

import SearchList from '../components/SearchList';

class Home extends Component {
    handleSearch = (query) => {
        if (query.length === 0) return;
        this.props.searchBooks(query);
    };

    render () {
        const {
            isFetching,
            responses
        } = this.props;

        return (
            <View style={styles.home}>
                <TextInput onChangeText={(text) => this.handleSearch(text)} style={styles.input}/>
                {!isFetching && responses.length !== 0 && (
                    <SearchList items={responses}/>
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
        marginTop: 40,
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

    return {
        isFetching,
        responses,
        responseCount
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
