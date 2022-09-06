import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const MyNFT = (props: any) => {
    return <Box>MyNFT</Box>;
};
const MyPackage = (props: any) => {
    return <Box>MyPackage</Box>;
};
export default function NFT() {
    const [value, setValue] = useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{
                width: {
                    md: "65%",
                    xs: "95%",
                },
                height: "400px",
                bgcolor: "gray",
                m: "0 auto",
                mt: "20px",
            }}
        >
            <Box sx={{ width: "100%" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="我的NFT" />
                    <Tab label="我的盲盒" />
                </Tabs>
                {value === 0 && <MyNFT />}
                {value === 1 && <MyPackage />}
            </Box>
        </Box>
    );
}
