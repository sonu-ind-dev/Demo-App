import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import DataScreen from '../screens/DataScreen';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { isLoggedIn, logout } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitle: 'Login Data App',
                }}
            >
                {!isLoggedIn ? (
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerRight: () => null }}
                    />
                ) : (
                    <Stack.Screen
                        name="Data"
                        component={DataScreen}
                        options={{
                            headerRight: () => (
                                <TouchableOpacity onPress={logout}>
                                    <Text style={{ color: 'red', marginRight: 10 }}>
                                        Logout
                                    </Text>
                                </TouchableOpacity>
                            ),
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
