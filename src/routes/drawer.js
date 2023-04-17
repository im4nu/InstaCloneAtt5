import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from '../pages/profile';
import {Archive} from '../pages/archive';

const {Navigator, Screen} = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Profile_Drawer" component={Profile} />
      <Screen name="Archive" component={Archive} />
    </Navigator>
  );
}