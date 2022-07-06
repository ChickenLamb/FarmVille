import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Add_Layout() {
  return (
    <Box sx={{ width: "100%", borderTop: 2 }}>
      <Grid
        pt={1}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={"1"}>
          <Item elevation={0}>&nbsp;</Item>
        </Grid>
        <Grid item xs={"auto"}>
          <Item elevation={0} sx={{ backgroundColor: "red", color: "white" }}>
            添加品項
          </Item>
        </Grid>
      </Grid>
      <Grid
        pt={1}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={"auto"} ml={1} mr={1}>
          <Item elevation={1}>
            <Card sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                sx={{ width: "fit-content" }}
                image={"https://picsum.photos/300/300"}
                alt="Live from space album cover"
              />
            </Card>
          </Item>
        </Grid>
        <Grid item xs={"auto"} ml={2} mr={2}>
          <Stack spacing={2}>
            <Item elevation={0} sx={{ fontWeight: "bold" }}>
              品項代號
            </Item>
            <Item elevation={0}>
              <TextField id="outlined-basic" label="A001" variant="outlined" />
            </Item>
            <Item elevation={0} sx={{ fontWeight: "bold" }}>
              品項名稱
            </Item>
            <Item elevation={0}>
              <TextField id="outlined-basic" label="A0017" variant="outlined" />
            </Item>
          </Stack>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={"auto"} ml={2} mr={2}>
          <Item
            elevation={0}
            sx={{
              width: "100%",
              borderBottom: 2,
              borderRadius: 0,
              fontWeight: "bold",
            }}
          >
            選擇類別
          </Item>
          <Item elevation={0}>
            <Stack spacing={2} direction="row">
              <Item elevation={0}>
                <Button variant="contained">#農作物</Button>
              </Item>
              <Item elevation={0}>
                <Button variant="outlined">#消耗品</Button>
              </Item>
              <Item elevation={0}>
                <Button variant="outlined">#其他</Button>
              </Item>
            </Stack>
          </Item>
          <Item elevation={0}>OR</Item>
          <Item elevation={0}>
            <TextField
              id="outlined-basic"
              label="添加新類別"
              variant="outlined"
            />
          </Item>
        </Grid>
      </Grid>
      <Grid
        pt={1}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ width: "100%", borderBottom: 2 }}
      >
        <Grid item xs={8}>
          <Item elevation={0}>&nbsp;</Item>
        </Grid>
        <Grid item xs={"auto"}>
          <Item elevation={0}>
            <Button variant="contained" sx={{ backgroundColor: "red" }}>
              確認
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
