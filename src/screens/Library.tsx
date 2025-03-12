import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList, SafeAreaView, Image } from 'react-native';

/**
 * Library screen to list categorized tips, tutorials, and technique videos.
 */
const Library = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for resources
  const resources = [
    { 
      id: '1', 
      title: 'Proper Warm-up Routine for 35+ Players', 
      type: 'video', 
      category: 'fitness',
      duration: '8:25',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Learn the essential warm-up exercises to prevent injuries and prepare your body for training.'
    },
    { 
      id: '2', 
      title: 'Improving Passing Accuracy', 
      type: 'tutorial', 
      category: 'technique',
      duration: '12:10',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Master the art of accurate passing with these specialized drills and techniques.'
    },
    { 
      id: '3', 
      title: 'Recovery Tips After Training', 
      type: 'article', 
      category: 'health',
      readTime: '5 min',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Essential recovery strategies to help your body recuperate faster after intense training sessions.'
    },
    { 
      id: '4', 
      title: 'Dribbling Techniques for Tight Spaces', 
      type: 'video', 
      category: 'technique',
      duration: '15:45',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Learn how to maintain ball control in congested areas with these effective dribbling techniques.'
    },
    { 
      id: '5', 
      title: 'Nutrition Guide for Soccer Players Over 35', 
      type: 'article', 
      category: 'health',
      readTime: '8 min',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Optimize your diet to support performance and recovery with this comprehensive nutrition guide.'
    },
    { 
      id: '6', 
      title: 'Improving Your Weak Foot', 
      type: 'tutorial', 
      category: 'technique',
      duration: '10:30',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Practical exercises to develop better control and confidence with your non-dominant foot.'
    },
    { 
      id: '7', 
      title: 'Preventing Common Soccer Injuries', 
      type: 'video', 
      category: 'health',
      duration: '18:15',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Learn preventative measures and exercises to avoid common soccer-related injuries.'
    },
    { 
      id: '8', 
      title: 'Cardio Workouts for Soccer Fitness', 
      type: 'tutorial', 
      category: 'fitness',
      duration: '14:20',
      thumbnail: 'https://via.placeholder.com/150',
      description: 'Effective cardio routines designed specifically to improve your stamina on the soccer field.'
    },
  ];
  
  // Filter resources based on active category and search query
  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  // Categories for filter tabs
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'technique', name: 'Technique' },
    { id: 'fitness', name: 'Fitness' },
    { id: 'health', name: 'Health & Nutrition' },
  ];
  
  // Render resource item
  const renderResourceItem = ({ item }) => (
    <TouchableOpacity style={styles.resourceCard}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <View style={styles.resourceContent}>
        <Text style={styles.resourceTitle}>{item.title}</Text>
        <Text style={styles.resourceDescription}>{item.description}</Text>
        <View style={styles.resourceMeta}>
          <View style={[styles.resourceType, 
            item.type === 'video' ? styles.videoType : 
            item.type === 'article' ? styles.articleType : styles.tutorialType
          ]}>
            <Text style={styles.resourceTypeText}>{item.type}</Text>
          </View>
          <Text style={styles.resourceDuration}>
            {item.duration || item.readTime}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Resource Library</Text>
        <Text style={styles.subHeaderText}>Tips, tutorials, and videos to improve your game</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search resources..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[styles.categoryTab, activeCategory === category.id && styles.activeCategoryTab]}
            onPress={() => setActiveCategory(category.id)}
          >
            <Text style={[styles.categoryText, activeCategory === category.id && styles.activeCategoryText]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <FlatList
        data={filteredResources}
        keyExtractor={item => item.id}
        renderItem={renderResourceItem}
        contentContainerStyle={styles.resourcesList}
      />
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
  searchContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  categoriesContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  categoryTab: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeCategoryTab: {
    backgroundColor: '#2E7D32',
  },
  categoryText: {
    fontSize: 14,
    color: '#555',
  },
  activeCategoryText: {
    color: 'white',
    fontWeight: 'bold',
  },
  resourcesList: {
    padding: 15,
  },
  resourceCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
  },
  thumbnail: {
    width: 100,
    height: 100,
  },
  resourceContent: {
    flex: 1,
    padding: 12,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  resourceMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resourceType: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  videoType: {
    backgroundColor: '#E3F2FD', // Light blue
  },
  articleType: {
    backgroundColor: '#E8F5E9', // Light green
  },
  tutorialType: {
    backgroundColor: '#FFF3E0', // Light orange
  },
  resourceTypeText: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  resourceDuration: {
    fontSize: 12,
    color: '#777',
  },
});

export default Library; 