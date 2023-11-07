import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:url_launcher/url_launcher.dart';

final Color indiBlueColor = Color.fromRGBO(102, 142, 170, 1.0);
final Color indiPinkColor = Color.fromRGBO(206, 131, 131, 1.0);

Widget _buildName(String father, mother, relation, name) {
  return Center (
    child: Row (
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text('$father · $mother', style: TextStyle(fontSize: 18)),
        Text(' 의 $relation ', style: TextStyle(fontSize: 13)),
        Text(name, style: TextStyle(fontSize: 18)),
      ],
    )
  );
}

void _launchPhoneCall(String phoneNumber) async {
  final uri = Uri.parse('tel:$phoneNumber');
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri);
  } else {
    throw '전화를 걸 수 없습니다: $uri';
  }
}

void _sendSms(String phoneNumber) async {
  final uri = Uri.parse('sms:$phoneNumber');
  if (await canLaunchUrl(uri)) {
    await launchUrl(uri);
  } else {
    throw '문자를 보낼 수 없습니다: $uri';
  }
}

Widget _buildContactInfo(String who, name, number, Color color) {
  return Row (
    children: [
      Expanded(
        flex: 2,
        child: Align(
          alignment: Alignment.center,
          child: Text('$who', style: TextStyle(color: color)),
        ),
      ),
      Expanded(
        flex: 2,
        child: Align(
          alignment: Alignment.center,
          child: Text('$name'),
        ),
      ),
      Expanded(
        flex: 1,
        child: Align(
          alignment: Alignment.center,
          child: TextButton(
            onPressed: () { _launchPhoneCall(number); },
            child: Icon(Icons.phone, color: color, size: 24.0),
          )
        ),
      ),
      Expanded(
        flex: 1,
        child: Align(
          alignment: Alignment.center,
          child: TextButton(
            onPressed: () { _sendSms(number); },
            child: Icon(Icons.email, color: color, size: 24.0),
          )
        ),
      ),
    ],
  );
}

Widget _buildPopUpContent() {
  return Container(
    constraints: BoxConstraints(maxHeight: 250),
    child: Column (
      children: [
        _buildContactInfo('신랑', 'ㅇㄱㄴ', '010-1234-5678', indiBlueColor),
        const SizedBox(height: 10),
        _buildContactInfo('신랑 아버지', '아버지', '010-1234-5679', indiBlueColor),
        const SizedBox(height: 10),
        _buildContactInfo('신랑 어머니', '어머니', '010-1234-5679', indiBlueColor),

        const SizedBox(height: 20),
        Divider(thickness: 1, height: 1,),
        const SizedBox(height: 20),

        _buildContactInfo('신부', 'ㅅㅎㅇ', '010-1234-5678', indiPinkColor),
        const SizedBox(height: 10),
        _buildContactInfo('신부 아버지', '아버지', '010-1234-5679', indiPinkColor),
        const SizedBox(height: 10),
        _buildContactInfo('신부 어머니', '어머니', '010-1234-5679', indiPinkColor),
      ],
    )
  );
}

Widget _buildContactButton(BuildContext context) {
  return OutlinedButton(
    onPressed: () {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Center(child: Text('연락하기', style: TextStyle(fontSize: 18))),
            content: _buildPopUpContent(),
          );
        },
      );
    },
    child: Text(
      '                 📞 연락하기                  ',
      style: TextStyle(color: Color.fromRGBO(41, 82, 56, 100))
    ),
    style: OutlinedButton.styleFrom(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(20.0),
      ),
      padding: EdgeInsets.all(16.0),
      backgroundColor: Colors.white,
      side: BorderSide(width: 0.5, color: Color.fromRGBO(41, 82, 56, 100))
    ),
  );
}

class Invitation extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container (
      margin: const EdgeInsetsDirectional.all(20.0),
      child: Column (
        children: [
          const SizedBox(height: 50),
          Container (
            height: MediaQuery.of(context).size.height * 0.1,
            child: Image.asset('assets/images/flower.jpg', fit: BoxFit.contain,),
          ),

          const AutoSizeText(
            '소중한 분들을 초대합니다',
            style: TextStyle(
              color: const Color.fromRGBO(41, 82, 56, 100),
              fontSize: 18)
          ),

          const SizedBox(height: 40),
          const AutoSizeText(
            '규노 숙제\n멋진 인사말 하나 써주세요',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 15, height: 2),
          ),

          const SizedBox(height: 50),
          _buildName('아부지', '어무니', '아들', 'ㄱㄴ'),
          const SizedBox(height: 10),
          _buildName('아부지', '어무니', ' 딸 ', 'ㅎㅇ'),
          const SizedBox(height: 50),

          _buildContactButton(context),
        ],
      )
    );
  }
}