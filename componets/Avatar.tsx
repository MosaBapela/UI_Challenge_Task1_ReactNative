import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AvatarProps } from '../types';

export const Avatar: React.FC<AvatarProps> = ({ 
  color = '#E8E8E8', 
  isOnline = false, 
  size = 60 
}) => {
  const avatarStyle: ViewStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.avatar, avatarStyle]}>
        <Icon name="person" size={size * 0.5} color="#666" />
      </View>
      {isOnline && <View style={styles.onlineIndicator} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
    borderWidth: 3,
    borderColor: '#FFF',
  },
});