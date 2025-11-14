import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from '../componets/Avatar';
import { ChatListItem } from '../componets/ChatListItem';
import { GroupChatItem } from '../componets/GroupChatItem';
import { Chat, GroupChat, User } from '../types';

const ChatsScreen: React.FC = () => {
  // Quick access users data
  const quickAccessUsers: User[] = [
    { id: '1', name: 'Mira', color: '#FFD4D4', isOnline: true },
    { id: '2', name: 'Phill', color: '#E8D4FF', isOnline: true },
    { id: '3', name: 'Mike', color: '#C8E6C9', isOnline: true },
    { id: '4', name: 'Kierra', color: '#FFF4C4', isOnline: false },
  ];

  // Recent chats data
  const recentChats: Chat[] = [
    {
      id: '1',
      name: 'Phillip Geidt',
      message: 'Phillip is typing...',
      time: '11:34',
      avatarColor: '#E8D4FF',
      isOnline: true,
      unreadCount: 6,
      isTyping: true,
    },
    {
      id: '2',
      name: 'Kierra from Match',
      message: 'Voice message',
      time: '11:05',
      avatarColor: '#FFF4C4',
      unreadCount: 2,
      isVoiceMessage: true,
    },
    {
      id: '3',
      name: 'Mike Smith',
      message: 'Yes, put my name down in that list of the donations.',
      time: '10:31',
      avatarColor: '#C8E6C9',
    },
    {
      id: '4',
      name: 'Stacey Neighbor',
      message: 'Hi! Her mom already used it',
      time: '08:12',
      avatarColor: '#FFD4FF',
    },
  ];

  // Group chats data
  const groupChats: GroupChat[] = [
    {
      id: '1',
      name: "Kevin's BP",
      message: 'Kate and Ann are typing...',
      time: '12:32',
      memberCount: 6,
      unreadCount: 9,
    },
  ];

  const handleChatPress = (chatId: string): void => {
    console.log('Open chat:', chatId);
  };

  const handleGroupChatPress = (chatId: string): void => {
    console.log('Open group chat:', chatId);
  };

  const handleBackPress = (): void => {
    console.log('Back pressed');
  };

  const handleMenuPress = (): void => {
    console.log('Menu pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={handleBackPress}
          >
            <Icon name="chevron-back" size={24} color="#333" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitle}>Chats</Text>
          
          <View style={styles.profileContainer}>
            <TouchableOpacity 
              style={styles.profileIcon}
              onPress={handleMenuPress}
            >
              <Icon name="ellipsis-vertical" size={20} color="#333" />
            </TouchableOpacity>
            <View style={styles.headerBadge}>
              <Text style={styles.headerBadgeText}>6</Text>
            </View>
          </View>
        </View>

        {/* Quick Access - Horizontal Scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.quickAccessSection}
          contentContainerStyle={styles.quickAccessContent}
        >
          {quickAccessUsers.map((user) => (
            <TouchableOpacity 
              key={user.id} 
              style={styles.quickAccessUser}
              onPress={() => handleChatPress(user.id)}
            >
              <Avatar color={user.color} isOnline={user.isOnline} size={50} />
              <Text style={styles.quickAccessName}>{user.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recent Chats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Chat</Text>
          {recentChats.map((chat) => (
            <ChatListItem
              key={chat.id}
              {...chat}
              onPress={() => handleChatPress(chat.id)}
            />
          ))}
        </View>

        {/* Group Chats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Group Chat</Text>
          {groupChats.map((chat) => (
            <GroupChatItem
              key={chat.id}
              {...chat}
              onPress={() => handleGroupChatPress(chat.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0E8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  profileContainer: {
    position: 'relative',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D8D8D8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#B8D870',
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E8F0E8',
  },
  headerBadgeText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '700',
  },
  quickAccessSection: {
    marginTop: 10,
    marginBottom: 20,
  },
  quickAccessContent: {
    paddingHorizontal: 20,
    gap: 15,
  },
  quickAccessUser: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 20,
    minWidth: 90,
  },
  quickAccessName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 15,
  },
});

export default ChatsScreen;