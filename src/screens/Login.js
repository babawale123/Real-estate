import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];

  const nav = useNavigation();
  

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Image source={{ uri: 'https://your-image-url.com/login-header.png' }} style={[styles.headerImage, { opacity: fadeAnim, transform: [{ scale: fadeAnim }] }]} />
      
      <Text style={styles.title}>Let’s <Text style={styles.boldText}>Sign In</Text></Text>
      
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showText}>{showPassword ? 'Hide' : 'Show'} password</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity onPress={() => alert('Forgot Password?')}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      
      
      <TouchableOpacity style={styles.loginButton} onPress={() => nav.navigate('affiliate')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>OR</Text>
      
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png' }} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.registerText}>Don't have an account? <Text style={styles.registerBold}>Register</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 15,
  },
  showText: {
    color: '#007bff',
    fontSize: 14,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: '#007bff',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#7BC043',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: '#888',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },
  registerText: {
    marginTop: 20,
    color: '#333',
  },
  registerBold: {
    fontWeight: 'bold',
    color: '#007bff',
  },
});

export default LoginScreen;
