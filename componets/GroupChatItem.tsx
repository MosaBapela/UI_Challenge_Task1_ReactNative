import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GroupChatItemProps } from '../types';
import { Badge } from './Badge';

export const GroupChatItem: React.FC<GroupChatItemProps> = ({
  name,
  message,
  time,
  memberCount,
  unreadCount = 0,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress} 
      activeOpacity={0.7}
    >
      <View style={styles.groupAvatarContainer}>
        <View style={[styles.groupAvatar, styles.avatarBack, { backgroundColor: '#D4A5F5' }]}>
          <Icon name="person" size={20} color="#666" />
        </View>
        <View style={[styles.groupAvatar, styles.avatarFront, { backgroundColor: '#FFE5B4' }]}>
          <Icon name="person" size={20} color="#666" />
        </View>
        <View style={styles.memberBadge}>
          <Text style={styles.memberBadgeText}>+{memberCount}</Text>
        </View>
      </View>
      
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.message}>{message}</Text>
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
  },
  groupAvatarContainer: {
    width: 70,
    height: 70,
    position: 'relative',
  },
  groupAvatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFF',
    position: 'absolute',
  },
  avatarBack: {
    top: 0,
    left: 0,
  },
  avatarFront: {
    bottom: 0,
    right: 0,
  },
  memberBadge: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#87CEEB',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF',
  },
  memberBadgeText: {
    color: '#000',
    fontSize: 11,
    fontWeight: '700',
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
  message: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});
