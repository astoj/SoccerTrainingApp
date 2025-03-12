import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import TrainingModule from '../screens/TrainingModule';
import CommunityHub from '../screens/CommunityHub';
import ProgressDashboard from '../screens/ProgressDashboard';
import Library from '../screens/Library';

// Create navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Custom tab bar icon component
const TabIcon = ({ name, focused }: { name: string; focused: boolean }) => {
  return (
    <View style={styles.tabIconContainer}>
      <Text style={[styles.tabIconText, focused && styles.tabIconTextFocused]}>
        {name === 'Home' ? '🏠' :
         name === 'Train' ? '⚽' :
         name === 'Community' ? '👥' :
         name === 'Progress' ? '📊' : '📚'}
      </Text>
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>
        {name}
      </Text>
    </View>
  );
};

// Main tab navigator
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Home" focused={focused} />,
        }}
      />
      <Tab.Screen 
        name="TrainingTab" 
        component={TrainingModule} 
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Train" focused={focused} />,
        }}
      />
      <Tab.Screen 
        name="CommunityTab" 
        component={CommunityHub} 
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Community" focused={focused} />,
        }}
      />
      <Tab.Screen 
        name="ProgressTab" 
        component={ProgressDashboard} 
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Progress" focused={focused} />,
        }}
      />
      <Tab.Screen 
        name="LibraryTab" 
        component={Library} 
        options={{
          tabBarIcon: ({ focused }) => <TabIcon name="Library" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Root navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabNavigator} />
        {/* Add additional screens here that should be outside the tab navigator */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconText: {
    fontSize: 20,
    marginBottom: 2,
  },
  tabIconTextFocused: {
    transform: [{ scale: 1.2 }],
  },
  tabLabel: {
    fontSize: 10,
    color: '#777',
  },
  tabLabelFocused: {
    color: '#2E7D32', // Green color
    fontWeight: 'bold',
  },
});

export default AppNavigator; 