import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 50,

    },
    line: {
        height: 1,
        backgroundColor: colors.lightGrey,
        flex: 1,
        width: '20%'
    },
    text: {
        color: colors.grey,
        fontWeight: '500',
        marginHorizontal: 8,
        fontSize: 16,
    },
})