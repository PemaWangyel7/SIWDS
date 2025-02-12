import React from "react";
import {Text, TouchableOpacity, Image } from "react-native";
import { styles } from './styles';
import LinearGradient from "react-native-linear-gradient";

const Button = ({arrow, title, onPress, colors = ['#90D5FF', '#2B54D5', '#90D5FF'], start = { x: 0, y: 0 }, end = { x: 1, y: 0 }, style}) => {
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[styles.container, style]}>
            <LinearGradient colors={colors} start={start} end={end} style={styles.gradient}>
             <Text style={styles.title}>{title}</Text>
             {arrow && (
                <Image source={arrow} style={styles.arrowIcon}/>
             )}
            </LinearGradient>
        </TouchableOpacity>
        
    );
};

export default React.memo(Button);