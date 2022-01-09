import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native'
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
console.log(errorMessage, 'errorMessage')
  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Text style={styles.label}>Email: </Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInputS}
      />
      <Spacer />
      <Text style={styles.label}>Password: </Text>
      <TextInput
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInputS}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          color="#841584"
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  label: {
    paddingHorizontal: 15
  },
  textInputS: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default AuthForm;
