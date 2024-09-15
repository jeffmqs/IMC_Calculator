import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";


export default function Form (){

    const [height, setHeight] = useState(null);
    const [weight, setWeight]= useState(null);
    const [messageImc, setMessageImc]= useState("Preencha o peso e a altura");
    const [imc, setImc]= useState(null);
    const [textButton, setTextButton]= useState("Calcular");

    function imcCalculator(){
        const heightFormatted = height.replace(",", "."); 
        const weightFormatted = weight.replace(",", "."); 
        return setImc((weightFormatted / (heightFormatted * heightFormatted)).toFixed(2));
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc("Seu IMC é igual a:");
            setTextButton("Calcular novamente");
            return;
        }
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("Preencha o peso e a altura");
    }

    return(
        <View style={styles.FormContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                    onChangeText={setWeight}
                    value={weight}
                />

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={()=>{
                        validationImc()
                    }}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            
            </View>  
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}


