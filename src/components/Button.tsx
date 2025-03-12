import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * A reusable button component with different types, sizes, and states.
 */
const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  type = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}) => {
  // Determine button style based on type
  const buttonTypeStyle = 
    type === 'primary' ? styles.primaryButton :
    type === 'secondary' ? styles.secondaryButton :
    styles.outlineButton;
  
  // Determine button size
  const buttonSizeStyle = 
    size === 'small' ? styles.smallButton :
    size === 'large' ? styles.largeButton :
    styles.mediumButton;
  
  // Determine text style based on type
  const textTypeStyle = 
    type === 'primary' ? styles.primaryText :
    type === 'secondary' ? styles.secondaryText :
    styles.outlineText;
  
  // Determine text size
  const textSizeStyle = 
    size === 'small' ? styles.smallText :
    size === 'large' ? styles.largeText :
    styles.mediumText;
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonTypeStyle,
        buttonSizeStyle,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={type === 'outline' ? '#2E7D32' : 'white'} 
        />
      ) : (
        <Text style={[
          styles.text,
          textTypeStyle,
          textSizeStyle,
          disabled && styles.disabledText,
          textStyle,
        ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Button types
  primaryButton: {
    backgroundColor: '#2E7D32', // Green color
  },
  secondaryButton: {
    backgroundColor: '#1565C0', // Blue color
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2E7D32', // Green color
  },
  // Button sizes
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  // Text styles
  text: {
    fontWeight: 'bold',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: 'white',
  },
  outlineText: {
    color: '#2E7D32', // Green color
  },
  // Text sizes
  smallText: {
    fontSize: 12,
  },
  mediumText: {
    fontSize: 16,
  },
  largeText: {
    fontSize: 18,
  },
  // Disabled state
  disabledButton: {
    backgroundColor: '#e0e0e0',
    borderColor: '#e0e0e0',
  },
  disabledText: {
    color: '#9e9e9e',
  },
});

export default Button; 