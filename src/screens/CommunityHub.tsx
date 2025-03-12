import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView } from 'react-native';

/**
 * CommunityHub screen to support group chats, forums, event scheduling, and club creation.
 */
const CommunityHub = () => {
  const [activeTab, setActiveTab] = useState('forums');
  
  // Mock data for forums
  const forumTopics = [
    { id: '1', title: 'Best warm-up routines for 35+ players', author: 'SoccerVet', replies: 12, lastActive: '2 hours ago' },
    { id: '2', title: 'Dealing with knee pain during practice', author: 'MidfielderMike', replies: 8, lastActive: '5 hours ago' },
    { id: '3', title: 'Weekend pickup games in Central Park', author: 'NYSoccerFan', replies: 15, lastActive: '1 day ago' },
    { id: '4', title: 'Nutrition tips for recovery after training', author: 'FitAt40', replies: 7, lastActive: '2 days ago' },
    { id: '5', title: 'Recommended cleats for artificial turf', author: 'GearGuru', replies: 10, lastActive: '3 days ago' },
  ];
  
  // Mock data for events
  const upcomingEvents = [
    { id: '1', title: 'Weekend Friendly Match', location: 'Central Park Field #3', date: 'Saturday, 10:00 AM', participants: 12 },
    { id: '2', title: 'Skills Workshop', location: 'Community Center', date: 'Sunday, 2:00 PM', participants: 8 },
    { id: '3', title: 'Monthly Tournament', location: 'Riverside Soccer Complex', date: 'Next Saturday, 9:00 AM', participants: 24 },
  ];
  
  // Mock data for clubs
  const clubs = [
    { id: '1', name: 'Weekend Warriors', members: 28, description: 'Casual players who meet on weekends for friendly matches' },
    { id: '2', name: 'Technique Masters', members: 15, description: 'Focus on improving technical skills through specialized drills' },
    { id: '3', name: 'Fitness First', members: 20, description: 'Emphasis on maintaining fitness while enjoying soccer' },
  ];
  
  // Render forum topics
  const renderForumTopics = () => (
    <View style={styles.tabContent}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search forum topics..."
          placeholderTextColor="#999"
        />
      </View>
      
      <TouchableOpacity style={styles.newTopicButton}>
        <Text style={styles.newTopicButtonText}>+ New Topic</Text>
      </TouchableOpacity>
      
      <FlatList
        data={forumTopics}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.forumTopic}>
            <Text style={styles.forumTopicTitle}>{item.title}</Text>
            <View style={styles.forumTopicMeta}>
              <Text style={styles.forumTopicAuthor}>By: {item.author}</Text>
              <Text style={styles.forumTopicReplies}>{item.replies} replies</Text>
            </View>
            <Text style={styles.forumTopicLastActive}>Last active: {item.lastActive}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
  
  // Render events
  const renderEvents = () => (
    <View style={styles.tabContent}>
      <TouchableOpacity style={styles.newEventButton}>
        <Text style={styles.newEventButtonText}>+ Create Event</Text>
      </TouchableOpacity>
      
      <Text style={styles.sectionTitle}>Upcoming Events</Text>
      {upcomingEvents.map(event => (
        <View key={event.id} style={styles.eventCard}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDetail}>📍 {event.location}</Text>
          <Text style={styles.eventDetail}>🗓️ {event.date}</Text>
          <View style={styles.eventFooter}>
            <Text style={styles.eventParticipants}>{event.participants} participants</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
  
  // Render clubs
  const renderClubs = () => (
    <View style={styles.tabContent}>
      <TouchableOpacity style={styles.newClubButton}>
        <Text style={styles.newClubButtonText}>+ Create Club</Text>
      </TouchableOpacity>
      
      <Text style={styles.sectionTitle}>Active Clubs</Text>
      {clubs.map(club => (
        <View key={club.id} style={styles.clubCard}>
          <Text style={styles.clubName}>{club.name}</Text>
          <Text style={styles.clubDescription}>{club.description}</Text>
          <View style={styles.clubFooter}>
            <Text style={styles.clubMembers}>{club.members} members</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Join</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
  
  // Render chats (placeholder)
  const renderChats = () => (
    <View style={styles.tabContent}>
      <Text style={styles.placeholderText}>Group chat functionality coming soon!</Text>
    </View>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Community Hub</Text>
        <Text style={styles.subHeaderText}>Connect with fellow soccer enthusiasts</Text>
      </View>
      
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'forums' && styles.activeTab]}
          onPress={() => setActiveTab('forums')}
        >
          <Text style={[styles.tabText, activeTab === 'forums' && styles.activeTabText]}>Forums</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'events' && styles.activeTab]}
          onPress={() => setActiveTab('events')}
        >
          <Text style={[styles.tabText, activeTab === 'events' && styles.activeTabText]}>Events</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'clubs' && styles.activeTab]}
          onPress={() => setActiveTab('clubs')}
        >
          <Text style={[styles.tabText, activeTab === 'clubs' && styles.activeTabText]}>Clubs</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'chats' && styles.activeTab]}
          onPress={() => setActiveTab('chats')}
        >
          <Text style={[styles.tabText, activeTab === 'chats' && styles.activeTabText]}>Chats</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        {activeTab === 'forums' && renderForumTopics()}
        {activeTab === 'events' && renderEvents()}
        {activeTab === 'clubs' && renderClubs()}
        {activeTab === 'chats' && renderChats()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#2E7D32', // Green color
    marginBottom: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subHeaderText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 5,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#2E7D32',
  },
  tabText: {
    fontSize: 14,
    color: '#555',
  },
  activeTabText: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  tabContent: {
    padding: 20,
  },
  searchContainer: {
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  newTopicButton: {
    backgroundColor: '#1565C0',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  newTopicButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forumTopic: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  forumTopicTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  forumTopicMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  forumTopicAuthor: {
    fontSize: 14,
    color: '#555',
  },
  forumTopicReplies: {
    fontSize: 14,
    color: '#555',
  },
  forumTopicLastActive: {
    fontSize: 12,
    color: '#777',
  },
  newEventButton: {
    backgroundColor: '#1565C0',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  newEventButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  eventCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  eventDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
  eventFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  eventParticipants: {
    fontSize: 14,
    color: '#555',
  },
  joinButton: {
    backgroundColor: '#2E7D32',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  joinButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  newClubButton: {
    backgroundColor: '#1565C0',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  newClubButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  clubCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  clubName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  clubDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  clubFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  clubMembers: {
    fontSize: 14,
    color: '#555',
  },
  placeholderText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default CommunityHub; 