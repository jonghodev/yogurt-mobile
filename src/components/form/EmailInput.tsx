import React from 'react';
import BaseInput from '../base/BaseInput';
import colors from '../../..';
import { emailRegex } from '../../utils/regex';

interface Props {
  email: string;
  setEmail: (phoneNumber: string) => void;
  setEmailValidated: (isAvailable: boolean) => void;
  setIsVerifyCodeSent: (isSent: boolean) => void;
}

export const EmailInput: React.FC<Props> = ({
  email,
  setEmail,
  setEmailValidated,
  setIsVerifyCodeSent,
}) => {
  const handleEmailChange = (paramEmail: string) => {
    setEmail(paramEmail);
    setIsVerifyCodeSent(false);

    if (emailRegex.test(paramEmail)) {
      setEmailValidated(true);
    } else {
      setEmailValidated(false);
    }
  };

  return (
    <BaseInput
      inputValue={email}
      labelText="이메일 주소를 입력하세요"
      placeholder="contact@yogurt-studio.com"
      labelTextSize={12}
      labelColor={palatte.logoColor}
      textColor={colors.lightBlack}
      borderBottomColor={colors.lightGray}
      inputType="email"
      inputStyle={{ width: 200 }}
      onChangeText={handleEmailChange}
      autoFocus
    />
  );
};
