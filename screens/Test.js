import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const Test = () => {
  return (
    <GooglePlacesAutocomplete
      GooglePlacesDetailsQuery={{ fields: "geometry" }}
      placeholder="Search..."
      onPress={(details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(details?.geometry?.viewport);
      }}
      query={{
        key: "AIzaSyBdTQCikgMeFo7j-QpPsRep1uttr73FXbs",
        language: "en",
      }}
    />
  );
};

export default Test;
