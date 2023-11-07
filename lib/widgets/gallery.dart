import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';

class Gallery extends StatefulWidget {
  final List<String> imagePaths = [
    'assets/images/flower.jpg',
    'assets/images/img_25563_1.jpg',
    'assets/images/img_25563_1.jpg',
    'assets/images/img_25563_1.jpg',
    // 추가 이미지 경로
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
      child: PageView.builder(
        controller: _pageController,
        pageSnapping: true,
        itemCount: widget.imagePaths.length,
        itemBuilder: (context, index) {
          return Center(
            child: Image.asset(
              widget.imagePaths[index],
              fit: BoxFit.cover, // 이미지가 화면에 맞게 표시됩니다.
            ),
          );
        },
      ),
    );
  }
  
  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }
}