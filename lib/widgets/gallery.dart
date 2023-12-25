import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'dart:ui';
import 'package:photo_view/photo_view.dart';
import 'package:photo_view/photo_view_gallery.dart';
import 'package:wedding_invitation/widgets/imagePage.dart';

class Gallery extends StatefulWidget {
  final List<ImageProvider> imagePaths = [
    AssetImage('assets/images/KakaoTalk_20231125_001038144.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001141292.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001212532.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001038144.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001141292.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001212532.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001038144.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001141292.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001212532.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001038144.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001141292.jpg'),
    AssetImage('assets/images/KakaoTalk_20231125_001212532.jpg'),
  ];
  
  @override
  _GalleryState createState() => _GalleryState();
}

class _GalleryState extends State<Gallery> {
  PageController _pageController = PageController(viewportFraction: 0.9);
  int _currentPage = 0;

  @override
  void initState() {
    super.initState();
    _pageController.addListener(() {
      setState(() {
        _currentPage = _pageController.page?.round() ?? 0;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsetsDirectional.all(20.0),
      child: GridView.builder(
        shrinkWrap: true,
        physics: NeverScrollableScrollPhysics(),
        scrollDirection: Axis.vertical,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 3, // 한 행에 표시할 썸네일 수
        ),
        itemCount: widget.imagePaths.length,
        itemBuilder: (context, index) {
          return GestureDetector(
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => ImagePage(
                    initialIndex: index,
                    imageProviders: widget.imagePaths,
                  ),
                ),
              );
            },
            child: Container(
              margin: EdgeInsets.all(4.0),
              child: Image(
                image: widget.imagePaths[index],
                fit: BoxFit.cover,
              ),
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
