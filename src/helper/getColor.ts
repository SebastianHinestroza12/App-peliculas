import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {
    fallback: '#000',
  });

  let primary;
  let secondary;
  let tertiary;

  if (colors.platform === 'android') {
    primary = colors.darkVibrant;
    secondary = colors.dominant;
    tertiary = colors.average;
  } else {
    if (colors.platform === 'ios') {
      primary = colors.primary;
      secondary = colors.secondary;
      tertiary = colors.primary;
    }
  }

  return [primary, secondary, tertiary];
};
