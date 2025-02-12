import React, { useState } from 'react';
import { Text, ScrollView, Image, View, Alert } from 'react-native';
import { styles } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({ navigation, setIsSignedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (!email || !password) {
            Alert.alert("Validation Error", "Email and password are required.");
            return;
        }

        axios.post("http://192.168.0.142:5001/login", { email, password })
            .then(res => {
                if (res.data.success) {
                    setIsSignedIn(true);  
                    Alert.alert('Login Successful', 'Welcome back!', [
                        { text: 'OK', onPress: () => navigation.navigate('Tabs') }
                    ]);
                    AsyncStorage.setItem('token', res.data.token);  // Store token correctly
                } else {
                    Alert.alert("Login Failed", res.data.message);  // Handle failed login
                }
            })
            .catch(error => {
                console.error(error);
                Alert.alert("Error", "An error occurred during login.");
            });
    }

    return (
        <SafeAreaView>
            <View style={styles.logoContainer}>
                <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />
            </View>
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>AgriFlow Login</Text>

                <Input iconSource={require('../../../assets/email.png')} placeholder="Email Address" onChangeText={setEmail} />
                <Input iconSource={require('../../../assets/key.png')} isPassword placeholder="Password" onChangeText={setPassword} />

                <Text style={styles.fPassword}>Forgot Password?</Text>

                <Button arrow={require('../../../assets/arrow_right.png')} style={styles.button} title="Login" onPress={handleLogin} />

                <Seperator text='or' />

                <Text style={styles.footerText}>
                    Don't have an account?
                    <Text onPress={() => navigation.navigate('Signup')} style={styles.footerLink}> Register</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Signin);
