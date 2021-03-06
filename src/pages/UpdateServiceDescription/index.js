import React, {useEffect, useState} from 'react';
import {Image, View, Text, ScrollView} from 'react-native';
import {Button, Checkbox, ProgressBar, TextInput, Title} from 'react-native-paper'
import {useNavigation, useRoute} from '@react-navigation/native';
import Logo from '../../assets/logo.png';

import api from '../../services/api';

import style from './styles';

const UpdateServiceDescription = () => {

    const [description, setDescription] = useState('');
    const navigation = useNavigation();

    async function handleUpdate() {

        const response = await api.put('/services/description', {
            description
        });

        if (response.status === 200) {
            navigation.navigate('Home');
        } else {
            console.log("erro", response.data)
        }

    }
    
    return (
        <View style={style.container}>
            <Image source={Logo} style={style.image}/>
            <View style={style.form}>
                <Title  style={{fontSize:30, paddingTop:10, paddingBottom:10}}>Detalhes do serviço</Title>
                <Title>Quais sao os detalhes do serviço?</Title>
                <TextInput label="Endereço" mode='outlined' style={style.input} multiline
                        value={description} onChangeText={setDescription}/>
                <Button style={{marginTop: 15}} mode="contained" onPress={handleUpdate}>
                    ATUALIZAR
                </Button>
            </View>
        </View>
    );
}

export default UpdateServiceDescription;