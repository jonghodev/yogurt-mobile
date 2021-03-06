import React from 'react';
import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import LectureComponent from '../../../components/Lecture/LectureComponent';
import colors from '../../../..';
import BaseText from '../../../components/base/BaseText';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginBottom: '30%',
    marginTop: '2%',
    width: '90%',
    height: '68%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    marginLeft: '5%',
    marginRight: '5%',
  },
  card_ticket: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'stretch',
    width: '90%',
    height: '20%',
    padding: '5%',
    borderRadius: 10,
  },
});

const BookingDetailsScreen: React.FC = () => {
  const cancelAlert = () => {
    Alert.alert(
      '예약 취소',
      '2020. 4. 20. (월) 11:00\n 기구 필라테스 수업을 취소하시겠습니까?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('nothing'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('cancel the class') },
      ],
      { cancelable: false },
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: palatte.logoColor }}>
      <View>
        <View style={styles.card}>
          <View style={{ alignSelf: 'center', marginTop: '8%' }}>
            <BaseText style={{ fontSize: 20 }}>서울숲필라테스</BaseText>
          </View>
          <View>
            <Text>해당 수업</Text>
            <LectureComponent lecture={navigation.getParam('item')} />
          </View>
          <Text style={{ paddingLeft: '5%' }}>사용 상품</Text>
          <View style={styles.card_ticket}>
            <View style={{ flexDirection: 'column' }}>
              <Text>3:1 그룹 체험권 10회</Text>
              <Text>2020. 3. 17 ~ 2021. 4. 15</Text>
            </View>
            <View style={{ flexDirection: 'column' }}>
              <View
                style={{
                  backgroundColor: palatte.logoColor,
                  height: '90%',
                  width: '38%',
                  marginLeft: '40%',
                  borderRadius: 5,
                  padding: '5%',
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: '1%',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'column',
                padding: '1%',
                justifyContent: 'flex-end',
              }}>
              <Text style={{ marginRight: '10%' }}>잔여횟수</Text>
              <Text style={{ marginRight: '10%' }}>잔여일</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                padding: '1%',
                justifyContent: 'flex-end',
              }}>
              <Text style={{ fontSize: 12, marginRight: '10%' }}>4회</Text>
              <Text style={{ fontSize: 12, marginRight: '10%' }}>365일</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              padding: '5%',
              justifyContent: 'flex-start',
            }}>
            <Text style={{ fontSize: 10 }}>예약일시: </Text>
            <Text style={{ fontSize: 10 }}>2020. 4. 13 12:01:36</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button title="예약 취소" color="white" onPress={() => cancelAlert()} />
        </View>
      </View>
    </View>
  );
};

export default BookingDetailsScreen;
