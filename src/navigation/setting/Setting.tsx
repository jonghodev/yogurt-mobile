import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationProps } from '../../types';
import { CreateSettingComponent } from '../../components/layout/NavigationButton';
import BaseStatusBar from '../../components/base/StatusBar';
import BaseText from '../../components/base/BaseText';
import colors from '../../styles/colors';
import { useUser } from '../../hooks';
import { AsyncStatus } from '../../modules/types';

const Setting: React.FC<NavigationProps> = ({ navigation }) => {
  const { navigate } = navigation;

  const { user, handleChangeField, handleLogOut } = useUser();

  useEffect(() => {
    if (user.logOut.status === AsyncStatus.SUCCESS) {
      navigate('AuthLoading');
    }
  }, [user.logOut, navigate]);

  useEffect(() => {
    return () => {
      handleChangeField('logOut', {
        status: AsyncStatus.INIT,
        errorMessage: '',
      });
    };
  }, [handleChangeField]);

  const onLogOutClick = async () => {
    handleLogOut();
  };

  const settingItemList = [
    {
      name: '회원정보 변경',
      screen: 'PersonalInfo',
      method: (item: any) => navigate(item),
    },
    {
      name: '알림설정',
      screen: 'NotificationSettings',
      method: (item: any) => navigate(item),
    },
    {
      name: '고객센터',
      screen: 'CustomerService',
      method: (item: any) => navigate(item),
    },
    { name: '로그아웃', method: () => onLogOutClick() },
  ];

  return (
    <View style={{ flex: 1 }}>
      <BaseStatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          alignContent: 'flex-end',
          margin: '10%',
        }}>
        <Icon
          name="md-build"
          style={{ fontSize: 30, color: colors.lightBlack }}
        />
        <BaseText
          text="환경설정"
          customStyle={{ fontSize: 30, fontWeight: '600', marginLeft: '5%' }}
        />
      </View>
      <FlatList
        data={settingItemList}
        renderItem={({ item }) => CreateSettingComponent(item)}
      />
    </View>
  );
};

export default Setting;
