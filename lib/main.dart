import 'package:flutter/material.dart';
import 'home.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp (
      title: '균호&하영 결혼합니다',
      theme: ThemeData (
        fontFamily: 'GowunBatang',
        scaffoldBackgroundColor: const Color(0xFFFFFFFF),
      ),
      home: MyHomePage(),
    );
  }
}