import { Button, Text, View } from "react-native";
import { useClerk } from "@clerk/clerk-expo";
const Home = () => {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Signout"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
};

export default Home;
