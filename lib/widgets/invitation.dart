import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';

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
              fontSize: 18)),
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
          // TBD - 연락하기 버튼
        ],
      )
    );
  }
}