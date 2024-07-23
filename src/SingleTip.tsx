import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SingleTip() {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.pageContainer}>
            <View style={styles.headerTitle}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('./assets/images/chevron.left.light.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.title}>How to quit social media</Text>
                <Text style={styles.subtitle}>and why is it so hard for your brain</Text>
                <Text style={styles.text}>
                    Imagine you’re at the peak of a mountain, the world spread out beneath you, a panorama of possibilities. But every time you try to take a step forward, you’re held back by invisible chains. These chains are the subtle, yet powerful, ties of social media. Quitting social media can feel like trying to climb a mountain with these chains pulling you back. But why is it so difficult for our brains to let go? Let’s dive into the science and some practical steps to break free.
                </Text>
                <Text style={styles.heading}>The Allure of Social Media</Text>
                <Text style={styles.text}>
                    Social media platforms are designed to be addictive. They provide instant gratification, similar to the rush you get from gambling or eating sugary foods. When you receive a notification, a like, or a comment, your brain releases dopamine, the “feel-good” neurotransmitter. This dopamine release reinforces the behavior, making you crave more.
                </Text>
                <Text style={styles.text}>
                    In essence, social media hijacks the brain’s reward system. The anticipation of social interactions and the validation from peers create a cycle that’s hard to break. Over time, this cycle can lead to compulsive behavior, where you feel the need to check your phone constantly.
                </Text>
                <Text style={styles.heading}>The Fear of Missing Out (FOMO)</Text>
                <Text style={styles.text}>
                    Another psychological aspect that makes quitting social media difficult is the Fear of Missing Out (FOMO). Social media platforms showcase the highlights of everyone’s lives, often filtered and curated to show only the best moments. This creates an illusion that everyone else is living a more exciting, fulfilling life.
                </Text>
                <Text style={styles.text}>
                    FOMO taps into our natural desire for social belonging and status. The thought of missing out on important updates, events, or conversations can trigger anxiety and keep you tethered to social media.
                </Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 73,
        paddingHorizontal: 19,
    },
    icon: {
        width: 24,
        height: 24,
    },
    content: {
        marginTop: 30,
        marginBottom: 56,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 5,
        textAlign: 'center',
        fontFamily: 'SFProBold',
    },
    subtitle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'center',
        fontFamily: 'SFPro',
    },
    heading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        textAlign: 'center',
        fontFamily: 'SFProBold',
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '400',
        marginVertical: 15,
        textAlign: 'center',
        fontFamily: 'SFPro',
    },
});
