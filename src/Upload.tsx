// UploadScreen.js
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function UploadScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pageContainer}>
      <View style={styles.headerTitle}>
        <View>
          <TouchableOpacity onPress={() => { /* Add functionality here */ }}>
            <Image
              style={{ width: 37, height: 19 }}
              source={require('./assets/images/line.3.horizontal.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleText}>CUPID</Text>
          <Text style={styles.subtitleText}>Regular</Text>
        </View>
        <View>
          <TouchableOpacity 
          //@ts-ignore
          onPress={() =>navigation.navigate('History')}>
            <Image
              style={{ width: 41, height: 37 }}
              source={require('./assets/images/clock.arrow.circlepath.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 80 }}>
        <Text style={styles.heading}>Upload a screenshot of a chat or bio</Text>
        <Image
          style={{ marginTop: 53, marginHorizontal: 'auto' }}
          source={require('./assets/images/phones.png')}
        />
      </View>

      <View style={styles.buttonGroup}>
        <View style={styles.heartButton}>
          <Text style={{ fontSize: 28 }}>❤️</Text>
        </View>
        <View style={styles.uploadButton}>
          <TouchableOpacity 
          //@ts-ignore
          onPress={() =>{ navigation.navigate('Screenshot')}}>
            <Text style={styles.uploadButtonText}>Upload Screenshot</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: '#FC92C0',
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 73,
    paddingHorizontal: 19,
  },
  titleText: {
    fontSize: 44,
    fontWeight: '700',
    fontFamily: 'SyncopateBold',
  },
  subtitleText: {
    fontSize: 25,
    fontWeight: '300',
    fontFamily: 'SFPro',
    marginHorizontal: 'auto',
  },
  heading: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    width: 268,
    marginHorizontal: 'auto',
    fontFamily: 'SFPro',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 70,
  },
  heartButton: {
    width: 70,
    height: 70,
    backgroundColor: '#000000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    width: 311,
    height: 70,
    backgroundColor: '#000000',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'SFProMedium',
    fontWeight: '500',
  },
});
