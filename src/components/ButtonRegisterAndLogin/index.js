import React from "react";
import { Pressable, StyleSheet, Text } from "react-native"
import { globalColors } from "../../styles/colors"

export default function ButtonRegisterAndLogin({ isLogin }) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.button__text}>{isLogin ? "Sign In" : "Sign Up"}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: "2.5px",
        justifyContent: 'center',
        width: 125,
        height: 40,
        marginTop: 8,
        backgroundColor: globalColors.primary
    },
    button__text: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 20,
        color: globalColors.white
    }
})