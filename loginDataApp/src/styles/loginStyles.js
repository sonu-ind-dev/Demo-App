import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const loginStyles = StyleSheet.create({
    title: {
        fontSize: 26,
        fontWeight: '700',
        color: COLORS.primary,
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: '600',
        fontSize: 16,
    },
    link: {
        marginTop: 20,
        textAlign: 'center',
        color: COLORS.secondary,
        fontWeight: '500',
    },
});
