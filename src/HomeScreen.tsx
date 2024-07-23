// HomeScreen.js
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const featuresArray = [
  { id: 1, icon: '🔥', text: 'Unlimited Rizz' },
  { id: 2, icon: '🤝', text: 'Trusted by Millions' },
  { id: 3, icon: '❤️‍🔥', text: 'Coach Recommended' },
  { id: 4, icon: '🍯', text: 'Proven to Get Dates' },
  { id: 5, icon: '📈', text: 'x10 More Responses' },
  { id: 6, icon: '😈', text: 'x8 More Dates' },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.titleContainer}>
      <Image source={require('./assets/images/match1.png')} style={styles.matchLogo} />

      {featuresArray.map(item => (
        <View key={item.id} style={styles.featuresStyle}>
          <Text style={styles.textStyles}>{item.icon}</Text>
          <Text style={styles.textStyles}>{item.text}</Text>
        </View>
      ))}

      <View style={styles.elevationPart}>
        <LinearGradient
          style={styles.absTop}
          colors={['#00A676', '#46B1C9']}
        >
          <Text style={styles.topText}>Rizz God</Text>
        </LinearGradient>

        <Text style={styles.heading}>Elevate Your Game</Text>

        <View style={styles.button}>
          <TouchableOpacity
          //@ts-ignore
            onPress={() => {navigation.navigate('Upload')}} // Adjust the screen name as needed
            style={styles.touchableButton}
          >
            <Text style={styles.buttonText}>Unlock Free Trial</Text>
          </TouchableOpacity>

          <Text style={styles.payPrice}>risk-free trial then $8.67/week</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#040404',
  },
  matchLogo: {
    width: 342,
    marginTop: 130,
    marginHorizontal: 'auto',
    marginBottom: 50,
  },
  featuresStyle: {
    width: '65%',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginBottom: 10,
    gap: 20,
  },
  textStyles: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '400',
  },
  elevationPart: {
    width: 342,
    height: 213,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    elevation: 5,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#00A676',
    // shadowColor: '#00A676',
    // shadowOffset: { width: 6, height: 6 },
    // shadowOpacity: 0.3,
    // shadowRadius: 3.84,
    borderRadius: 20,
    marginTop: 60,
    marginHorizontal: 'auto',
    position: 'relative',
  },
  absTop: {
    width: 111,
    height: 27,
    backgroundColor: '#00A676',
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -16,
    left: '33%',
  },
  topText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  heading: {
    marginTop: 25,
    marginHorizontal: 'auto',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    width: 273,
    height: 53,
    backgroundColor: '#00A676',
    borderRadius: 50,
    marginVertical: 20,
    marginHorizontal: 'auto',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  payPrice: {
    color: '#FFFFFF',
    marginTop: 20,
    marginHorizontal: 'auto',
  },
  touchableButton: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
