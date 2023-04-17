import { DrawerActions } from '@react-navigation/native';
import { useContext } from "react";
import AuthContext from "../../routes/auth_context";
import { VStack, HStack, Text, Avatar, Button} from "native-base";
import {Feather, FontAwesome, Fontisto, FontAwesome5} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

import AvatarIcon from '../../../assets/user.png';

import Oval1 from '../../../assets/Oval.png';
import Oval2 from '../../../assets/Oval-1.png';
import Oval3 from '../../../assets/Oval-2.png';
import MoreIcon from '../../../assets/more.png';

import Feed1 from '../../../assets/profile/Rectangle-1.png';
import Feed2 from '../../../assets/profile/Rectangle-2.png';
import Feed3 from '../../../assets/profile/Rectangle-3.png';
import Feed4 from '../../../assets/profile/Rectangle-4.png';
import Feed5 from '../../../assets/profile/Rectangle-5.png';
import Feed6 from '../../../assets/profile/Rectangle-6.png';
import Feed7 from '../../../assets/profile/Rectangle-7.png';
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Profile() {
    const navigation = useNavigation();
    const UserProfileData = [
        {label: 'Posts', number: 54},
        {label: 'Followers', number: 834},
        {label: 'Following', number: 162}
    ]

    const UserDestaquesData = [
        {label: 'new', img: MoreIcon},
        {label: 'Friends', img: Oval1},
        {label: 'Sport', img: Oval2},
        {label: 'Design', img: Oval3},
    ]

    const FeedImages = [
        {id: 1, img: Feed1},
        {id: 2, img: Feed2},
        {id: 3, img: Feed3},
        {id: 4, img: Feed4},
        {id: 5, img: Feed5},
        {id: 6, img: Feed6},
        {id: 7, img: Feed7}
        ]

    const { signOut } = useContext(AuthContext);

    return(
        <VStack flex={1} bg={'#FAFAFA'}>
            <ScrollView>
                <VStack py={4} justifyContent={'flex-end'} alignItems={'flex-end'}>
                    <HStack alignItems={'center'} justifyContent={'space-between'} w={'62%'} pr={'5%'}>
                        <TouchableOpacity>
                            <HStack alignItems={'center'} justifyContent={'flex-end'}>
                                <FontAwesome name='lock' size={24} color='black' />
                                <Text px={3}>jacob_w</Text>
                                <TouchableOpacity onPress={navigation.dispatch(DrawerActions.toggleDrawer())}>
                                    <Feather name='chevron-down' size={24} color='black' />
                                </TouchableOpacity>
                            </HStack>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Feather name='menu' size={24} color='black' />
                        </TouchableOpacity>
                    </HStack>
                </VStack>

                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Avatar bg="amber.500" source={AvatarIcon} size={'xl'}>
                        <Avatar.Badge bg="green.500" />
                    </Avatar>

                    <HStack justifyContent={'center'} alignItems={'center'} ml={5}>
                        {UserProfileData.map((item, index) => (
                            <VStack key={index} px={3}>
                                <Text textAlign={'center'} bold>{item.number}</Text>
                                <Text textAlign={'center'}>{item.label}</Text>
                            </VStack>
                        ))}
                    </HStack>
                </HStack>

                <VStack pt={3} px={3}>
                    <Text>Jacob West</Text>
                    <Text>Digital godies designer @pixellz</Text>
                    <Text>Everything is designed.</Text>

                    <Button _pressed={{backgroundColor: 'gray.200'}} my={3} bg={'white'} borderWidth={1} borderColor={'gray.300'} mx={8} py={2}>
                    <Text>Edit Profile</Text>
                    </Button>
                </VStack>

                <HStack py={3}>
                    {UserDestaquesData.map((item, index) => (
                        <TouchableOpacity key={index}>
                            <VStack alignItems={'center'} justifyContent={'center'} px={2}>
                                <Avatar bg={'transparent'}
                                    source={item.img}
                                    size='lg'borderWidth={'1px'}
                                    borderColor={'gray.300'}
                                    p={'2px'}
                                />
                                <Text>{item.label}</Text>
                            </VStack>
                        </TouchableOpacity>
                    ))}
                </HStack>

                <HStack py={3} borderTopColor={'gray.200'} borderTopWidth={'1px'} w={'full'} justifyContent={'space-around'}>
                    <TouchableOpacity>
                        <VStack>
                            <Fontisto name={'nav-icon-grid'} color={'gray'} size={18}/>
                        </VStack>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <VStack>
                            <FontAwesome5 name={'user-tag'} color={'gray'} size={18}/>
                        </VStack>
                    </TouchableOpacity>
                </HStack>

                <FlatList
                    data={FeedImages}
                    numColumns={3}
                    keyExtractor={item => item.id}
                    scrollEnabled={false}
                    style={{marginHorizontal: 5, width:'100%'}}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{margin: 2}}>
                                <Image key={item.id} source={item.img} />
                            </TouchableOpacity>
                        );
                    }}
                />
            </ScrollView>
        </VStack>
    )
}