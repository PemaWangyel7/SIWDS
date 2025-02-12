import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,     
    },
    headerText:{
        color: colors.blue,
        marginTop: 15,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 26,
    },
    button: {
        marginVertical: 20,
        marginTop: 20,
    },
    footerText: {
        marginBottom: 56,
        textAlign: 'center',

    },
    footerLink: {
        color: colors.blue,
        fontWeight: 'bold',
    },
})