import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MovieProvider } from './src/contexts/MovieContext';
import Home from './src/pages/Home';
import Search from './src/pages/Search';
import MovieDetails from './src/pages/MovieDetails';
import SplashScreen from './src/components/SplashScreen';
import { theme } from './src/theme/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen 
      name="HomeScreen" 
      component={Home} 
    />
    <Stack.Screen 
      name="MovieDetails" 
      component={MovieDetails} 
    />
  </Stack.Navigator>
);

const SearchStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen 
      name="SearchScreen" 
      component={Search} 
    />
    <Stack.Screen 
      name="MovieDetails" 
      component={MovieDetails} 
    />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        backgroundColor: theme.colors.card,
        borderTopColor: theme.colors.divider,
        borderTopWidth: 1,
      },
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.textSecondary,
      headerShown: false,
    }}
  >
    <Tab.Screen 
      name="Home" 
      component={HomeStack}
      options={{
        tabBarLabel: 'Início',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-outline" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="Search" 
      component={SearchStack}
      options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <MovieProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </MovieProvider>
  );
}
