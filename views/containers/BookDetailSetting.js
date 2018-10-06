import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {bookOperations} from '../../state/ducks/book';

class BookDetailSetting extends Component {
    render() {
        const {navigation} = this.props;
        const id = navigation.getParam('id');

        return (
            <View>
                <Text>BookDetailSetting</Text>
                <Text>{id}</Text>
            </View>
        )
    }
}

function mapStateToProps () {
    return {}
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
