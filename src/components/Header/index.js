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