import React from 'react';
import { StyleSheet, Text } from "react-native";
import { globalColors } from '../../styles/colors';

export default function Logo({ isHeader }) {
    return (
        <Text style={[styles.font, isHeader ? styles.header : styles.default]}>
            Bookue
        </Text>
    )
}

const styles = StyleSheet.create({
    font: {
        fontFamily: 'Poppins',
        fontWeight: "800",
        color: globalColors.primary
    },
    default: {
        fontSize: 40,
    },
    header: {
        lineHeight: 60,
        fontSize: 22,
    }
})