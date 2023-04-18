import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';

const Login = (props) => {
  return (
    <Background>
      <View style={{alignItems: 'flex-start', width: 300 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 40,
            marginLeft:90
          }}>
          Sign in
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 150,
            paddingTop: 80,
            alignItems:'flex-start',
            paddingLeft: 40
          }}>
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold',}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 50,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'default'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 100}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>


          <TouchableOpacity
            onPress={() => alert("Logged In")}
              style={{
                backgroundColor: darkGreen,
                borderRadius: 100,
                alignItems: 'center',
                width: '78%',
                paddingVertical: 5,
                marginVertical: 10
              }}>
              <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
              Login
              </Text>
          </TouchableOpacity>


          <View style={{ display: 'flex', flexDirection :'row', alignItems: "flex-end" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;