import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { locationData } from './locationData';
import { styles, pickerSelectStyles } from './styles';

const LocationPicker = ({ selectedDzongkhag, setSelectedDzongkhag, selectedGewog, setSelectedGewog }) => {

  const ChevronDown = () => (
    <View style={styles.chevronDown} />
  );
  
  const dzongkhagItems = Object.keys(locationData).map(dzongkhag => ({
    label: dzongkhag,
    value: dzongkhag
  }));

  const gewogItems = selectedDzongkhag 
    ? locationData[selectedDzongkhag].map(gewog => ({
        label: gewog,
        value: gewog
      }))
    : [];

  const handleDzongkhagChange = (value) => {
    setSelectedDzongkhag(value);
    setSelectedGewog(null);  // Reset Gewog when Dzongkhag changes
  };

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={handleDzongkhagChange}
          items={dzongkhagItems}
          value={selectedDzongkhag}
          style={pickerSelectStyles}
          placeholder={{ 
            label: 'Select your Dzongkhag',
            value: null 
          }}
          useNativeAndroidPickerStyle={false}
          Icon={ChevronDown}  
        />
      </View>

      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedGewog(value)}
          items={gewogItems}
          value={selectedGewog}
          style={pickerSelectStyles}
          placeholder={{ 
            label: 'Select your Gewog',
            value: null 
          }}
          useNativeAndroidPickerStyle={false}
          Icon={ChevronDown}
          disabled={!selectedDzongkhag}
        />
      </View>
    </View>
  );
};

export default LocationPicker;
