import 'package:flutter/material.dart';
import 'home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp (
      title: '균호&하영 결혼합니다',
      theme: ThemeData (
        fontFamily: 'GowunBatang',
        scaffoldBackgroundColor: const Color(0xFFFFFFFF),
        textTheme: TextTheme(
          bodyText1: TextStyle(color: Colors.black), // 일반 텍스트
          bodyText2: TextStyle(color: Colors.black), // 일반 텍스트
          subtitle1: TextStyle(color: Colors.black), // 부제목 1
          subtitle2: TextStyle(color: Colors.black), // 부제목 2
          headline1: TextStyle(color: Colors.black), // 제목 1
          headline2: TextStyle(color: Colors.black), // 제목 2
          headline3: TextStyle(color: Colors.black), // 제목 3
          headline4: TextStyle(color: Colors.black), // 제목 4
          headline5: TextStyle(color: Colors.black), // 제목 5
          headline6: TextStyle(color: Colors.black), // 제목 6
          overline: TextStyle(color: Colors.black), // 오버라인
        ),
      ),
      home: Container(
        width: 500.0,
        child: MyHomePage(),
      ),
    );
  }
}