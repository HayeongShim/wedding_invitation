import 'package:flutter/material.dart';
import 'package:wedding_invitation/widgets/welcome.dart';

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          children: [
            Welcome(),
          ],
        ),
      ),
    );
  }
}