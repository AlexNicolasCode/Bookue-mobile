import React, { useState } from "react";
import { TextInput, Button, StyleSheet, Pressable, Text } from "react-native";
import { globalColors } from "../../styles/colors";
import ButtonRegisterAndLogin from "../ButtonRegisterAndLogin";

export default function Form({ isLogin }) {
    const [form, setForm] = useState({ name: "", email: "", password: "" });

    return (
        <>
            {!isLogin &&
                <TextInput 
                    style={styles.input} 
                    onChangeText={(text) => setForm({ name: text })} 
                    value={form.name}
                    placeholder="Name"
                />
            }
            <TextInput 
                style={styles.input} 
                onChangeText={(text) => setForm({ email: text })} 
                value={form.email}
                placeholder="Email"
            />
            <TextInput 
                style={styles.input} 
                onChangeText={(text) => setForm({ password: text })} 
                value={form.password}
                placeholder="Password"
            />
            <ButtonRegisterAndLogin isHeader={false} isLogin={isLogin}/>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 16,
        margin: 6,
        width: 300,
        height: 50,
        backgroundColor: globalColors.white,
    }
})