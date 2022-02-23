// @flow
import React, { FC, useContext } from 'react';
import {
  View, StyleSheet, Text, Dimensions, TouchableWithoutFeedback,
} from 'react-native';
// import { Icon } from 'expo';
import PlayerContext from './PlayerContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const { width } = Dimensions.get('window');
export const PLACEHOLDER_WIDTH = width / 3;

type PlayerControlsProps = {
  title: string,
  onPress: () => void,
}


const PlayerControls: FC<PlayerControlsProps> = ({ title, onPress }) => {


  const { setVideo } = useContext(PlayerContext)

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.placeholder} />
        <Text style={styles.title} numberOfLines={3}>{title}</Text>
        {/* <Icon.Feather style={styles.icon} name="play" /> */}

        <TouchableWithoutFeedback onPress={() => setVideo(null)}>
          <MaterialCommunityIcons name="feather" size={24} color="black" />
        </TouchableWithoutFeedback>


      </View>
    </TouchableWithoutFeedback>
  )
}

// export default class PlayerControls extends React.PureComponent<PlayerControlsProps> {
//   render() {
//     const { title, onPress } = this.props;
//     return (
//       <TouchableWithoutFeedback onPress={onPress}>
//         <View style={styles.container}>
//           <View style={styles.placeholder} />
//           <Text style={styles.title} numberOfLines={3}>{title}</Text>
//           {/* <Icon.Feather style={styles.icon} name="play" /> */}
//           <PlayerContext.Consumer>
//             {
//               ({ setVideo }) => (
//                 <TouchableWithoutFeedback onPress={() => setVideo(null)}>
//                   {/* <Icon.Feather style={styles.icon} name="x" /> */}
//                 </TouchableWithoutFeedback>
//               )
//             }

//           </PlayerContext.Consumer>
//         </View>
//       </TouchableWithoutFeedback>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    flexWrap: 'wrap',
    paddingLeft: 8,
  },
  placeholder: {
    width: PLACEHOLDER_WIDTH,
  },
  icon: {
    fontSize: 24,
    color: 'gray',
    padding: 8,
  },
});

export default PlayerControls
