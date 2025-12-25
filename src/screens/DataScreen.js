import { FlatList, Text, View, TextInput } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import { commonStyles } from '../styles/common';
import { dataStyles } from '../styles/dataStyles';

export default function DataScreen() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');

    const debounceRef = useRef(null);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setData(res.data);
                setFilteredData(res.data);
            });

        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, []);

    const handleSearch = (text) => {
        setSearchText(text);

        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }

        if (text.trim() === '') {
            setFilteredData(data);
            return;
        }

        debounceRef.current = setTimeout(() => {
            const filtered = data.filter(item =>
                item.title.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        }, 500);
    };

    return (
        <View style={commonStyles.container}>
            <TextInput
                style={dataStyles.searchInput}
                placeholder="Search products..."
                value={searchText}
                onChangeText={handleSearch}
            />

            <FlatList
                data={filteredData}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={{ flexGrow: 1 }}
                renderItem={({ item }) => (
                    <View style={dataStyles.card}>
                        <Text style={dataStyles.title}>{item.title}</Text>
                        <Text style={dataStyles.price}>₹ {item.price}</Text>
                    </View>
                )}
                ListEmptyComponent={
                    <View style={dataStyles.emptyContainer}>
                        <Text style={dataStyles.emptyText}>
                            No data found
                        </Text>
                    </View>
                }
            />
        </View>
    );
}
