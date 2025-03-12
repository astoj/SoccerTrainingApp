import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

/**
 * ProgressDashboard screen to display visual metrics for skill improvements 
 * and training consistency along with AI-driven insights.
 */
const ProgressDashboard = () => {
  // Mock data for progress metrics
  const weeklyProgress = {
    sessionsCompleted: 4,
    weeklyGoal: 5,
    totalMinutes: 120,
    pointsEarned: 350,
  };
  
  const skillMetrics = [
    { name: 'Passing', current: 75, previous: 68 },
    { name: 'Dribbling', current: 62, previous: 60 },
    { name: 'Shooting', current: 58, previous: 52 },
    { name: 'Agility', current: 70, previous: 65 },
    { name: 'Endurance', current: 80, previous: 72 },
  ];
  
  const consistencyData = [
    { day: 'Mon', completed: true },
    { day: 'Tue', completed: true },
    { day: 'Wed', completed: false },
    { day: 'Thu', completed: true },
    { day: 'Fri', completed: true },
    { day: 'Sat', completed: false },
    { day: 'Sun', completed: false },
  ];
  
  const aiInsights = [
    "Your passing accuracy has improved by 7% this month. Keep focusing on the passing drills!",
    "Your endurance is showing great improvement. Consider increasing training intensity next week.",
    "You've been consistent with weekday training. Adding one weekend session could boost your progress.",
  ];
  
  // Calculate completion percentage
  const completionPercentage = (weeklyProgress.sessionsCompleted / weeklyProgress.weeklyGoal) * 100;
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Progress Dashboard</Text>
          <Text style={styles.subHeaderText}>Track your improvement</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Overview</Text>
          <View style={styles.card}>
            <View style={styles.weeklyMetricsContainer}>
              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>{weeklyProgress.sessionsCompleted}/{weeklyProgress.weeklyGoal}</Text>
                <Text style={styles.metricLabel}>Sessions</Text>
              </View>
              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>{weeklyProgress.totalMinutes}</Text>
                <Text style={styles.metricLabel}>Minutes</Text>
              </View>
              <View style={styles.metricItem}>
                <Text style={styles.metricValue}>{weeklyProgress.pointsEarned}</Text>
                <Text style={styles.metricLabel}>Points</Text>
              </View>
            </View>
            
            <View style={styles.progressBarContainer}>
              <Text style={styles.progressLabel}>Weekly Goal Progress</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${completionPercentage}%` }]} />
              </View>
              <Text style={styles.progressPercentage}>{Math.round(completionPercentage)}%</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skill Improvement</Text>
          <View style={styles.card}>
            {skillMetrics.map((skill, index) => (
              <View key={index} style={styles.skillItem}>
                <View style={styles.skillLabelContainer}>
                  <Text style={styles.skillLabel}>{skill.name}</Text>
                  <Text style={styles.skillImprovement}>
                    +{skill.current - skill.previous}%
                  </Text>
                </View>
                <View style={styles.skillBarContainer}>
                  <View style={styles.skillBarBackground}>
                    <View style={[styles.skillBarPrevious, { width: `${skill.previous}%` }]} />
                    <View style={[styles.skillBarCurrent, { width: `${skill.current}%` }]} />
                  </View>
                  <Text style={styles.skillPercentage}>{skill.current}%</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Training Consistency</Text>
          <View style={styles.card}>
            <View style={styles.consistencyContainer}>
              {consistencyData.map((day, index) => (
                <View key={index} style={styles.consistencyDay}>
                  <View style={[
                    styles.consistencyIndicator,
                    day.completed ? styles.dayCompleted : styles.dayMissed
                  ]} />
                  <Text style={styles.dayLabel}>{day.day}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI-Powered Insights</Text>
          <View style={styles.card}>
            {aiInsights.map((insight, index) => (
              <View key={index} style={styles.insightItem}>
                <View style={styles.insightBullet} />
                <Text style={styles.insightText}>{insight}</Text>
              </View>
            ))}
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
    backgroundColor: '#1565C0', // Blue color
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
  weeklyMetricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  metricItem: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
  },
  metricLabel: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  progressBarContainer: {
    marginTop: 10,
  },
  progressLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50', // Green color
    borderRadius: 5,
  },
  progressPercentage: {
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
    marginTop: 5,
  },
  skillItem: {
    marginBottom: 15,
  },
  skillLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  skillLabel: {
    fontSize: 14,
    color: '#333',
  },
  skillImprovement: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  skillBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  skillBarBackground: {
    flex: 1,
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
  },
  skillBarPrevious: {
    height: '100%',
    backgroundColor: '#BBDEFB', // Light blue
    position: 'absolute',
    left: 0,
  },
  skillBarCurrent: {
    height: '100%',
    backgroundColor: '#1565C0', // Blue color
    position: 'absolute',
    left: 0,
  },
  skillPercentage: {
    fontSize: 14,
    color: '#555',
    marginLeft: 10,
    width: 40,
    textAlign: 'right',
  },
  consistencyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  consistencyDay: {
    alignItems: 'center',
  },
  consistencyIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  dayCompleted: {
    backgroundColor: '#4CAF50', // Green color
  },
  dayMissed: {
    backgroundColor: '#e0e0e0',
  },
  dayLabel: {
    fontSize: 12,
    color: '#555',
  },
  insightItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  insightBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1565C0',
    marginTop: 6,
    marginRight: 10,
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
});

export default ProgressDashboard;