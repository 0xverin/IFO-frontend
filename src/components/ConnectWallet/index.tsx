import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export const CustomConnect = () => {
    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
            }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                    ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
                return (
                    <div
                        {...(!ready && {
                            "aria-hidden": true,
                            style: {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none",
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <Button
                                        variant="contained"
                                        onClick={openConnectModal}
                                        sx={{
                                            bgcolor: "#00C6C5",
                                            fontWeight: "600",
                                            color: "black",
                                            ":hover": {
                                                bgcolor: "#00A8A7",
                                            },
                                        }}
                                    >
                                        Connect Wallet
                                    </Button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <Button variant="contained" onClick={openChainModal} color="error">
                                        Wrong network
                                    </Button>
                                );
                            }
                            return (
                                <Box display="flex" justifyContent="space-between">
                                    {/* <Button
                                        onClick={openChainModal}
                                        sx={{
                                            bgcolor: "#00C6C5",
                                            color: "black",
                                            width: {
                                                md: "45%",
                                                xs: "10%",
                                            },
                                            ":hover": {
                                                bgcolor: "#00A8A7",
                                            },
                                        }}
                                        variant="contained"
                                    >
                                        <Box
                                            display="flex"
                                            sx={{
                                                height: "100%",
                                            }}
                                        >
                                            {chain.hasIcon && (
                                                <Box display="flex" alignItems="center">
                                                    {chain.iconUrl && (
                                                        <Image
                                                            alt={chain.name ?? "Chain icon"}
                                                            src={chain.iconUrl}
                                                            width={16}
                                                            height={16}
                                                        />
                                                    )}
                                                </Box>
                                            )}
                                            <Box
                                                sx={{
                                                    ml: "10px",
                                                    height: "100%",
                                                    mt: "2px",

                                                    display: {
                                                        xs: "none",
                                                        md: "block",
                                                    },
                                                }}
                                            >
                                                {chain.name}
                                            </Box>
                                        </Box>
                                    </Button> */}
                                    <Button
                                        onClick={openAccountModal}
                                        variant="contained"
                                        sx={{
                                            bgcolor: "#00C6C5",
                                            display: "flex",
                                            color: "black",
                                            fontWeight: "600",
                                            ":hover": {
                                                bgcolor: "#00A8A7",
                                            },
                                            ml: "5px",
                                        }}
                                    >
                                        {account.displayName}

                                        {account.displayBalance ? ` (${account.displayBalance})` : ""}
                                    </Button>
                                </Box>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export const BasciConnect = () => {
    return <ConnectButton></ConnectButton>;
};
