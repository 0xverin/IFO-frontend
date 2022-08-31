import Box from "@mui/material/Box";
import { CustomConnect } from "components/ConnectWallet/index";
import Image from "next/image";
export default function Header() {
    return (
        <Box
            sx={{
                height: "65px",
                width: "100%",
                bgcolor: "rgb(8, 33, 41)",
                boxShadow:
                    "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);",
                zIndex: 9999,
            }}
        >
            <Box
                sx={{
                    width: {
                        md: "65%",
                    },
                    height: "100%",
                    margin: "0 auto",
                    px: "10px",
                }}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Box
                    sx={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "600",
                    }}
                    display="flex"
                    alignItems="center"
                >
                    <Image src="/logo.svg" width={50} height={50} alt="logo"></Image>
                    <Box>IFO</Box>
                </Box>
                <CustomConnect></CustomConnect>
            </Box>
        </Box>
    );
}
