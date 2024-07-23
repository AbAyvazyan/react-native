// History.tsx
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenshots = [
    { id: 1, text: "User’s screenshot" },
    { id: 2, text: "User’s screenshot" },
    { id: 3, text: "User’s screenshot" },
    { id: 4, text: "User’s screenshot" },
    { id: 5, text: "User’s screenshot" },
    { id: 6, text: "User’s screenshot" },
    { id: 7, text: "User’s screenshot" },
    { id: 8, text: "User’s screenshot" },
    { id: 9, text: "User’s screenshot" },
    { id: 10, text: "User’s screenshot" },
    { id: 11, text: "User’s screenshot" },
    { id: 12, text: "User’s screenshot" },
    { id: 13, text: "User’s screenshot" },
    { id: 14, text: "User’s screenshot" },
    { id: 15, text: "User’s screenshot" }
];

export default function HistoryScreen() {
    const [userScreenshots, setUserScreenshots] = useState(screenshots);
    const navigation = useNavigation(); // Use the navigation hook

    const onScreenshotDeleteHandler = (id: number) => {
        setUserScreenshots(prevState => prevState.filter(item => item.id !== id));
    }

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
                    <Text style={styles.headerText}>History</Text>
                </View>
                <View style={{ width: 20, height: 30 }} />
            </View>

            <View style={styles.screenshotContainer}>
                {userScreenshots.map((screenshot) => (
                    <View key={screenshot.id} style={styles.screenshot}>
                        <Text style={styles.screenshotText}>
                            {screenshot.text} {screenshot.id}
                        </Text>
                        <TouchableOpacity onPress={() => onScreenshotDeleteHandler(screenshot.id)} style={styles.deleteIcon}>
                            <Image source={require('./assets/images/xmark.circle.png')} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                ))}
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
    headerText: {
        fontSize: 38,
        fontWeight: '700',
        fontFamily: 'SFProBold',
    },
    screenshotContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        rowGap: 17,
        marginTop: 29,
        marginBottom: 78,
    },
    screenshot: {
        width: 118,
        height: 180,
        borderRadius: 19,
        backgroundColor: '#040404',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    screenshotText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'SFProMedium',
    },
    deleteIcon: {
        position: 'absolute',
        bottom: 16,
        right: 16,
    },
    icon: {
        width: 24,
        height: 24,
    }
});
