import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, TextInput, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMovieContext } from '../../hooks/useMovieContext';
import { theme } from '../../theme/theme';
import { formatReleaseDate } from '../../utils/dateUtils';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const Search: React.FC = () => {
  const { movies } = useMovieContext();
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState('');


  const filteredAndSortedMovies = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return filtered.sort((a, b) => b.voteAverage - a.voteAverage);
  }, [movies, searchQuery]);

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ { alignItems: 'center' } }>
        <Image
          source={ require('../../../assets/logo.png') }
          style={ [
            { width: 160, height: 48, marginBottom: 8, resizeMode: 'contain', alignSelf: 'center' },
            Platform.OS === 'android' && { marginTop: (StatusBar.currentHeight || 24) }
          ] }
          resizeMode="contain"
        />
      </View>
      <View style={ styles.header }>
        <Text style={ styles.title }>Buscar Filmes</Text>
        <Text style={ styles.description }>
          Digite o nome do filme que você está procurando
        </Text>
      </View>

      <View style={ styles.searchContainer }>
        <TextInput
          style={ styles.searchInput }
          placeholder="Digite o nome do filme..."
          placeholderTextColor={ theme.colors.textSecondary }
          value={ searchQuery }
          onChangeText={ setSearchQuery }
          autoFocus
        />
      </View>

      { searchQuery.trim() && filteredAndSortedMovies.length === 0 ? (
        <View style={ styles.centerContainer }>
          <Text style={ styles.noResultsText }>
            Nenhum filme encontrado
          </Text>
          <Text style={ styles.noResultsSubtext }>
            { `Não foi possível encontrar filmes para "${searchQuery}". Tente ajustar sua busca.` }
          </Text>
        </View>
      ) : searchQuery.trim() ? (
        <FlatList
          data={ filteredAndSortedMovies }
          keyExtractor={ item => item.id.toString() }
          numColumns={ 2 }
          columnWrapperStyle={ styles.row }
          renderItem={ ({ item }) => (
            <TouchableOpacity
              style={ [
                styles.card,
                item.voteAverage >= 6 ? styles.cardHighRating : styles.cardLowRating
              ] }
              onPress={ () => navigation.navigate('MovieDetails', { id: item.id }) }
            >
              <Image source={ { uri: `https://image.tmdb.org/t/p/w200${item.posterPath}` } } style={ styles.poster } />
              <View style={ styles.info }>
                <Text style={ styles.movieTitle } numberOfLines={ 2 }>{ item.title }</Text>
                <Text style={ styles.releaseDate }>
                  { item.releaseDate ? formatReleaseDate(item.releaseDate.toISOString().split('T')[0]) : 'Data não disponível' }
                </Text>
                <Text style={ [
                  styles.rating,
                  item.voteAverage >= 6 ? styles.ratingHigh : styles.ratingLow
                ] }>
                  ⭐ { item.voteAverage.toFixed(1) }
                </Text>
              </View>
            </TouchableOpacity>
          ) }
          contentContainerStyle={ styles.listContainer }
        />
      ) : (
        <View style={ styles.centerContainer }>
          <Text style={ styles.placeholderText }>
            Digite algo para começar a buscar
          </Text>
        </View>
      ) }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: theme.colors.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: theme.colors.text,
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors.divider,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  noResultsText: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  noResultsSubtext: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    textAlign: 'center',
  },
  placeholderText: {
    color: theme.colors.textSecondary,
    fontSize: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: cardWidth,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHighRating: {
    borderLeftWidth: 4,
    borderLeftColor: '#4CAF50',
  },
  cardLowRating: {
    borderLeftWidth: 4,
    borderLeftColor: '#FF9800',
  },
  poster: {
    width: '100%',
    height: cardWidth * 1.5,
    resizeMode: 'cover',
  },
  info: {
    padding: 12,
  },
  movieTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: 4,
    lineHeight: 18,
  },
  releaseDate: {
    fontSize: 11,
    color: theme.colors.textSecondary,
    marginBottom: 6,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
  },
  ratingHigh: {
    color: '#4CAF50',
  },
  ratingLow: {
    color: '#FF9800',
  },
});

export default Search; 
