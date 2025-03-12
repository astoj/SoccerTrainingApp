import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

/**
 * HomeScreen component serves as an overview of daily training, community activity, and progress.
 * Uses calming blues and greens with clear fonts for design consistency.
 */
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to Soccer Training</Text>
          <Text style={styles.subHeaderText}>Your daily training companion</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Training</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Passing Drills</Text>
            <Text style={styles.cardDescription}>
              Improve your passing accuracy with these specialized drills designed for players 35+.
            </Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>30 minutes • Moderate intensity</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Community Activity</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Weekend Match</Text>
            <Text style={styles.cardDescription}>
              Join the friendly match this Saturday at Central Park. 5 people have already signed up!
            </Text>
            <View style={styles.cardFooter}>
              <Text style={styles.cardFooterText}>Saturday, 10:00 AM</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Weekly Stats</Text>
            <Text style={styles.cardDescription}>
              You've completed 3 training sessions this week. Keep up the good work!
            </Text>
            <View style={styles.progressBar}>
              <View style={styles.progressFill}></View>
            </View>
            <Text style={styles.progressText}>60% of weekly goal completed</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Motivational Tip</Text>
          <View style={styles.card}>
            <Text style={styles.cardDescription}>
              "Consistency is key for improvement at any age. Even 15 minutes of practice daily can lead to significant skill development over time."
            </Text>
          </View>
        </View>
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
    marginBottom: 20,
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
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#1565C0', // Blue color
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  cardFooter: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  cardFooterText: {
    fontSize: 12,
    color: '#777',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 5,
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#4CAF50', // Green color
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'right',
  },
});

export default HomeScreen; 