import { Box } from "@mui/material";

const WBox = (props: any) => {
    return (
        <Box>
            <Box
                sx={{
                    display: {
                        md: "flex",
                        xs: "none",
                    },
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        height: "400px",
                        width: "350px",
                        bgcolor: "blue",
                    }}
                ></Box>
                <Box
                    sx={{
                        height: "400px",
                        width: "350px",
                        bgcolor: "blue",
                    }}
                ></Box>
                <Box
                    sx={{
                        height: "400px",
                        width: "350px",
                        bgcolor: "blue",
                    }}
                ></Box>
            </Box>
            <Box
                sx={{
                    display: {
                        md: "none",
                        xs: "block",
                    },
                }}
            >
                <Box
                    sx={{
                        height: "400px",
                        width: "90%",
                        bgcolor: "blue",
                        m: "0 auto",
                    }}
                >
                    12313
                </Box>
            </Box>
        </Box>
    );
};

export default function Package() {
    return (
        <Box
            sx={{
                bgcolor: "white",
                m: "0 auto",
                width: {
                    md: "65%",
                    xs: "95%",
                },
            }}
        >
            <WBox></WBox>
        </Box>
    );
}
