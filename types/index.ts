export interface User {
  id: string;
  name: string;
  color: string;
  isOnline: boolean;
}

export interface Chat {
  id: string;
  name: string;
  message: string;
  time: string;
  avatarColor: string;
  isOnline?: boolean;
  unreadCount?: number;
  isVoiceMessage?: boolean;
  isTyping?: boolean;
}

export interface GroupChat {
  id: string;
  name: string;
  message: string;
  time: string;
  memberCount: number;
  unreadCount?: number;
}

export interface AvatarProps {
  color?: string;
  isOnline?: boolean;
  size?: number;
}

export interface BadgeProps {
  count?: number;
}

export interface ChatListItemProps extends Chat {
  onPress?: () => void;
}

export interface GroupChatItemProps extends GroupChat {
  onPress?: () => void;
}
