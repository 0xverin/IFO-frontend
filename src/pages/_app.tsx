import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Header from "components/Header/index";
import { chains, wagmiClient } from "config/wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "styles/globals.css";
import "styles/rainbowkit.css";
import { WagmiConfig } from "wagmi";
function MyApp({ Component, pageProps }: AppProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <Header></Header>
                <Component {...pageProps} />
            </RainbowKitProvider>
        </WagmiConfig>
    );
}

export default MyApp;
