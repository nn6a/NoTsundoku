import React from 'react';
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

const styles = StyleSheet.create({
    item: {
        marginBottom: 16,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default BookList;
