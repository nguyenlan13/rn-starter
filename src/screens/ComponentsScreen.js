import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Components Screen</Text>

    return (
        <View>
            <text style={styles.textStyle}>This is the components screen</text>
            {greeting}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})


export default ComponentsScreen