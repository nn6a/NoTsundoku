import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

const BookList = ({books}) => {
    return (
        <View>
            {books.map((book) => (
                <View key={book.id} style={styles.item}>
                    <Text>{book.title}</Text>
                    <Text>{book.authors}</Text>
                    <Text>{book.pageCount}</Text>
                </View>
            ))}
        </View>
    )
};

// TODO: make authors and pageCount isRequired
BookList.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array,
        pageCount: PropTypes.number
    })).isRequired
};

const styles = StyleSheet.create({
    item: {
        marginBottom: 16,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default BookList;
