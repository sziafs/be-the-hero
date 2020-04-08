import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Ola APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelinha atropelada" com o valor de 120R$.'

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada',
            recipients: ['eng.fe.silveira@gmail.com'],
            body: message,
        })
    }

    function sendWhatsapp() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentPropery, { marginTop:0 }]}>NGO</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentPropery}>INCIDENT</Text>
                <Text style={styles.incidentValue}>accidented dog</Text>

                <Text style={styles.incidentPropery}>VALUE</Text>
                <Text style={styles.incidentValue}>120</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be this incident hero.</Text>

                <Text style={styles.heroDescription}>Get in touch</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={()=>{}}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};