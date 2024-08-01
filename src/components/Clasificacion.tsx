import React, { useState, useEffect } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

interface NumberState {
  NumerosOriginales: number[];
  NumerosPares: number[];
  NumerosImpares: number[];
}

export const Clasificacion = () => {
  const [numbers, setNumbers] = useState<NumberState>({
    NumerosOriginales: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    NumerosPares: [],
    NumerosImpares: [],
  });

  const separateNumbers = () => {
    const { NumerosOriginales } = numbers;
    const nuevosNumerosPares: number[] = [];
    const nuevosNumerosImpares: number[] = [];

    NumerosOriginales.forEach((number) => {
      if (number % 2 === 0) {
        nuevosNumerosPares.push(number);
      } else {
        nuevosNumerosImpares.push(number);
      }
    });

    setNumbers((prevState) => ({
      ...prevState,
      NumerosPares: nuevosNumerosPares,
      NumerosImpares: nuevosNumerosImpares,
    }));
  };

  useEffect(() => {
    separateNumbers();
  }, []);

  return (
    <View style={{marginTop: 50}}>
      <Text>
        BIENVENIDO
        <Text>{'\n'}Linea de Numeros: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14</Text>
        &nbsp;
        <Text>{'\n'}</Text>
      </Text>
      <Button title="Separar" onPress={separateNumbers} />
      <Text>{'\n'}</Text>
      <TouchableOpacity>
        <Text>Números pares: {numbers.NumerosPares.join(', ')}</Text>
        <Text>Números impares: {numbers.NumerosImpares.join(', ')}</Text>
      </TouchableOpacity>
    </View>
  );
};
