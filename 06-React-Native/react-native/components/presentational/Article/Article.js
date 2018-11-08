import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles';


export default class Article extends React.Component {
  render() {
    return (
      <View style={styles.article}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>
            {this.props.title}
          </Text>
          <Text style={styles.articleAuthor}>by <Text style={{color: 'blue'}}>{this.props.author}</Text></Text>
          <Text style={styles.articleContent}>
            {this.props.content}
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