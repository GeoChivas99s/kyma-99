import notifee, {
  TriggerType,
  TimestampTrigger,
  RepeatFrequency,
} from "@notifee/react-native";

export default async function handleTriggerNotification() {
  const date = new Date(Date.now());

  date.setMinutes(date.getMinutes() + 0.1);
  const channelId = await notifee.createChannel({
    id: "1234500",
    name: "Default Channel",
    vibration: true,
  });

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(), //
    repeatFrequency: RepeatFrequency.DAILY,
  };

  await notifee.createTriggerNotification(
    {
      id: "123",
      title: "Já fez a tua terapia de hoje ??",
      body: "Não hesite em fazer as terapias tudo é um processo",
      android: {
        channelId: "sales",
      },
    },
    trigger
  );
}
