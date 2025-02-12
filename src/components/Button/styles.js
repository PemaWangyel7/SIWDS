import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: { 
        borderRadius: 25,
        width: 215,
        height: 45,
        marginLeft: 70,
    },
    title: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 20,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,

    },
    arrowIcon: {
        position: 'absolute',
        right: 20,
        bottom: 12,
    }
})