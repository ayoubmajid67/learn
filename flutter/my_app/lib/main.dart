import 'package:flutter/material.dart';
import 'dart:ui';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Programming Languages',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
        fontFamily: 'Roboto',
        textTheme: const TextTheme(
          headlineMedium: TextStyle(
            fontWeight: FontWeight.bold,
            fontSize: 28,
            color: Colors.deepPurple,
          ),
          titleLarge: TextStyle(
            fontWeight: FontWeight.w600,
            fontSize: 22,
            color: Colors.black87,
          ),
        ),
      ),
      home: const ProgrammingLanguagesPage(),
    );
  }
}

// ...existing code...

class ProgrammingLanguagesPage extends StatelessWidget {
  const ProgrammingLanguagesPage({super.key});

  final List<Map<String, dynamic>> languages = const [
    {'name': 'Python', 'color': Colors.blue, 'icon': Icons.code},
    {'name': 'HTML', 'color': Colors.orange, 'icon': Icons.language},
    {'name': 'JavaScript', 'color': Colors.yellow, 'icon': Icons.javascript},
    {'name': 'Java', 'color': Colors.red, 'icon': Icons.coffee},
    {'name': 'C++', 'color': Colors.indigo, 'icon': Icons.memory},
    {'name': 'Dart', 'color': Colors.cyan, 'icon': Icons.flutter_dash},
    {'name': 'C#', 'color': Colors.green, 'icon': Icons.computer},
    {'name': 'Go', 'color': Colors.teal, 'icon': Icons.directions_run},
    {'name': 'Rust', 'color': Colors.brown, 'icon': Icons.settings},
    {'name': 'Swift', 'color': Colors.deepOrange, 'icon': Icons.bolt},
    {'name': 'Kotlin', 'color': Colors.purple, 'icon': Icons.code},
    {'name': 'PHP', 'color': Colors.deepPurple, 'icon': Icons.cloud},
    {'name': 'TypeScript', 'color': Colors.lightBlue, 'icon': Icons.code},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        title: const Text('Programming Languages'),
        backgroundColor: Colors.transparent,
        elevation: 0,
        centerTitle: true,
        titleTextStyle: Theme.of(context).textTheme.headlineMedium?.copyWith(
          color: Colors.white,
          letterSpacing: 1.2,
        ),
      ),
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [Color(0xFF6D5DF6), Color(0xFF4A90E2), Color(0xFF50E3C2)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
        ),
        child: SafeArea(
          child: ListView.builder(
            padding: const EdgeInsets.symmetric(vertical: 32, horizontal: 18),
            itemCount: languages.length,
            itemBuilder: (context, index) {
              final lang = languages[index];
              return Padding(
                padding: const EdgeInsets.symmetric(vertical: 10),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(24),
                  child: BackdropFilter(
                    filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white.withOpacity(0.18),
                        borderRadius: BorderRadius.circular(24),
                        border: Border.all(
                          color: Colors.white.withOpacity(0.25),
                          width: 1.2,
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.08),
                            blurRadius: 16,
                            offset: const Offset(0, 8),
                          ),
                        ],
                      ),
                      child: ListTile(
                        contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 8),
                        leading: CircleAvatar(
                          radius: 26,
                          backgroundColor: lang['color'].withOpacity(0.85),
                          child: Icon(
                            lang['icon'],
                            color: Colors.white,
                            size: 28,
                          ),
                        ),
                        title: Text(
                          lang['name'],
                          style: Theme.of(context).textTheme.titleLarge?.copyWith(
                            color: Colors.black87,
                            fontWeight: FontWeight.w600,
                            fontSize: 22,
                          ),
                        ),
                        trailing: Container(
                          decoration: BoxDecoration(
                            color: lang['color'].withOpacity(0.15),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          padding: const EdgeInsets.all(6),
                          child: const Icon(Icons.arrow_forward_ios, color: Colors.deepPurple, size: 18),
                        ),
                        tileColor: Colors.transparent,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(24),
                        ),
                        onTap: () {},
                      ),
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
