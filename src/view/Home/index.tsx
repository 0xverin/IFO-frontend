import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard";
import Inviter from "./components/Inviter";
import NFT from "./components/NFT";
import Package from "./components/Package";
export default function Home() {
    return (
        <Box>
            <Dashboard></Dashboard>
            <Package></Package>
            <NFT></NFT>
            <Inviter></Inviter>
        </Box>
    );
}
