import React, {useState} from "react";
import { View, Text,TextInput, Button, ImageComponent } from "react-native";
import ResultImc from "./ResultIMC/";
export default function Form() {
  
  const [heigth, setHeigth] = useState(null)
  const [weight, setWeigth] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha o peso e altura ")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("calcular  IMC")

function imcCalculator() {
  return setImc((weight/(heigth*heigth)).toFixed(2))
  
}

function validationImc() {
  if(weight != null && heigth != null ) {
    imcCalculator()
    setHeigth(null)
    setWeigth(null)
    setMessageImc("Seu imc é igual :")
    setTextButton("Calcular novamente")
    
    return
  }
  setImc(null)
  setTextButton("Calcular imc ")
  setMessageImc('preencha o peso e altura')

}

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex. 1.75" keyboardType="numbers-and-punctuation"
        value={heigth}
        onChangeText={setHeigth} />

        <Text>Peso</Text>
        <TextInput placeholder="EX. 75.365" keyboardType="numbers-and-punctuation"
        value={weight}
        onChangeText={setWeigth} />
        <Button
        title={textButton}
        onPress={()=>validationImc()}
          
  
        />
      </View>
      <ResultImc
      messageResultImc= {messageImc}
      ResultImc= {imc}
      />
    </View>
  );
}
