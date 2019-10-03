import { StyleSheet } from 'react-native';

export const styleForgotPassword = StyleSheet.create({
    container: {flex: 1, margin: 24},
    titleLogin: { fontSize: 28, color: '#fff', fontFamily: 'Poppins', fontWeight: '500'},
    form: {flex: 1, justifyContent: 'center'},
    input: { padding: 8, width: '100%', borderBottomColor: '#F2F2F2', borderBottomWidth: 1, marginBottom: 24},
    linearGradient: {paddingLeft: 15,paddingRight: 15,borderRadius: 30, width: '100%'},
    buttonText: {fontSize: 18, fontFamily: 'Poppins',textAlign: 'center',margin: 10,color: '#ffffff',backgroundColor: 'transparent'},
    textForgot: { fontSize: 12, fontFamily: 'Poppins', textDecorationLine: 'underline', marginTop: 20},
    textHaveAccount: { fontSize: 12, fontFamily: 'Poppins', color: '#A1A1A1'}
})