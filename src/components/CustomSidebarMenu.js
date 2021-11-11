import React from "react";

import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const CustomSidebarMenu = ({ props, navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#0DB5BA" }}>
      <View style={{ justifyContent: "center", backgroundColor: "#ffff" }}>
        <Image
          source={require("../logo.png")}
          style={{ width: "90%", height: 100, resizeMode: "stretch" }}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome5Icon name="house-user" size={30} color="#fff" />
          )}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="Dashboard"
          onPress={() => {navigation.navigate('Dashboard');}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome5Icon name="database" size={30} color="#fff" />
          )}
          labelStyle={{ color: "#fff", fontSize: 20, marginLeft: 7 }}
          label="Master Data"
          onPress={() => {navigation.navigate('Akun');}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome5Icon name="money-bill-alt" size={30} color="#fff" />
          )}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="Kas"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome5Icon name="cart-plus" size={30} color="#fff" />
          )}
          labelStyle={{ color: "#fff", fontSize: 20, marginLeft: 5
         }}
          label="Pembelian"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome5Icon name="luggage-cart" size={30} color="#fff" />
          )}
          labelStyle={{ color: "#fff", fontSize: 20 }}
          label="Penjualan"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome5Icon name="dumpster" size={30} color="#fff" />
          )}
          labelStyle={{ color: "#fff", fontSize: 20, marginLeft: 5 }}
          label="Stock Opname"
          onPress={() => {}}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <FontAwesome5Icon name="clipboard-list" size={30} color="#fff" />
          )}
          labelStyle={{ color: "#fff", fontSize: 20, marginLeft: 20 }}
          label="Laporan"
          onPress={() => {}}
        />
      </DrawerContentScrollView>

      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome5Icon name="sign-out-alt" size={30} color="#ffff" />
        )}
        labelStyle={{ color: "#fff", fontSize: 20 }}
        label="Log Out"
        onPress={() => {}}
      />
    </View>
  );
};

export default CustomSidebarMenu;
