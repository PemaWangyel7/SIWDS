import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        //alignItems: 'center',
        //marginBorder: 54,
        backgroundColor: "#0028A8",
        width: "100%",
        height: 120,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

        
    },
    image:{
        width: 30,
        height: 30,
        marginLeft: 30,
        marginTop: 40,
        
    },
    title:{
        color: colors.white,
        fontSize: 26,
        fontWeight: 500,
        paddingHorizontal: 16,
        marginBottom: 15,
    },
    splashImg: {
        width: 105,
        height: 85,
        marginLeft: 220,
        marginTop: 15,
        
    }
    
})