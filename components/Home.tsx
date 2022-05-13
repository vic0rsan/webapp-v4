import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Stock from "./Stock";
import warehouse from '../assets/warehouse.jpg';

export default function Home() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={styles.title}>Lager-Appen</Text>
        <Image source={warehouse} style={{ width: 320, height: 240 }} />
        <Stock />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    base: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 12,
      paddingRight: 12,
    },
    title: {
      backgroundColor: '#000',
      color: '#fff',
      fontSize: 42,
      marginBottom: 20,
      textAlign: 'center'
    }
  });