import { View, Text, Button, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet } from 'react-native'
import { useState } from 'react';
import Greet from './components/greet'
import StylingAndInherit from './components/styling-and-inherit';
import StylingBox from './components/styling-box';
import AppRnNavigation from './components/rn-bottom-tabs';

const logoImage = require('./assets/adaptive-icon.png')

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false)

  return (
    <AppRnNavigation />
  );
}

const styles = StyleSheet.create({
  normalFont: {
    fontSize: 20,
    color: 'black'
  }
})