import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

const SearchList = ({items}) => (
    <View>
        {items.map((item) => (
            <View key={item.id} style={styles.item}>
                <Text>{item.volumeInfo.title}</Text>
                <Text>{item.volumeInfo.authors}</Text>
            </View>
        ))}
    </View>
);

SearchList.propTypes = {
    items: PropTypes.array.isRequired
};

const styles = StyleSheet.create({
    item: {
        marginBottom: 16,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default SearchList;
