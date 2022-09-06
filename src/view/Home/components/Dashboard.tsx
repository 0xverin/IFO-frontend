import { Box, Button } from "@mui/material";
import Image from "next/image";
export default function Dashboard() {
    return (
        <Box
            sx={{
                height: "350px",
                width: {
                    md: "65%",
                },
                m: "0 auto",
            }}
            display="flex"
            justifyContent="space-between"
        >
            <Box
                sx={{
                    width: "100%",
                    color: "white",
                }}
            >
                <Box
                    sx={{
                        fontSize: "32px",
                        textAlign: "center",
                        width: "100%",
                        m: "0 auto",
                        mt: "10px",
                    }}
                >
                    IFO
                </Box>
                <Box
                    sx={{
                        m: "0 auto",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "14px",
                        mt: "10px",
                    }}
                >
                    IFO有三种类型，价格不同，开奖获取NFT的几率也不同
                </Box>
                <Box
                    sx={{
                        m: "0 auto",
                        textAlign: "center",
                        width: "100%",
                        fontSize: "14px",
                        mt: "10px",
                    }}
                >
                    邀请10人奖励一个盲盒，可以叠加
                </Box>
                <Box
                    sx={{
                        width: {
                            md: "40%",
                        },
                        m: "0 auto",
                        mt: "20px",
                        fontSize: "14px",
                        display: {
                            md: "flex",
                        },
                        justifyContent: {
                            md: "space-around",
                        },
                    }}
                >
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            mt: "10px",
                        }}
                    >
                        <Image src="/price.svg" width={25} height={25} alt="price"></Image>
                        <Box
                            sx={{
                                ml: "10px",
                            }}
                        >
                            价格：100U
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            mt: "10px",
                        }}
                    >
                        <Image src="/flow.svg" width={22} height={22} alt="price"></Image>
                        <Box
                            sx={{
                                ml: "10px",
                            }}
                        >
                            流通：100U
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            mt: "10px",
                        }}
                    >
                        <Image src="/total.svg" width={22} height={22} alt="price"></Image>
                        <Box
                            sx={{
                                ml: "10px",
                            }}
                        >
                            NFT总量：100U
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        textAlign: "center",
                        width: "100%",
                        mt: "20px",
                        color: "#EF6262",
                    }}
                >
                    您的测试U余额:0
                </Box>
                <Box justifyContent="center" display="flex">
                    <Button
                        variant="contained"
                        sx={{
                            mt: "20px",
                            bgcolor: "#00C6C4",
                            ":hover": {
                                bgcolor: "#00A8A6",
                            },
                            color: "black",
                            fontSize: "600",
                        }}
                    >
                        领取测试U(100u)
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
