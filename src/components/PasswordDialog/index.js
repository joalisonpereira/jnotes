import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Dialog from 'react-native-dialog';

import { DIALOG_PASSWORD } from 'src/config';
import styles from './styles';

const INITIAL_STATE = {
	password: '',
	error: {
		active: false,
		message: ''
	}
};

class PasswordDialog extends React.Component{
	state = INITIAL_STATE;

	_handlerChange(label,value){
		if(value.length > 4  && this.state.error.active){
			return this.setState({
				error:{active: false},
				[label]:value
			});
		}
	    this.setState({
	        ...this.state,
	        [label]:value
	    });
	}

	_handlerSubmit(){
		const { password } = this.state;
		if(password.length < 5){
			return this.setState({
				error:{
					active: true,
					message: DIALOG_PASSWORD.ERROR_LENGTH
				}
			});
		}
		if(this.props.item.password !== password){
			return this.setState({
				error:{
					active: true,
					message: DIALOG_PASSWORD.WRONG_PASS
				}
			});
		}
		this.props.onSubmit();
	}

	componentDidUpdate(prevProps){
		if(prevProps.active !== this.props.active){
			if(!prevProps.active){
				this.setState(INITIAL_STATE);
			}
		}
	}

	render(){
		const { active,onCancel,title } = this.props;
		const { password,error } = this.state;
		return (
			<Dialog.Container visible={active} contentStyle={styles.container}>
				<Dialog.Title>
					{ title ? title : DIALOG_PASSWORD.TITLE }
				</Dialog.Title>
				<View style={styles.innerContainer}>
					<TextInput
						value={password}
						onChangeText={text => this._handlerChange('password',text)}
						placeholder={DIALOG_PASSWORD.PLACEHOLDER}
						underlineColorAndroid={"#C1C1C1"}
						maxLength={20}
						secureTextEntry
					/>
					{
						error.active && 
							<Text style={styles.error}>
								{error.message}
							</Text>
					}
				</View>
				<Dialog.Button 
					label={DIALOG_PASSWORD.CANCEL} 
					onPress={() => onCancel()} 
				/>
				<Dialog.Button 
					label={DIALOG_PASSWORD.SUBMIT} 
					onPress={() => this._handlerSubmit() } 
				/>
			</Dialog.Container>
		);
	}
}

export default PasswordDialog;