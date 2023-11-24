import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:flutter/material.dart';
import 'dart:html' as html;
import 'dart:ui' as ui;

class Map extends StatefulWidget {
  @override
  _MapState createState() => _MapState();
}

class _MapState extends State<Map> {
  final API_KEY = "AIzaSyBA0lA83HAYq0dIAIncAznqQgW7RWR0nNY";

  Widget getMap() {
    // ignore: undefined_prefixed_name
    ui.platformViewRegistry.registerViewFactory('iframe', (int viewId) {
      var iframe = html.IFrameElement();
      iframe.src = 'https://www.google.com/maps/embed/v1/place?key=$API_KEY&q=수원노블레스웨딩컨벤션';
      return iframe;
    });

    return const HtmlElementView(viewType: 'iframe');
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsetsDirectional.all(20.0),
        child: Column(
          children: [
          const Text(
            '오시는 길',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 18.0, fontWeight: FontWeight.w600, height: 1)
          ),
          const Text(
            '수원 노블레스 웨딩 컨벤션',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 16.0, fontWeight: FontWeight.w400, height: 3)
          ),
          const Text(
            '경기도 수원시 팔달구 팔달문로 128',
            textAlign: TextAlign.center),
          const SizedBox(height: 20),
          Container(
            width: 400,
            height: 250,
            child: getMap(),
          ),
          const Text(
            '주차 안내',
            textAlign: TextAlign.left),

        ],
      )
    );
  }
}

