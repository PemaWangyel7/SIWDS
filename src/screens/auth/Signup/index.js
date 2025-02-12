import React, { useState } from 'react';
import { Text, ScrollView, View, Alert } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input'; 
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import LocationPicker from '../../../components/LocationPicker';

const Signup = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameVerify, setNameVerify] = useState(false);
    const [emailVerify, setEmailVerify] = useState(false);
    const [phoneVerify, setPhoneVerify] = useState(false);
    const [passwordVerify, setPasswordVerify] = useState(false);
    const [confirmPasswordVerify, setConfirmPasswordVerify] = useState(false);

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        phone: false,
        password: false,
        confirmPassword: false,
        location: null
    });

    const [selectedDzongkhag, setSelectedDzongkhag] = useState(null);
    const [selectedGewog, setSelectedGewog] = useState(null);

    function handleSubmit() {
        if (!nameVerify || !emailVerify || !phoneVerify || !passwordVerify || !confirmPasswordVerify || password !== confirmPassword || !selectedDzongkhag || !selectedGewog) {
            Alert.alert('Validation Error', 'Please make sure all fields are filled out correctly.');
            return;
        }
    
        const userData = {
            name,
            phone,
            email,
            password,
            dzongkhag: selectedDzongkhag,
            gewog: selectedGewog,
        };
    
        axios.post("http://192.168.0.142:5001/register", userData)
            .then((res) => {
                console.log("Server Response:", res.data); // Debugging: Check API response
    
                if (res.data.success) {
                    setTimeout(() => {
                        Alert.alert('Registration Successful', res.data.message, [
                            { text: 'OK', onPress: () => navigation.navigate('Signin') }
                        ]);
                    }, 100);
                } else {
                    setTimeout(() => {
                        Alert.alert('Error', res.data.message);
                    }, 100);
                }
            })
            .catch((e) => {
                console.error("Registration Error:", e);
                setTimeout(() => {
                    Alert.alert('Error', 'There was an error during registration. Please try again.');
                }, 100);
            });
    }    

    return (
        <SafeAreaView>
            <AuthHeader onBackPress={() => navigation.goBack()} />
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>Register</Text>

                <Input
                    value={name}
                    onChangeText={(text) => {
                        setName(text);
                        setNameVerify(text.length > 1);
                        setTouched(prev => ({ ...prev, name: true }));
                    }}
                    iconSource={require('../../../assets/profile.png')}
                    placeholder="Pick Your User Name"
                />
                {touched.name && !nameVerify && (
                    <Text style={{ marginLeft: 20, color: 'red' }}>
                        Username should be more than 1 character.
                    </Text>
                )}

                <Input
                    value={phone}
                    onChangeText={(text) => {
                        setPhone(text);
                        setPhoneVerify(/^(17|77)[0-9]{6}$/.test(text));
                        setTouched(prev => ({ ...prev, phone: true }));
                    }}
                    iconSource={require('../../../assets/phone.png')}
                    placeholder="Enter Your Phone Number"
                    maxLength={8}
                />
                {touched.phone && !phoneVerify && (
                    <Text style={{ marginLeft: 20, color: 'red' }}>
                        Phone number should start with 17 or 77 and have 6 digits.
                    </Text>
                )}

                <Input
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailVerify(/^[\w.%+-]+@[ \w.-]+\.[a-zA-Z]{2,}$/.test(text));
                        setTouched(prev => ({ ...prev, email: true }));
                    }}
                    iconSource={require('../../../assets/email.png')}
                    placeholder="Email Address"
                />
                {touched.email && !emailVerify && (
                    <Text style={{ marginLeft: 20, color: 'red' }}>
                        Enter a valid email address.
                    </Text>
                )}

                <LocationPicker 
                    selectedDzongkhag={selectedDzongkhag} 
                    setSelectedDzongkhag={setSelectedDzongkhag}
                    selectedGewog={selectedGewog} 
                    setSelectedGewog={setSelectedGewog} 
                />

                <Input
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setPasswordVerify(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(text));
                        setTouched(prev => ({ ...prev, password: true }));
                    }}
                    iconSource={require('../../../assets/key.png')}
                    isPassword
                    placeholder="Password"
                />
                {touched.password && !passwordVerify && (
                    <Text style={{ marginLeft: 20, color: 'red' }}>
                        Password must include uppercase, lowercase, number, and at least 6 characters.
                    </Text>
                )}

                <Input
                    value={confirmPassword}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                        setConfirmPasswordVerify(text === password);
                        setTouched(prev => ({ ...prev, confirmPassword: true }));
                    }}
                    iconSource={require('../../../assets/key.png')}
                    isPassword
                    placeholder="Confirm Password"
                />
                {touched.confirmPassword && !confirmPasswordVerify && (
                    <Text style={{ marginLeft: 20, color: 'red' }}>
                        Passwords must match.
                    </Text>
                )}

                <Button arrow={require('../../../assets/arrow_right.png')} style={styles.button} title="Register" onPress={handleSubmit} />

                <Seperator text="or" />

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text onPress={() => navigation.navigate('Signin')} style={styles.footerLink}> Login Now</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default React.memo(Signup);
