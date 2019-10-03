import { StyleSheet } from 'react-native';
import { Ultils } from '../../config/ultils';
export const styles = StyleSheet.create({
    row: {flexDirection: "row", alignItems: 'center',},
    container: {
        backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center',
        shadowColor: "#444", 
        shadowOffset: { width: 0, height: 1, }, 
        shadowOpacity: 0.1, 
        shadowRadius: 0, 
        elevation: 5 
    },
    avatar: { backgroundColor: '#eee', width: Ultils.dimensions.width / 10, height: Ultils.dimensions.width / 10, borderRadius: Ultils.dimensions.width / 20, margin: 16 },
    gallery: { backgroundColor: '#eee', width: Ultils.dimensions.width / 15, height: Ultils.dimensions.width / 15, borderRadius: Ultils.dimensions.width / 30, margin: 16 },
    linearGradient: { flexDirection: 'row', width: '100%' },
})