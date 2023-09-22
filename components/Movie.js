import { View, Text, TextInput, Button, StyleSheet, FlatList,Image } from 'react-native'
import React, { useState } from 'react'

const Movie = () => {
    const [search, setSearch] = useState('Hacker');
    const [movieList, setMovieList] = useState()
    const [num,setNum] = useState(50)
    const handleInputs = (inputText)=>{
        setNum(150)
        setSearch(inputText)
    }

    const searchedInputs = async()=>{
        let res = await fetch(`https://www.omdbapi.com/?apikey=727bbdc1&s=${search}`);
        let data = await res.json()
        // console.log("data",data.Search);
        setMovieList(data.Search)
        setNum(50)
    }
  return (
    <View style={[styles.container,{marginTop:num}]}>
      <TextInput placeholder='search your movie here' style={styles.inputs} value={search} onChangeText={handleInputs}/>
      <View style={styles.searchBtn}>
        <Button title='Search Movie' onPress={searchedInputs}/>
      </View>
      <View style={styles.mainContainer}>
        {movieList && (
            <Text style={{textAlign:'center',fontWeight:'bold',color:'#000',padding:2}}>{movieList?.length} Movies Found</Text>
            )}
         
        <FlatList
            data={movieList}
            renderItem={({item})=>{
                return(
                    <View style={styles.imgConatainer}>
                    <Image source={{uri:item.Poster}} style={styles.poster}/>
                        <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff',padding:2}}>{item.Title}</Text>
                        <Text style={{textAlign:'center',fontWeight:'bold',color:'#fff',padding:2}}>{item.Year}</Text>
                    </View>
                )
            }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container:{
    marginBottom:5,
    alignItems:'center',
    justifyContent:'center'
   },
   inputs:{
     width:300, height:50, borderColor:"black", borderStyle:"solid",borderWidth:2,
     padding:5,textAlign:'center',textAlignVertical:'center',backgroundColor:'#fff',
     margin:10
   },
   searchBtn:{
    width:250,
   },
   poster:{
    width:370,
    height:550
   },
   mainContainer:{
       height:600,
       margin:10,
       padding:5
    },
    imgConatainer:{
    backgroundColor:'red',
    marginTop:10
   }
})

export default Movie