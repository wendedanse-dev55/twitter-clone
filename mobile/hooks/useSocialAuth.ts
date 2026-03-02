import {useState} from "react";
import {useSSO} from "@clerk/clerk-expo";
import {Alert} from "react-native";

export const useSocialAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {startSSOFlow} = useSSO()

    const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
        setIsLoading(true)
        try {
            const { createdSessionId, setActive} = await startSSOFlow({strategy})
            if(createdSessionId && setActive) {
                await setActive({session: createdSessionId})
            }
        } catch(error) {
            const provider = strategy === "oauth_apple" ? "Google" : "Apple"
            Alert.alert("Error", `Failed to sign in with ${provider}. please try again.`)
        } finally {
            setIsLoading(false)
        }
    }
    return {
        isLoading, handleSocialAuth
    }
}
