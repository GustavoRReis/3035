import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, Dimensions, SafeAreaView, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMovieContext } from '../../hooks/useMovieContext';
import { theme } from '../../theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { formatReleaseDate } from '../../utils/dateUtils';


const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const Home: React.FC = () => {
  const { movies, loading, error, refetch } = useMovieContext();
  const navigation = useNavigation<any>();
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();



  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  if (loading && !refreshing) {
    return (
      <SafeAreaView style={ styles.container }>
        <View style={ styles.centerContainer }>
          <ActivityIndicator size="large" color={ theme.colors.primary } />
          <Text style={ styles.loadingText }>Carregando filmes...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={ styles.container }>
        <View style={ styles.centerContainer }>
          <Text style={ styles.errorText }>{ error }</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.header }>
        <Image
          source={ require('../../../assets/logo.png') }
          style={ [
            styles.logo,
            Platform.OS === 'android' && { marginTop: (StatusBar.currentHeight || 24) }
          ] }
          resizeMode="contain"
        />
        <Text style={ styles.title }>Bem-vindo ao 3035 Filmes</Text>
        <Text style={ styles.description }>
          Aqui você encontra os filmes mais bem avaliados do momento. Explore e descubra os destaques do cinema!
        </Text>
      </View>

      { refreshing && (
        <View style={ { alignItems: 'center', marginVertical: 8 } }>
          <ActivityIndicator size="small" color={ theme.colors.primary } />
        </View>
      ) }

      <FlatList
        data={ movies }
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
        refreshing={ refreshing }
        onRefresh={ handleRefresh }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 48,
    marginBottom: 8,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginBottom: 4,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  loadingText: {
    color: theme.colors.text,
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 18,
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

export default Home; 
