import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Header from "../components/Header";
import { globalColors } from "../styles/colors";

export default function Home() {
    const list = [
        { title: "Sherlock Holmes", currentPage: "100", allPages: "300", description: "dksakdask", notes_link: "", details_link: "" },
        { title: "Sherlock Holmes", currentPage: "100", allPages: "300", description: "dksakdask", notes_link: "", details_link: "" },
        { title: "Sherlock Holmes", currentPage: "100", allPages: "300", description: "dksakdask", notes_link: "", details_link: "" }
    ]

    return (
        <View style={styles.container}>
            <Header isLogged={true} isLogin={false} />

            <View style={styles.container__content}>
                {list.map((book, index) => {
                    return (
                        <View style={styles.book} key={index}>
                            <View style={styles.book__headline}>
                                <Text style={styles.book__title}>{book.title}</Text>
                                <Text style={styles.book__pages}>{book.currentPage}/{book.allPages}</Text>
                            </View>
                            
                            <Text style={styles.book__description}>{book.description}</Text>

                            <View style={styles.book__options}>
                                <Pressable style={[styles.book__btn, styles.book__notes]}>
                                    <Text style={[styles.book__btnText, styles.book__notesText]}>Notes</Text>
                                </Pressable>
                                
                                <Pressable style={styles.book__btn}>
                                    <Text style={[styles.book__btnText, styles.book__detailsText]}>Details</Text>
                                </Pressable>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}