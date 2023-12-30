import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'dart:html' as html;
import 'dart:ui' as ui;

class DevelopedBy extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 500.0,
      margin: EdgeInsetsDirectional.all(20.0),
      child: Column(
        children: [
          Text(
            '© 2023 심하영, Developed with Flutter',
            style: TextStyle(fontSize: 10.0,)
          ),
          const SizedBox(height: 30.0),
        ],
      ),
    );
  }
}
