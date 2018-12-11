import React from 'react';
import { View } from 'react-native';
import Dialog from 'react-native-dialog';

import { DIALOG_PASSWORD, DIALOG_REMOVE } from 'src/config';
import styles from './styles';

const ConfirmDialog = ({active,onCancel,onConfirm,toRemove=true}) => (
	<Dialog.Container visible={active} contentStyle={styles.container}>
		<Dialog.Title>
			{ toRemove ? DIALOG_REMOVE.TITLE : DIALOG_PASSWORD.TITLE_REMOVE_PASS }
		</Dialog.Title>
		<Dialog.Button 
			label={DIALOG_REMOVE.CANCEL} 
			onPress={() => onCancel()} 
		/>
		<View style={styles.divider} />
		<Dialog.Button 
			label={DIALOG_REMOVE.CONFIRM} 
			onPress={() => onConfirm() } 
		/>
	</Dialog.Container>
);

export default ConfirmDialog;