import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const dataStyles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        padding: 12,
        marginBottom: 15,
        backgroundColor: COLORS.white,
    },
    card: {
        backgroundColor: COLORS.white,
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 3,
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
    price: {
        marginTop: 6,
        color: COLORS.textSecondary,
        fontWeight: '500',
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    emptyText: {
        fontSize: 16,
        color: COLORS.textSecondary,
        fontWeight: '500',
    },
});
