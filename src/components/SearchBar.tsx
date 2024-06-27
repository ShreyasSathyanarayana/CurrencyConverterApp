import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
type searchPops = {
  search: string;
  updateSearchText: (value: string) => void;
  searchDetails:()=>void
};
const SearchBar = ({search, updateSearchText,searchDetails}: searchPops) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Enter Currency Code..."
        value={search}
        onChangeText={text => updateSearchText(text)}
      />
      <TouchableOpacity style={styles.searchButton} onPress={searchDetails}>
        <Text style={{color:'black'}}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10,
    marginLeft:10,
    backgroundColor: 'rgb(215, 252, 251)',
    color: 'black',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  searchButton: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    marginRight:10,
    marginLeft:5,
    backgroundColor: 'rgb(215, 252, 251)',
    color: 'black',
    justifyContent:'center',
    alignItems:'center',
    padding:10
  },
});
