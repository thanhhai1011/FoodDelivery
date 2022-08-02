import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Colors } from '../../contants/Colors';
import { categories } from '../../data/dataCategoriesFoodLocal';
import CategoriesList from './renderCategories';
import FoodList from './renderFoods';
import { useSelector } from 'react-redux';

const icon1 = 'user';
const icon2 = 'credit-card';


const HomeScreen = ({ navigation }) => {

  const initialCurrentLocation = {
    streetName: 'VietNam',
    gps: {
      latitude: 16.812913,
      longitude: 107.108177
    }
  }

  const food = useSelector(state => state.foods)

  console.log(food);

  const dataCategories = categories;
  const [catetoryIndex, setCatetoryIndex] = useState(0);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)
  const [selectedItem, setselectedItem] = useState(null)

  const filterFood = ((index) => {
    const currentFoods = food.filter(
      item => item?.category === categories[index]?.category
    )[0]?.food;
    setFilteredFoods(currentFoods)
  });
  useEffect(() => {
    filterFood(0)
  }, [])
  const handleFavourite = (item) => {
    if (item.id === selectedItem?.id) {
      setselectedItem(!item.isFavourite)
    }
    setselectedItem(!item.isFavourite)
  }
  console.log('selectedItem', selectedItem);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Header nameIcon1={icon1} text={currentLocation.streetName} nameIcon2={icon2} />
        </View>
        <View style={styles.marginVertical20}>
          <Text style={styles.textHeader}>Main{"\n"}Categories</Text>
        </View>
        <View style={styles.categories}>
          <FlatList
            data={dataCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <CategoriesList
                item={item}
                index={index}
                catetoryIndex={catetoryIndex}
                // selected={item.id === itemId}
                onPress={() => {
                  filterFood(index),
                    setCatetoryIndex(index)
                }}
              />
            )}
          />
        </View>
        <View>
          <FlatList
            data={filteredFoods}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return <FoodList
                item={item}
                navigation={navigation}
                currentLocation={currentLocation}
                food={filteredFoods}
                isSelected={item.id === selectedItem?.id}
                handleFavourite={handleFavourite}
              />
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: Colors.WHITE,
    flex: 1
  },
  marginVertical20: {
    marginVertical: 20
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 22
  },
  categories: {
    // justifyContent: 'space-between',
    // backgroundColor: 'yellow',

  },
  // flastListt: {
  //   backgroundColor: 'blue',
  //   justifyContent: 'center'
  // }
})