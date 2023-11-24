import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'dart:ui';

class Gallery extends StatefulWidget {
  final List<ImageProvider> imagePaths = [
    AssetImage('assets/images/KakaoTalk_20231125_001038144.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001141292.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001212532.jpg'),
  ];
  
  @override
  _GalleryState createState() => _GalleryState();
}

class _GalleryState extends State<Gallery> {
  PageController _pageController = PageController(viewportFraction: 0.9);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsetsDirectional.all(20.0),
      height: 500.0,
      child: ScrollConfiguration(
        behavior: ScrollConfiguration.of(context).copyWith(
          dragDevices: {
            PointerDeviceKind.mouse, PointerDeviceKind.touch, PointerDeviceKind.stylus,
            PointerDeviceKind.trackpad, PointerDeviceKind.unknown
          }
        ),
        child: PageView.builder(
          controller: _pageController,
          physics: const AlwaysScrollableScrollPhysics(),
          scrollDirection: Axis.horizontal,
          itemCount: widget.imagePaths.length,
          itemBuilder: (context, index) {
            return Container(
              decoration: BoxDecoration(
                image: DecorationImage(image: widget.imagePaths[index]),
              )
            );
          }
        ),
      )
    );
  }
  
  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }
}