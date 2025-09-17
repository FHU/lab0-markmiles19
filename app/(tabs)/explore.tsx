import { StyleSheet } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Patterns</ThemedText>
      </ThemedView>
      <ThemedText>Take a look below to get familiar with all of the different features this app will be able to detect based on your date.</ThemedText>
      <Collapsible title="Prime">
        <ThemedText>
          If the date you entered can only be divided by 1 or itself, it would be a prime number.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Palindrome">
        <ThemedText>
          If the date is the same backwards as it is forwards, it would be a palindrome.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Pythagorean">
        <ThemedText>
          If you were to square the day and add it to the square of the month, and it equals the year squared, it would follow the pythagorean theorem.
        </ThemedText>
        {/* <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} /> */}
      </Collapsible>
      <Collapsible title="Perfect Power">
        <ThemedText>
          If you can take the square, cubed, or any higher power root of the date, it would be a perfect power.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Narcissistic/Armstrong">
        <ThemedText>
          A narcissistic number (more formally known as an Armstrong number) is where each digit raised to the power of the number of its digits is equal to itself.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Equation">
        <ThemedText>
          If any arithmatic operation between the day and month (in that order) is equal to the year, it would be considered an equation.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
