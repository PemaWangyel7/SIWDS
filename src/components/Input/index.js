import React, { useState } from "react";
import { Pressable, TextInput, View, Image } from "react-native";
import { styles } from "./styles";

const Input = ({ placeholder, isPassword, iconSource, value, onChangeText }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {iconSource && (
                    <Image source={iconSource} style={styles.leftIcon} />
                )}
                <TextInput
                    value={value}  // Make sure to bind the input value to the state from the parent component
                    onChangeText={onChangeText}  // Ensure onChangeText updates the state
                    secureTextEntry={isPassword && !isPasswordVisible}
                    placeholder={placeholder}
                    style={styles.input}
                />
                {isPassword ? (
                    <Pressable onPress={onEyePress}>
                        <Image
                            style={styles.eye}
                            source={
                                isPasswordVisible
                                    ? require("../../assets/eye.png")
                                    : require("../../assets/eye_close.png")
                            }
                        />
                    </Pressable>
                ) : null}
            </View>
        </View>
    );
};

export default Input;
