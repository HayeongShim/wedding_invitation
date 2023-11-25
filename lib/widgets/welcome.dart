import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';

Widget _buildTitle() {
  return Column (
    children: [
      const Text (
        '24 | 03 | 03',
        textAlign: TextAlign.center,
        style: TextStyle(fontSize: 25.0, fontWeight: FontWeight.bold),
      ),
      const SizedBox(height: 8),
      const Text (
        'SUNDAY',
        textAlign: TextAlign.center,
        style: TextStyle(fontSize: 14.0, fontWeight: FontWeight.w700, letterSpacing: 2.0),
      ),
    ]
  );
}

Widget _buildDday(BuildContext context) {
  final dday = DateTime(2024, 3, 3);
  final today = DateTime.now();
  final difference = dday.difference(today).inDays;

  var ddayText = difference > 0 ? 'D-$difference' : '';

  return Column (
    children: [
      const Text(
        '2024년 3월 3일 일요일 낮 12시',
        style: TextStyle(fontSize: 18),
      ),
      const SizedBox(height: 10),
      AutoSizeText(
        ddayText,
        style: const TextStyle(fontSize: 15, color: Colors.black),
        textAlign: TextAlign.center,
      ),
    ],
  );
}

Widget _buildEventInfo() {
  return const Column (
    children: [
      Text (
        '유균호 | 심하영',
        textAlign: TextAlign.center,
        style: TextStyle(fontSize: 20.0, fontWeight: FontWeight.bold),
      ),
      SizedBox(height: 20),
      Text (
        '2024년 3월 3일 일요일 낮 12시\n수원 노블레스 웨딩 컨벤션 7층',
        textAlign: TextAlign.center,
        style: TextStyle(fontSize: 16.0, fontWeight: FontWeight.w600, height: 2),
      ),
    ]
  );
}

class Welcome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container (
      child: Column (
        children: [
          const SizedBox(height: 20),
          _buildTitle(),
          const SizedBox(height: 30),
          Container (
            height: 600.0,
            child: Image.asset(
              'assets/images/KakaoTalk_20231125_001141292.jpg',
              fit: BoxFit.fitWidth,
              width: double.infinity,
            ),
          ),
          const SizedBox(height: 30),
          _buildEventInfo(),
        ],
      )
    );
  }
}