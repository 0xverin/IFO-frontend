/* eslint-disable @next/next/no-img-element */
import { Box, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
const WBox = (props: any) => {
    const [radio, setRadio] = useState(1);
    const iterms = [
        {
            key: 1,
            src: "/assets/type1.png",
            cost: 10,
        },
        {
            key: 2,
            src: "/assets/type2.png",
            cost: 20,
        },
        {
            key: 3,
            src: "/assets/type3.png",
            cost: 50,
        },
    ];
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
                {iterms.map((item) => {
                    return (
                        <Box
                            sx={{
                                height: "420px",
                                width: "350px",
                            }}
                            key={item.key}
                            display="flex"
                            justifyContent="center"
                            flexWrap="wrap"
                        >
                            <img src={item.src} width={300} height={350} alt=""></img>
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                                display="flex"
                                justifyContent="center"
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        height: "40px",
                                        bgcolor: "#FFB154",
                                        color: "black",
                                        ":hover": {
                                            bgcolor: "#FFA54A",
                                        },
                                    }}
                                >
                                    花 {item.cost}U 购买
                                </Button>
                            </Box>
                        </Box>
                    );
                })}
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
                        width: "90%",
                        m: "0 auto",
                    }}
                >
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={radio}
                        onChange={(e) => {
                            setRadio(Number(e.target.value));
                        }}
                        sx={{
                            m: "0 auto",
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="中级盲盒"
                            sx={{
                                color: "#FFB154",
                                "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
                                    color: "#FFB154",
                                },
                            }}
                        />
                        <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="高级盲盒"
                            sx={{
                                color: "#FFB154",
                                "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
                                    color: "#FFB154",
                                },
                            }}
                        />
                        <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label="特高级盲盒"
                            sx={{
                                color: "#FFB154",
                                "& .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
                                    color: "#FFB154",
                                },
                            }}
                        />
                    </RadioGroup>
                </Box>
                <Box display="flex" justifyContent="center" flexWrap="wrap">
                    <img src={iterms[radio - 1].src} width={300} height={350} alt=""></img>
                    <Button
                        variant="contained"
                        sx={{
                            height: "40px",
                            bgcolor: "#FFB154",
                            color: "black",
                            my: "20px",
                            ":hover": {
                                bgcolor: "#FFA54A",
                            },
                        }}
                    >
                        花 {iterms[radio - 1].cost}U 购买
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default function Package() {
    return (
        <Box>
            <Box
                sx={{
                    width: {
                        md: "65%",
                        xs: "95%",
                    },
                    m: "0 auto",
                    textAlign: "center",
                    color: "#FFB260",
                    fontSize: {
                        md: "32px",
                        xs: "14px",
                    },
                    marginBottom: "20px",
                }}
            >
                参与IFO获得盲盒，价格不同，获得NFT的几率也会不同
            </Box>
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
        </Box>
    );
}
