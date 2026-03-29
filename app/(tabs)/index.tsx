import React from 'react';
import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import { VLCPlayer } from 'react-native-vlc-media-player';

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <View style={styles.header}>
        <Text style={styles.title}>GHOST PROXY TV</Text>
        <Text style={styles.subtitle}>40S LIVE EDGE ENABLED • 450MBPS OK</Text>
      </View>

      <VLCPlayer
        style={styles.video}
        videoAspectRatio="16:9"
        autoplay={true}
        source={{
          uri: "INSERT_YOUR_STREAM_URL_HERE", // <-- PUT YOUR M3U8 LINK HERE
          initOptions: [
            "--network-caching=1000", // The magic 1-second buffer
            "--live-caching=1000",
            "--clock-jitter=0",
            "--drop-late-frames",
            "--rtsp-tcp"
          ],
        }}
      />

      <View style={styles.footer}>
        <Text style={styles.latencyText}>LATENCY: 5MS • STABLE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center' },
  header: { position: 'absolute', top: 50, width: '100%', alignItems: 'center' },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold', letterSpacing: 2 },
  subtitle: { color: '#0f0', fontSize: 10, marginTop: 5 },
  video: { width: width, height: width * (9 / 16), backgroundColor: '#111' },
  footer: { position: 'absolute', bottom: 40, width: '100%', alignItems: 'center' },
  latencyText: { color: '#444', fontSize: 12 },
});