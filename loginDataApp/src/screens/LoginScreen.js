import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useState, useContext } from 'react';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from '../context/AuthContext';
import { commonStyles } from '../styles/common';
import { loginStyles } from '../styles/loginStyles';

export default function LoginScreen() {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const generateRandom = () =>
        Math.random().toString(36).substring(2, 10);

    const handleCreateDummyAccount = async () => {
        const randomEmail = `${generateRandom()}@test.com`;
        const randomPassword = generateRandom();

        try {
            await axios.post('https://fakestoreapi.com/users', {
                email: randomEmail,
                username: randomEmail,
                password: randomPassword,
                name: { firstname: 'Test', lastname: 'User' },
                address: { city: 'test', street: 'test', number: 1, zipcode: '00000' },
                phone: '9999999999',
            });

            setEmail(randomEmail);
            setPassword(randomPassword);

            Alert.alert('Success', 'Dummy account created & Filled details');
        } catch {
            Alert.alert('Error', 'Failed to create account');
        }
    };

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Email and password required');
            return;
        }
        login();
    };

    return (
        <View style={commonStyles.container}>
            <Text style={loginStyles.title}>Login Data App</Text>

            <Text style={commonStyles.label}>Email</Text>
            <TextInput
                style={commonStyles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />

            <Text style={commonStyles.label}>Password</Text>

            {/* 🔹 Password input with eye icon */}
            <View style={commonStyles.passwordWrapper}>
                <TextInput
                    style={commonStyles.passwordInput}
                    value={password}
                    secureTextEntry={!showPassword}
                    onChangeText={setPassword}
                />
                <TouchableOpacity
                    onPress={() => setShowPassword(prev => !prev)}
                >
                    <Ionicons
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={22}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
                <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCreateDummyAccount}>
                <Text style={loginStyles.link}>Want to use a dummy account?</Text>
            </TouchableOpacity>
        </View>
    );
}
