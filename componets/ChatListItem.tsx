import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ChatListItemProps } from '../types';
import { Avatar } from './Avatar';
import { Badge } from './Badge';

export const ChatListItem: React.FC<ChatListItemProps> = ({
  name,
  message,
  time,
  avatarColor,
  isOnline = false,
  unreadCount = 0,
  isVoiceMessage = false,
  isTyping = false,
  onPress,
}) => {
  const messageStyle: TextStyle = isTyping ? styles.typingText : {};

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      activeOpacity={0.7}
    >
      <Avatar color={avatarColor} isOnline={isOnline} size={60} />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        
        <View style={styles.messageRow}>
          {isVoiceMessage && (
            <View style={styles.voiceIcon}>
              <Icon name="play" size={10} color="#FFF" />
            </View>
          )}
          <Text 
            style={[styles.message, messageStyle]} 
            numberOfLines={2}
          >
            {message}
          </Text>
        </View>
      </View>
      
      <Badge count={unreadCount} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  content: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  typingText: {
    color: '#999',
    fontStyle: 'italic',
  },
  voiceIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
});
