import React from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Header from "../components/Header";

export default function Register() {
    return (
        <>
            <Header isLogged={false} isLogin={false} />
            <View style={styles.container}>
                <Logo />
                <Form isLogin={false} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
})