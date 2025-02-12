import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        padding: 24,     
    },
    button: {
        marginVertical: 24,
    },
    headerText: {
        color: colors.blue,
        marginTop: 25,
        marginBottom: 25,
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 26,
    },
    footerText: {
        color: colors.black,
        marginBottom: 56,
        textAlign: 'center',
        fontSize: 16,

    },
    footerLink: {
        color: colors.blue,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textDecorationColor: colors.blue,
        fontSize: 16,
    },
    image:{
        width: '100%',
        height: 280,
    },
    logoContainer: {
        backgroundColor: "#0028A8",
        width: "100%",
        height: 340,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    fPassword: {
        color: colors.black,
        textAlign: 'center',
        fontSize: 16,
    }
})
