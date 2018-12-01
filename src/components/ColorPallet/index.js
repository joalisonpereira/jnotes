import React from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';

import SYSTEM_COLORS from 'src/config/systemColors';
import styles from './styles';

class ColorPallet extends React.Component {
  	
  	state = {
  		animated: new Animated.Value(
			this.props.active ? 0 : 80
  		)
  	}

  	componentDidUpdate(prevProps){
  		if(prevProps.active !== this.props.active){
  			Animated.spring(
		        this.state.animated,
		        { 
		          toValue: this.props.active ? 0 : 80,
		          speed: 15,
		          useNativeDriver: true
		        }
		    ).start()
  		}
  	}

	render() {
		return(
			<Animated.View style={[
				styles.container,
				{transform:[{translateY: this.state.animated}]},
				!this.props.active && styles.disable
			]}>
				{
					SYSTEM_COLORS.map(item => (
						<TouchableOpacity key={item.title} onPress={() => this.props.action(item.color)}>
							<View style={[styles.item,{borderColor:item.color}]}/>
						</TouchableOpacity>
					))
				}
			</Animated.View>
		);
	}
}

export default ColorPallet;
