import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SearchList = ({items, onItemPress}) => (
    <View>
        {items.map((item) => (
            <TouchableOpacity key={item.id} onPressOut={() => onItemPress(item)}>
                <View style={styles.item}>
                    <Text>{item.volumeInfo.title}</Text>
                    <Text>{item.volumeInfo.authors}</Text>
                </View>
            </TouchableOpacity>
        ))}
    </View>
);

SearchList.propTypes = {
    items: PropTypes.array.isRequired,
    onItemPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    item: {
        marginBottom: 16,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default SearchList;
