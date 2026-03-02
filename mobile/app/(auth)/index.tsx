import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSocialAuth } from "@/hooks/useSocialAuth";

const AuthHome = () => {
  const { isLoading, handleSocialAuth } = useSocialAuth();
  return (
    <View className="flex-1  bg-white">
      <View className="flex-1 px-3 justify-center">
        <View className="items-center">
          <Image
            source={require("../../assets/images/auth2.png")}
            resizeMode="contain"
            className="size-96"
          />
        </View>
        <View className="flex-col gap-2">
          <TouchableOpacity
            onPress={() => handleSocialAuth("oauth_google")}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              elevation: 0.5,
            }}
            className="flex-row justify-center border-gray-300 rounded-full py-3 px-6 items-center bg-white border"
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <View className="flex-1 flex-row items-center justify-center">
                <Image
                  className="size-10 mr-3"
                  resizeMode="contain"
                  source={require("../../assets/images/google.png")}
                />
                <Text>Continue with google</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSocialAuth("oauth_apple")}
            style={{
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              elevation: 0.5,
            }}
            className="flex-row justify-center border-gray-300 rounded-full py-5 px-6 items-center bg-white border"
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <View className="flex-1 flex-row items-center justify-center">
                <Image
                  className="size-7 mr-3"
                  resizeMode="contain"
                  source={require("../../assets/images/apple.png")}
                />
                <Text>Continue with apple</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Text className="text-center text-gray-500 text-xs px-2 mt-6 leading-4">
          By signing up, you agree to our
          {", "}
          <Text className="color-blue-500">Terms, Privacy Policy</Text>
          {", and "}
          <Text className="color-blue-500">Cookie Use.</Text>
        </Text>
      </View>
    </View>
  );
};

export default AuthHome;
