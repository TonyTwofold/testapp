import React, {useState, Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Button, SectionList} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import data from './data.json';

export default class App extends Component {
    constructor(props) { //Vad innebär detta? 
    super(props); //Dett aborde vara att jag kallar på propsen från Component?
    this.state = { //Här använder vi inte state som jag gjort innan, med en getter, setter, och initial state
        HeadTable: ['Exercise', 'Weight', 'Reps', 'Sets'],
        DataTable: [
            [, , , ],
            [, , , ],
            [, , , ]
        ],
        day: '',

        maxArray: [150, 260],

        workoutArray: [ //detta testar jag nu, se notes.txt
            {
                exercise: 'Bench press',
                percentage: 0.7,
                reps: 4,
                sets: 5,
            },
            {
                exercise: 'Military press',
                percentage: 0.7,
                reps: 5,
                sets: 5,
            }, 
            {
                exercise: 'Dips',
                percentage: 0.8,
                reps: 5,
                sets: 8,
            },
        ],
    }
    }


    parseTest () {
        var sampleArray = [
                {
                    id: "LHP",
                    hasSets: false,
                },
                {
                    id: "benchpress",
                    hasSets: true,
                    sets: [
                        {
                            id: "set1",
                            values: [{
                                reps: 7,
                                percentage: 0.7
                            }]
                        },
                        {
                            id: "set2",
                            values: [{
                                reps: 6,
                                percentage: 0.8
                            }]
                        }
                    ]
                }
        ];

        const maxBench = 120;

        return (
            <View>
                {sampleArray.map((exercise, index) =>
                <View key={index}>
                    <Text>
                        {exercise.id}, has sets: {exercise.hasSets ? "yes" : "no"}
                    </Text>
                    {exercise.hasSets && exercise.sets.map((set, index) =>
                        <View key={index}>
                        <Text>{set.id}</Text>
                        {set.values.map((value, index) =>
                            <Text key={index}>
                                {value.reps} reps @ {value.percentage*maxBench} kg
                            </Text>
                        )}
                    </View>

                    )
                    }
                </View>
                )}
            
            </View>
        )
    }

    setDayMonday () {
        this.setState({
            day: 'Monday',
            DataTable: [
                ['Bench', this.state.maxArray[0]*0.9, '10', '4'],
                ['Military press', '70', '4', '4'],
                ['Dips', '32', '6', '3']
            ],
        });
    }

    setDayTuesday () {
        this.setState ({
            day: 'Tuesday',
            DataTable: [
                ['Squat', this.state.maxArray[1]*0.9, '10', '4'],
                ['Deadlift', '70', '4', '4'],
                ['Calf raises', '32', '6', '3']
            ],
        });
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{borderWidth: 1, borderColor: '#f89'}}>
                    <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
                    <Rows data={state.DataTable} textStyle={styles.TableText}/>
                </Table>
                <Text>Today is: {this.state.day}</Text>
                <Button onPress={this.setDayMonday.bind(this)} title={"Get Monday!"}/>
                <Button onPress={this.setDayTuesday.bind(this)} title={"Today is Tuesday!"}/>
                <Text>{this.parseTest()}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        flex: 2,
    },
    container: {
        flex: 1, 
        padding: 19,
        paddingTop: 35,
        backgroundColor: '#ff9', 
    }, 
    HeadStyle: {
        height: 50,
        alignContent: 'center',
        backgroundColor: '#f14'
    },
    TableText: {
        margin: 10
    }
});

