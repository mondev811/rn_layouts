import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
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
          {hotels.map(item => (
            <View key={item.id} style={styles.hotelsContainer}>
              <Image source={item.imagesource} style={styles.hotelsImage} />
            </View>
          ))}
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
  labelContainer: {
    paddingVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
  },
  activitiesContainer: {
    flexDirection: 'row',
  },
  activitiesImage: {
    width: 200,
    height: 300,
    marginRight: 6,
  },
  accomodationsContainer: {},
  accomodationsImage: {
    width: 390,
    height: 245,
    marginBottom: 8,
  },
  hotelsContainer: {
    flexWrap: 'wrap',
    flex: 1,
  },
  hotelsImage: {
    width: 200,
    height: 200,
  },
});
