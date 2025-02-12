import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderColor: colors.blue,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        width: '75%',
        marginLeft: 40,
        
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 35, 
        paddingRight: 40,
    },
    eye: {
        width: 22,
        height: 18,
        marginHorizontal: 8,

    },
    leftIcon: {
       position: 'absolute',
       left: 0,
       bottom: 12,

      },
}

)