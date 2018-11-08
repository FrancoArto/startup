import React from 'react';
import { Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Layout from './components/containers/Layout/Layout';
import EventScreen from './components/containers/EventScreen/EventScreen';

export default class App extends React.Component {
  render() {
    return (
      <EventScreen />
    );
  }
}
