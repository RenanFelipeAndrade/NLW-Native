import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";
import { DuoInfo } from "../DuoInfo";
import { GameController } from "phosphor-react-native";

import { styles } from "./styles";

interface DuoCardProps {
  game: {
    id: string;
    name: string;
    weekDays: string[];
    useVoiceChannel: boolean;
    yearsPlaying: number;
    hoursStart: string;
    hoursEnd: string;
  };
  onConnect: () => void;
}

export function DuoCard({ game, onConnect }: DuoCardProps) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value={game.name} />
      <DuoInfo label="Tempo de jogo" value={`${game.yearsPlaying} ano(s)`} />

      <DuoInfo
        label="Disponibilidade"
        value={`${game.weekDays.length} dia(s) \u2022 ${game.hoursStart} - ${game.hoursEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={game.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          game.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
      <TouchableOpacity onPress={onConnect} style={styles.button}>
        <GameController color={THEME.COLORS.TEXT} size={20} />

        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
