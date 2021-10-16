import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { globalColors } from "../../styles/colors";
import Logo from "../Logo";

export default function Header({ isLogged, isLogin }) {
    return (
        <View style={styles.container}>
            {isLogged ? <Logo isHeader={true} /> : (            
                <Pressable style={styles.button}>
                    <Text style={styles.text}>{!isLogin ? "Sign In" : "Sign Up"}</Text>
                </Pressable> 
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 60
    },
    button: {
        position: "absolute",
        top: 16,
        right: 16,
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: globalColors.primary,
        borderWidth: 2,
        borderRadius: 2.5,
        width: 100,
        height: 40,
    },
    text: {
        fontSize: 16,
        fontWeight: 600,
        color: globalColors.primary
    }
})