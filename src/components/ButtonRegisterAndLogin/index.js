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