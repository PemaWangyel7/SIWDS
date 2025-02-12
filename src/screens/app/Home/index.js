import React, { useState, useEffect } from 'react';
import { ScrollView, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';
import AuthHeaderApp from '../../../components/AuthHeaderApp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Home = () => {
    const [userData, setUserData] = useState('');

    async function getData() {
        const token = await AsyncStorage.getItem('token');
        console.log(token);

        try {
            const res = await axios.post('http://192.168.0.142:5001/userdata', { token: token });
            console.log(res.data);
            setUserData(res.data.data); // Update state with the fetched data
        } catch (error) {
            console.error("Error fetching data:", error);  // Handle errors here
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <SafeAreaView>
            <AuthHeaderApp />
            <ScrollView style={styles.container}>
                <Text>HOME</Text>
                {userData && userData.name ? (
                    <Text>{userData.name}</Text>
                ) : (
                    <Text>Loading...</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Home);
