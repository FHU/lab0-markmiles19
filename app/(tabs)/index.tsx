import { Image } from 'expo-image';
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [day, setDay] = useState<number | null >(null);
  const [month, setMonth] = useState<number | null >(null);
  const [year, setYear] = useState<number | null >(null);

  const [isPrimeNum, setIsPrimeNum] = useState(false);
  const [isPalindromeNum, setIsPalindromeNum] = useState(false);
  const [isPythagNum, setIsPythagNum] = useState(false);
  const [isPerfectNum, setIsPerfectNum] = useState(false);
  const [isArmstrongNum, setIsArmstrongNum] = useState(false);
  const [isEquationNum, setIsEquationNum] = useState(false);

  const checkNum = (
    text: string,
    setter: React.Dispatch<React.SetStateAction<number | null>>,
    min: number,
    max: number
  ): void => {

    const parsed = parseInt(text, 10)
    if (!isNaN(parsed) && parsed >= min && parsed <= max) {
      setter(parsed);
    } else {
      setter(null);
    }
  }

  const convertDate = (year: number | null, month: number | null, day: number | null): number | null => {
  if (year && month && day) {
    const value = (month * 1000000) + (day * 10000) + year
    return value;
  }
  return null;
  };

  const isPrime = (num: number | null): boolean => {
    if (num === null || num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  const isPalindrome = (num: number | null): boolean => {
    return false
  }

  const isPythagorean = (num: number | null): boolean => {
    return false
  }

  const isPerfectPower = (num: number | null): boolean => {
    return false
  }

  const isArmstrong = (num: number | null): boolean => {
    return false
  }

  const isEquation = (num: number | null): boolean => {
    return false
  }

  useEffect(() => {
    const value = convertDate(year, month, day);
    if (value !== null) {
      setIsPrimeNum(isPrime(value));
      setIsPalindromeNum(isPalindrome(value));
      setIsPythagNum(isPythagorean(value));
      setIsPerfectNum(isPerfectPower(value));
      setIsArmstrongNum(isArmstrong(value));
      setIsEquationNum(isEquation(value));
      //Hex placeholder
      //HSL placeholder
    } else {
      setIsPrimeNum(false);
      setIsPalindromeNum(false);
      setIsPythagNum(false);
      setIsPerfectNum(false);
      setIsArmstrongNum(false);
      setIsEquationNum(false);
      //Hex fallback placeholder
      //HSL fallback placeholder
    }
  }, [year, month, day]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffc6fdff', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-heart-logo.png')}
          style={styles.heartLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Perfect Date!</ThemedText>
        <HelloWave />
      </ThemedView >
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Give Your Date:</ThemedText>
        <View style={styles.rowContainer}>
        <TextInput
          style={[styles.inputContainer, styles.monthContainer]}
          keyboardType="numeric"
          placeholder="MM"
          maxLength={2}
          onChangeText={(text) => checkNum(text, setMonth, 1, 12)}
          value={month?.toString() ?? ""}
        />
        <TextInput
          style={[styles.inputContainer, styles.dayContainer]}
          keyboardType="numeric"
          placeholder="DD"
          maxLength={2}
          onChangeText={(text) => checkNum(text, setDay, 1, 31)}
          value={day?.toString() ?? ""}
        />
        <TextInput
          style={[styles.inputContainer, styles.yearContainer]}
          keyboardType="numeric"
          placeholder="YYYY"
          maxLength={4}
          onChangeText={(text) => checkNum(text, setYear, 1, 2500)}
          value={year?.toString() ?? ""}
        />
      </View>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Results:</ThemedText>
        <ThemedText>
          {`Prime: ${isPrimeNum ? "✅" : "❌"}\n`}
          {`Palindrome: ${isPalindromeNum ? "✅" : "❌"}\n`}
          {`Pythagorean: ${isPythagNum ? "✅" : "❌"}\n`}
          {`Perfect Power: ${isPerfectNum ? "✅" : "❌"}\n`}
          {`Narcissistic/Armstrong: ${isArmstrongNum ? "✅" : "❌"}\n`}
          {`Equation: ${isEquationNum ? "✅" : "❌"}\n`}
        </ThemedText>
      </ThemedView><ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Colors:</ThemedText>
        <ThemedText>
          {`Hex: \n`}
          {`HSL: \n`}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  heartLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 50,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  inputContainer: {
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 18,
    marginHorizontal: 4,
    height: 40,
    backgroundColor: "white",
    borderRadius: 20
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  monthContainer: {
    width: 60,
  },
  dayContainer: {
    width: 60,
  },
  yearContainer: {
    width: 90,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  hexContainer: {
    color: '#808080',
    gap: 8,
    marginBottom: 8,
  },
  hslContainer: {
    color: '#808080',
    gap: 8,
    marginBottom: 8,
  }
});
