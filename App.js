import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';

const activities = [
  {id: 'actividad1', imagesource: require('./assets/img/actividad1.jpg')},
  {id: 'actividad2', imagesource: require('./assets/img/actividad2.jpg')},
  {id: 'actividad3', imagesource: require('./assets/img/actividad3.jpg')},
  {id: 'actividad4', imagesource: require('./assets/img/actividad4.jpg')},
  {id: 'actividad5', imagesource: require('./assets/img/actividad5.jpg')},
];

const hotels = [
  {id: 'hospedaje1', imagesource: require('./assets/img/hospedaje1.jpg')},
  {id: 'hospedaje2', imagesource: require('./assets/img/hospedaje2.jpg')},
  {id: 'hospedaje3', imagesource: require('./assets/img/hospedaje3.jpg')},
  {id: 'hospedaje4', imagesource: require('./assets/img/hospedaje4.jpg')},
];

const best = [
  {id: 'mejores1', imagesource: require('./assets/img/mejores1.jpg')},
  {id: 'mejores2', imagesource: require('./assets/img/mejores2.jpg')},
  {id: 'mejores3', imagesource: require('./assets/img/mejores3.jpg')},
];

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.banner}>
          <ImageBackground
            source={require('./assets/img/bg.jpg')}
            style={styles.banner}
          />
        </View>

        <View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>What to do in Paris</Text>
          </View>
          <ScrollView horizontal={true} sytle={styles.activitiesContainer}>
            {activities.map(item => (
              <Image
                key={item.id}
                source={item.imagesource}
                style={styles.activitiesImage}
              />
            ))}
          </ScrollView>
        </View>
        <View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>The best accomodations</Text>
          </View>
          {best.map(item => (
            <View key={item.id} style={styles.accomodationsContainer}>
              <Image
                source={item.imagesource}
                style={styles.accomodationsImage}
              />
            </View>
          ))}
        </View>
        <View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Hotels in LA</Text>
          </View>
          <View style={styles.hotelsContainer}>
            {hotels.map(item => (
              <View key={item.id} style={styles.hotelsContainerItem}>
                <Image source={item.imagesource} style={styles.hotelsImage} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  banner: {
    height: 250,
    width: '100%',
  },
  label: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    marginVertical: 20,
  },
  labelContainer: {
    paddingVertical: 10,
  },
  activitiesContainer: {
    flexDirection: 'row',
  },
  activitiesImage: {
    width: 250,
    height: 300,
    marginRight: 6,
  },
  accomodationsImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  hotelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  hotelsContainerItem: {
    flexBasis: '49%',
  },
  hotelsImage: {
    height: 190,
    width: 190,
    marginVertical: 5,
  },
});
