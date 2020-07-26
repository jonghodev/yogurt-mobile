import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { navigationProps } from '../../types';

// Components
import BaseInput from '../../components/base/BaseInput';
import BaseButton from '../../components/base/BaseButton';

// Etc
import colors from '../../styles/colors';

const PasswordSearch: React.FC<navigationProps> = () => {
  const [email, setEmail] = useState('');
  const [isEmailAvailable, setEmailAvailability] = useState(false);
  const [username, setUsername] = useState('');

  const handleEmailChange = (paramEmail: string) => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setEmail(paramEmail);

    if(!emailCheckRegex.test(paramEmail)) {
      return setEmailAvailability(false);
    }

    setEmailAvailability(true);
  };

  const handleUsernameChange = (paramUsername: string) => {
    setUsername(paramUsername);
  };

  const toggleNextButtonState = (): boolean => {
    if (isEmailAvailable) {
      return false;
    }
    return true;
  };

  const handleNextButton = async (): Promise<void> => {
  };

  const setBottomText = (text: string, color: string) => {
    return (
      <View style={{ paddingTop: -30 }}>
        <Text style={{ fontSize: 11, color: color }}>{text}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text>이메일로 비밀번호 변경 정보를 보내드립니다.</Text>
          <Text>이메일과 아이디와 입력해주세요.</Text>
        </View>
        <View>
          <View>
            <BaseInput
              inputValue={email}
              placeholder="이메일 주소"
              labelTextSize={14}
              labelColor={colors.lightBlack}
              textColor={colors.black}
              borderBottomColor={colors.lightGray}
              inputType="email"
              customStyle={{}}
              onChangeText={handleEmailChange}
              autoFocus
            />
          </View>
          {
            isEmailAvailable
              ? setBottomText('이메일을 입력해주세요.', colors.lightSkyBlue)
              : setBottomText('형식에 맞는 이메일을 입력해주세요.', colors.darkOrange)
          }
          <View>
            <BaseInput
              inputValue={username}
              placeholder="아이디"
              labelTextSize={14}
              labelColor={colors.lightBlack}
              textColor={colors.black}
              borderBottomColor={colors.lightGray}
              inputType="text"
              customStyle={{}}
              onChangeText={handleUsernameChange}
            />
          </View>
        </View>
      </ScrollView>
      <BaseButton
        handleClick={handleNextButton}
        disabled={toggleNextButtonState()}
        text="임시 비밀번호 보내기"
        backgroundColor={colors.lightSkyBlue}
        customStyle={{ margin: '10%', marginBottom: '15%' }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    flex: 1,
  }
});

export default PasswordSearch;