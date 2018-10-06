import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const BookList = ({books, onItemPress}) => {
    return (
        <View>
            {books.map((book) => (
                <TouchableOpacity key={book.id} onPressOut={() => onItemPress(book)}>
                    <View style={styles.item}>
                        <Text>{book.title}</Text>
                        <Text>{book.authors}</Text>
                        <Text>{book.pageCount}</Text>
                    </View>
                </TouchableOpacity>
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
