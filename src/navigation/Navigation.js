import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
/*import FavoriteScreen from "../screens/Favorite";
import PokedexScreen from "../screens/Pokedex";*/


import Favorite from "../screen/Favorite";
import Pokedex from "../screen/Pokedex";
import Account from "../screen/Account";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favoritos" component={Favorite} options={{
          tabBarIcon: ({color,size})=>(
              <Icon name="heart" color={color} size={size}></Icon>
          )
      }}/>
      <Tab.Screen name="Pokedex" component={Pokedex} options={{
          tabBarIcon: ()=>(
              <Icon name="" color="#EF1212" size={20} options={{
                  tabBarLabel:"",
                  tabBarIcon: ()=> renderPokeball(),


              }} />
          )
      }}/>
      <Tab.Screen name="Account" component={Account}  options={{
          tabBarIcon: ({color,size})=>(
              <Icon name="user" color={color} size={size}></Icon>
          )
      }}/>
    </Tab.Navigator>
  );
}

function renderPokeball() {
    return (
      <Image
        source={require("../assets/pokeball.png")}
        style={{ width: 75, height: 75, top: -15 }}
      />
    );
  }