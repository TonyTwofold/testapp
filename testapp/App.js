import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Button, SectionList} from 'react-native';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#f98',
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

const SectionListBasics = () => {
    return (
        <View style={styles.container}>
            <SectionList
                sections={[
                    {title: 'Monday', data: ['Bench press', 'Triceps', 'Shoulders']},
                    {title: 'Tuesday', data: ['Squats', 'Deadlift', 'Leg extention']},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />

        </View>
    );
}

export default SectionListBasics;