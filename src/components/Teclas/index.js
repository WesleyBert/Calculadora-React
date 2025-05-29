import Button from '../Buttons';
import Input from '../Inputs';
import { useState } from 'react';
import { Container, Content, Row } from '../../styles';


const Teclas = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');

  const handleSomNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
    }
  }

  const  handleOnClear = () => {
    setCurrentNumber((prev) => {
      setFirstNumber('0');
      return prev.length > 1 ? prev.slice(0, -1) :  '0'
    });
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => (prev === '0' ? `${number}` : `${prev}${number}`))
  }
  return (
    <Container>
       <Content>
        <Input value = {currentNumber}/>
        <Row>
        <Button label="%" onClick = {() =>handleAddNumber('%')}/>
        <Button label="CE" onClick = {() =>handleAddNumber('CE')}/>
        <Button label="C" onClick = {() =>handleAddNumber('C')}/>
        <Button label="&larr;" onClick = {() =>handleOnClear()}/>
        </Row>
        <Row>
        <Button label="1/x" onClick = {() =>handleAddNumber('1/x')}/>
        <Button label="x²" onClick = {() =>handleAddNumber('x²')}/>
        <Button label="√" onClick = {() =>handleAddNumber('√')}/>
        <Button label="&divide;" onClick = {() =>handleAddNumber('&divide;')}/>
        </Row>
        <Row>
        <Button label="7" onClick = {() =>handleAddNumber('7')}/>
        <Button label="8" onClick = {() =>handleAddNumber('8')}/>
        <Button label="9" onClick = {() =>handleAddNumber('9')}/>
        <Button label="X" onClick = {() =>handleAddNumber('X')}/>
        </Row>
        <Row>
        <Button label="4" onClick = {() =>handleAddNumber('4')}/>
        <Button label="5" onClick = {() =>handleAddNumber('5')}/>
        <Button label="6" onClick = {() =>handleAddNumber('6')}/>
        <Button label="-" onClick = {() =>handleAddNumber('-')}/>
        </Row>
        <Row>
        <Button label="1" onClick = {() =>handleAddNumber('1')}/>
        <Button label="2" onClick = {() =>handleAddNumber('2')}/>
        <Button label="3" onClick = {() =>handleAddNumber('3')}/>
        <Button label="+" onClick = {handleSomNumber}/>
        </Row>
        <Row>
        <Button label="&plusmn;" onClick = {() =>handleAddNumber('&plusmn;')}/>
        <Button label="0" onClick = {() =>handleAddNumber('0')}/>
        <Button label="," onClick = {() =>handleAddNumber(',')}/>
        <Button label="=" onClick = {() =>handleAddNumber('=')} />
        </Row>
       </Content>
    </Container>
  );
}

export default Teclas;
