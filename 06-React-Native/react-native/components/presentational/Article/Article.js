import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles';


export default class Article extends React.Component {
  render() {
    return (
      <View style={styles.article}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>
            This is the title of the article proposed for the exercise
          </Text>
          <Text style={styles.articleAuthor}>by <Text style={{color: 'blue'}}>Franco Arto</Text></Text>
          <Text style={styles.articleContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
          <View style={styles.iconContainer}>
            <Image style={styles.socialMediaIcon} source={require('../../../assets/comment.png')} />
            <Image style={styles.socialMediaIcon} source={require('../../../assets/facebook.png')} />
            <Image style={styles.socialMediaIcon} source={require('../../../assets/twitter.png')} />
            <Image style={styles.socialMediaIcon} source={require('../../../assets/pinterest.png')} />
            <Image style={styles.socialMediaIcon} source={require('../../../assets/linkedIn.png')} />
          </View>          
        </View>
        <View style={styles.imgContainer}>
          <Image style={styles.articleImg} source={{uri: 'http://www.ewriterresources.com/wp-content/uploads/2016/06/Ariticle.jpg'}} />       
        </View>
        
      </View>
    );
  }
}