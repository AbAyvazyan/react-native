import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const tips = [
    { id: 1, text: "What Attracts People?" },
    { id: 2, text: "First Impressions Matter" },
    { id: 3, text: "First Date Success" },
    { id: 4, text: "Tips for a successful first date" },
    { id: 5, text: "Engaging Conversations" },
    { id: 6, text: "Avoid These Mistakes" },
    { id: 7, text: "Date Dress Tips" },
];

export default function UploadTips() {
    const navigation = useNavigation();

    const redirectToTip = () => {
        //@ts-ignore
        navigation.navigate('SingleTip');
    };

    return (
        <ScrollView style={styles.pageContainer}>
            <View style={styles.headerTitle}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('./assets/images/chevron.left.light.png')} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headerText}>TIPS</Text>
                </View>
                <View style={{ width: 20, height: 30 }}></View>
            </View>

            <View style={styles.tipsContainer}>
                {tips.map((tip) => (
                    <TouchableOpacity onPress={redirectToTip} key={tip.id}>
                        <View style={styles.tip}>
                            <Text style={styles.tipText}>{tip.text}</Text>
                            <View>
                                <Image source={require('./assets/images/chevron.right.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={redirectToTip}>
                    <View style={styles.tip}>
                        <View style={styles.tipHeader}>
                            <Text style={styles.tipHeaderText}>Struggling to get matches?</Text>
                            <View>
                                <Image source={require('./assets/images/chevron.right.png')} />
                            </View>
                        </View>
                        <View style={styles.tipDescription}>
                            <Text style={styles.tipDescriptionText}>
                                Try our AI app to enhance your appearance with personalized advice.
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: '#000000',
        fontFamily: 'Syncopate',
    },
    headerTitle: {
        flex: 1,
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
        color: '#FFFFFF',
    },
    tipsContainer: {
        marginTop: 50,
        marginBottom: 90,
    },
    tip: {
        width: 385,
        minHeight: 95,
        borderRadius: 25,
        backgroundColor: '#FD96C3',
        marginHorizontal: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    tipText: {
        color: '#000000',
        fontSize: 25,
        width: 259,
        fontWeight: '700',
        lineHeight: 35,
        fontFamily: 'SFProBold',
    },
    tipHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    tipHeaderText: {
        color: '#000000',
        fontSize: 28,
        fontWeight: '600',
        lineHeight: 35,
        fontFamily: 'SFProBold',
    },
    tipDescription: {
        width: '100%',
    },
    tipDescriptionText: {
        color: '#000000',
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'SFPro',
    },
});
