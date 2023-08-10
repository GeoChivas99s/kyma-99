import notifee from "@notifee/react-native";

type notifeeProps = {
  title: string;
  body: string;
  icon?: string;
};

export default async function onDisplayNotification(props:notifeeProps) {
  // Request permissions (required for iOS)
  await notifee.requestPermission();
  const { title, body, icon } = props;
  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: "1234",
    name: "Default Channel",
    vibration: true
  });

  // Display a notification
  await notifee.displayNotification({
    title: title,
    body: body,

    android: {
      channelId,
      largeIcon:
        icon ??
        `https://images.rawpixel.com/image_png_1300/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjc5MS10YW5nLTM1LnBuZw.png`, // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: "default",
      },
    },
  });
}
