import React from 'react';
import { StyleSheet, TextInput as Input, View } from 'react-native';
import { Heather } from './Colors';
import { ParagraphText } from './Text';
import { hp, wp } from './utils';

const TextInput = ({
  icon,
  inputStyle,
  onChangeText,
  placeholder,
  value,
  style,
  label,
}) => {
  return (
    <View style={[styles.view, style]}>
      <View style={styles.iconContainer}>{icon}</View>
      <View>
        <ParagraphText title={label} style={styles.label} />
        <Input
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[styles.input, inputStyle]}
        />
      </View>
    </View>
  );
};

export { TextInput };

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(324),
    height: hp(64),
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Heather,
    // backgr
  },
  iconContainer: {
    height: hp(64),
    width: wp(40.9),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: AthensGray,
  },
  input: {
    width: wp(223),
    height: hp(42),
    paddingLeft: wp(10),
  },
  label: {
    marginLeft: wp(10),
    marginTop: hp(4),
  },
});
