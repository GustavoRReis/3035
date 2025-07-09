import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useMovieContext } from '../../hooks/useMovieContext';
import { theme } from '../../theme/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { formatReleaseDate } from '../../utils/dateUtils';

const MovieDetails: React.FC = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { getMovieById } = useMovieContext();
  const { id } = route.params;
  const movie = getMovieById(id);
  const insets = useSafeAreaInsets();

  if (!movie) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>Filme não encontrado.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.backButtonContainer, { top: insets.top + 8 }]}> 
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton} hitSlop={{ top: 16, left: 16, bottom: 16, right: 16 }}>
          <MaterialCommunityIcons name="arrow-left" size={28} color={theme.colors.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdropPath || movie.posterPath}` }} style={styles.backdrop} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.subtitle}>{movie.originalTitle}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
          <Text style={styles.detail}>Nota: <Text style={styles.bold}>{movie.voteAverage}</Text></Text>
          <Text style={styles.detail}>Popularidade: <Text style={styles.bold}>{movie.popularity}</Text></Text>
          <Text style={styles.detail}>Votos: <Text style={styles.bold}>{movie.voteCount}</Text></Text>
          <Text style={styles.detail}>Lançamento: <Text style={styles.bold}>{movie.releaseDate ? formatReleaseDate(movie.releaseDate.toISOString().split('T')[0]) : 'N/A'}</Text></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  backButtonContainer: {
    position: 'absolute',
    left: 8,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: theme.colors.card,
    borderRadius: 20,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  backdrop: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 16,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    marginBottom: 12,
  },
  overview: {
    fontSize: 15,
    color: theme.colors.text,
    marginBottom: 16,
    lineHeight: 22,
  },
  detail: {
    fontSize: 14,
    color: theme.colors.text,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default MovieDetails; 
