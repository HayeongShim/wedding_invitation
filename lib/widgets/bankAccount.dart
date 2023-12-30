import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/services.dart';
import 'dart:html' as html;
import 'dart:ui' as ui;

class BankAccount extends StatelessWidget {
  final String accountNumber = '302-1041-4698-11';

  void _copyToClipboard(String text, BuildContext context) {
    Clipboard.setData(ClipboardData(text: text));
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('계좌번호가 복사되었습니다.'),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 500.0,
      margin: EdgeInsetsDirectional.all(20.0),
      child: Column(
        children: [
          Text(
            '마음 전하는 곳',
            style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w600, height: 1, color: Color.fromRGBO(41, 82, 56, 100))
          ),
          const SizedBox(height: 16.0),
          Text(
            '신랑측 계좌번호',
            style: TextStyle(fontSize: 16.0, fontWeight: FontWeight.w600, height: 3)
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center, // 여기를 추가하여 가운데 정렬
            children: [
              Expanded(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      '농협 $accountNumber (유병수)    ',
                    ),
                    ElevatedButton(
                      onPressed: () {
                        _copyToClipboard(accountNumber, context);
                      },
                      child: const Text('복사하기'),
                      style: ElevatedButton.styleFrom(
                        primary: Colors.green
                      )
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
