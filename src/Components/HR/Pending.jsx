import {
  Button,
  Card,
  CardContent,
  Divider,
  ImageListItem,
  List,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import profile from "../../Image/logo.jpeg";
const Pending = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
      flexWrap={"wrap"}
      sx={{ width: "84%", background: "#F7F7F7", p: 2 }}
      gap={3}
    >
      <Card
        sx={{
          width: "100%",
        }}
      >
        <Typography>New Request</Typography>
        <Divider sx={{ m: 1 }} />
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          // justifyContent={"flex-start"}
          flexWrap={"wrap"}
          gap={3}
          sx={{ p: 5 }}
        >
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              position: "relative",
              overflow: "visible",
              flex:"1 1 30.33%",
              my: 4,
            }}
          >
            <ImageListItem
              sx={{
                maxWidth: 90,
                borderRadius: "50%",
                border: "3px solid #EF9B01",
                p: 0.3,
                position: "absolute",
                top: -45,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <img
                src={profile}
                alt="profile"
                style={{ width: "100%", borderRadius: "50%" }}
              />
            </ImageListItem>
            <CardContent sx={{ pt: 6 }}>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <List>Name : </List>
                <List>Yonatan mekonnen</List>
              </Typography>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
              >
                <Button>Decline</Button>
                <Button>Approve</Button>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Card>
    </Stack>
  );
};

export default Pending;
