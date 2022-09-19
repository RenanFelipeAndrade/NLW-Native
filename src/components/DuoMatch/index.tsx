import {
  ActivityIndicator,
  Alert,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { CheckCircle } from "phosphor-react-native";
import { Heading } from "../Heading";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

interface DuoMatchProps extends ModalProps {
  discord: string;
  closeModal: () => void;
}

export function DuoMatch({ discord, closeModal, ...rest }: DuoMatchProps) {
  const [isCoping, setIsCoping] = useState<boolean>(false);
  async function handleCopyDiscordToClipboard() {
    setIsCoping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert(
      "Discord Copiado!",
      "Usuário copiado para a Área de transferência"
    );
    setIsCoping(false);
  }

  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight={"bold"} />

          <Heading
            style={{ alignItems: "center", marginTop: 24 }}
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            onPress={handleCopyDiscordToClipboard}
            style={styles.discordButton}
            disabled={isCoping}
          >
            <Text style={styles.discord}>
              {isCoping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
