import { Box } from "@mui/material";
import Dashboard from "./components/Dashboard";
import Package from "./components/Package";
export default function Home() {
    return (
        <Box>
            <Dashboard></Dashboard>
            <Package></Package>
        </Box>
    );
}
