// ScreenshotScreen.tsx
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ScreenshotScreen() {
    const [isRizzVisible, setIsRizzVisible] = useState(false);
    const navigation = useNavigation();

    const copyToClipboard = async (text: string) => {
        setIsRizzVisible(false);
    };

    return (
        <ScrollView style={styles.pageContainer}>
            <View style={styles.headerTitle}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('./assets/images/chevron.left.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headerText}>CUPID</Text>
                    <Text style={styles.subHeaderText}>Regular</Text>
                </View>
                <View>
                    <TouchableOpacity 
                    //@ts-ignore
                    onPress={() => {navigation.navigate('UploadTips')}}>
                        <Image
                            source={require('./assets/images/plus.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('./assets/images/Group12.png')}
                    style={styles.mainImage}
                />
            </View>

            {isRizzVisible && (
                <View style={styles.copyContainer}>
                    <View style={styles.lineHolder}>
                        <View style={styles.line}></View>
                        <Text style={styles.copyPrompt}>👇 Tap to copy rizz 👇</Text>
                        <View style={styles.line}></View>
                    </View>

                    <View style={styles.copyTextContainer}>
                        <TouchableOpacity onPress={() => copyToClipboard('❤️ Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}>
                            <View style={styles.copyText}>
                                <Text style={styles.emoji}>❤️</Text>
                                <Text style={styles.copyTextContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => copyToClipboard('👑 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}>
                            <View style={styles.copyText}>
                                <Text style={styles.emoji}>👑</Text>
                                <Text style={styles.copyTextContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => copyToClipboard('🧠 Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}>
                            <View style={styles.copyText}>
                                <Text style={styles.emoji}>🧠</Text>
                                <Text style={styles.copyTextContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}

            {!isRizzVisible && (
                <View style={styles.buttonGroup}>
                    <View style={styles.emojiContainer}>
                        <Text style={styles.emoji}>❤️</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => setIsRizzVisible(true)}>
                            <Text style={styles.buttonText}>Get Rizz Reply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
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
    headerText: {
        fontSize: 44,
        fontWeight: '700',
        fontFamily: 'SyncopateBold',
    },
    subHeaderText: {
        fontSize: 25,
        fontWeight: '300',
        fontFamily: 'SFPro',
        textAlign: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    imageContainer: {
        marginTop: 30,
    },
    mainImage: {
        marginHorizontal: 'auto',
    },
    copyContainer: {
        marginBottom: 170,
    },
    lineHolder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginVertical: 30,
    },
    line: {
        width: 90,
        height: 2,
        backgroundColor: '#00000040',
    },
    copyPrompt: {
        fontSize: 20,
        fontFamily: 'SFPro',
        fontWeight: '400',
    },
    copyTextContainer: {
        flexDirection: 'column',
        gap: 10,
    },
    copyText: {
        width: 390,
        height: 100,
        backgroundColor: '#0000004D',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        marginHorizontal: 'auto',
    },
    emoji: {
        fontSize: 34,
    },
    copyTextContent: {
        fontSize: 23,
        color: '#FFFFFF',
        fontFamily: 'SFPro',
        fontWeight: '400',
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginTop: 70,
    },
    emojiContainer: {
        width: 70,
        height: 70,
        backgroundColor: '#000000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 300,
        height: 70,
        backgroundColor: '#000000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '500',
        fontFamily: 'SFProMedium',
    },
});
