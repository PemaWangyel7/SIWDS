import React from 'react';
import { ScrollView, Text, Alert } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeaderApp from '../../../components/AuthHeaderApp';
import Button from '../../../components/Button';

const Settings = ({ setIsSignedIn }) => {
    const handleLogout = () => {
        Alert.alert(
          "Logout",
          "Are you sure you want to log out?",
          [
            { text: "Cancel", style: "cancel" },
            { 
              text: "Logout", 
              onPress: () => setIsSignedIn(false) // Update authentication state
            }
          ]
        );
      };
    return (
        <SafeAreaView>
            <AuthHeaderApp/>
            <ScrollView style={styles.container}>
                <Text>Settings</Text>
                <Button title="Logout" onPress={handleLogout} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Settings);

        
      