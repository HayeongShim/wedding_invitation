import 'package:flutter/material.dart';
import 'package:confetti/confetti.dart';
import 'package:wedding_invitation/widgets/welcome.dart';
import 'package:wedding_invitation/widgets/invitation.dart';
import 'package:wedding_invitation/widgets/gallery.dart';

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final controller = ConfettiController();

  @override
  void initState() {
    super.initState();
    controller.play();
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => Stack (
    alignment: Alignment.topCenter,
    children: [
      Scaffold (
        body: SingleChildScrollView (
          child: Column (
            children: [
              Welcome(),
              Invitation(),
              Gallery(),
            ],
          ),
        ),
      ),
      ConfettiWidget(
        confettiController: controller,
        shouldLoop: true,

        blastDirectionality: BlastDirectionality.explosive,
        emissionFrequency: 0.05,
        numberOfParticles: 1,
        gravity: 0.1,

        createParticlePath: (size) {
          final path = Path();
          path.addRect(Rect.fromPoints(Offset(-5, -5), Offset(10, 1)));
          //path.addOval(Rect.fromCircle(center: Offset.zero, radius: 5));
          return path;
        },
      )
    ],
  );
}