import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Slider, SafeAreaView } from 'react-native';

/**
 * TrainingModule screen to handle drill selection, training customization (intensity, duration, drills),
 * and real-time feedback. Integrates placeholders for AI-powered suggestions from GPT-4o.
 */
const TrainingModule = () => {
  const [intensity, setIntensity] = useState(2); // 1-5 scale
  const [duration, setDuration] = useState(30); // minutes
  const [selectedDrills, setSelectedDrills] = useState<string[]>([]);
  
  const drillOptions = [
    { id: '1', name: 'Passing Accuracy', description: 'Improve your passing precision with stationary targets' },
    { id: '2', name: 'Dribbling Control', description: 'Enhance ball control while navigating through cones' },
    { id: '3', name: 'Shooting Practice', description: 'Work on your shooting technique with various angles' },
    { id: '4', name: 'Agility Training', description: 'Improve your footwork and quick direction changes' },
    { id: '5', name: 'Endurance Building', description: 'Build stamina with interval training exercises' },
  ];
  
  const toggleDrillSelection = (drillId: string) => {
    if (selectedDrills.includes(drillId)) {
      setSelectedDrills(selectedDrills.filter(id => id !== drillId));
    } else {
      setSelectedDrills([...selectedDrills, drillId]);
    }
  };
  
  const getAISuggestion = () => {
    // This would be replaced with an actual API call to GPT-4o
    return "Based on your recent progress and selected intensity, I recommend focusing on 'Passing Accuracy' and 'Agility Training' today. These drills will help improve your overall control without overexerting yourself.";
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Training Module</Text>
          <Text style={styles.subHeaderText}>Customize your training session</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Intensity Level</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>Low</Text>
            <Slider
              style={styles.slider}
              minimumValue={1}
              maximumValue={5}
              step={1}
              value={intensity}
              onValueChange={setIntensity}
              minimumTrackTintColor="#1565C0"
              maximumTrackTintColor="#D1D1D1"
              thumbTintColor="#1565C0"
            />
            <Text style={styles.sliderLabel}>High</Text>
          </View>
          <Text style={styles.sliderValue}>Level {intensity}</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Duration (minutes)</Text>
          <View style={styles.sliderContainer}>
            <Text style={styles.sliderLabel}>15</Text>
            <Slider
              style={styles.slider}
              minimumValue={15}
              maximumValue={60}
              step={5}
              value={duration}
              onValueChange={setDuration}
              minimumTrackTintColor="#1565C0"
              maximumTrackTintColor="#D1D1D1"
              thumbTintColor="#1565C0"
            />
            <Text style={styles.sliderLabel}>60</Text>
          </View>
          <Text style={styles.sliderValue}>{duration} minutes</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Drills</Text>
          {drillOptions.map(drill => (
            <TouchableOpacity
              key={drill.id}
              style={[
                styles.drillOption,
                selectedDrills.includes(drill.id) && styles.selectedDrill
              ]}
              onPress={() => toggleDrillSelection(drill.id)}
            >
              <Text style={[
                styles.drillTitle,
                selectedDrills.includes(drill.id) && styles.selectedDrillText
              ]}>
                {drill.name}
              </Text>
              <Text style={[
                styles.drillDescription,
                selectedDrills.includes(drill.id) && styles.selectedDrillText
              ]}>
                {drill.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AI Suggestion</Text>
          <View style={styles.aiSuggestionCard}>
            <Text style={styles.aiSuggestionText}>{getAISuggestion()}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Training</Text>
        </TouchableOpacity>
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
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 14,
    color: '#555',
  },
  sliderValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1565C0',
    textAlign: 'center',
    marginTop: 5,
  },
  drillOption: {
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
  selectedDrill: {
    backgroundColor: '#1565C0',
  },
  drillTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  drillDescription: {
    fontSize: 14,
    color: '#555',
  },
  selectedDrillText: {
    color: 'white',
  },
  aiSuggestionCard: {
    backgroundColor: '#E8F5E9', // Light green background
    borderRadius: 10,
    padding: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#2E7D32', // Green color
  },
  aiSuggestionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  startButton: {
    backgroundColor: '#2E7D32', // Green color
    borderRadius: 10,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TrainingModule; 