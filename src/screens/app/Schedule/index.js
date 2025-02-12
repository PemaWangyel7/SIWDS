import React from 'react';
import { ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeaderApp from '../../../components/AuthHeaderApp';

const Schedule = () => {
    return (
        <SafeAreaView>
            <AuthHeaderApp/>
            <ScrollView style={styles.container}>
                <Text>Schedule</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Schedule);