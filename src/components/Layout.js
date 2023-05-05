import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";
import ListItem from "./ListItem";

const gamesListData = [
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/8999501312aae4ed78225c60b323a0f6.png",
    alt: "Imagem do jogo League of Legends",
  },
  {
    href: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmaCoZdMiwPvUxcprnLkx-GaAhq82aRqpP1ibFA-E-KI9Rzhdj8ljCSC_k04oFiGrt6Q&usqp=CAU",
    alt: "Imagem do jogo Valorant",
  },
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "https://upload.wikimedia.org/wikipedia/pt/thumb/1/12/DiabloIIIcover.jpg/200px-DiabloIIIcover.jpg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    href: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/23438_IGDB-272x380.jpg",
    alt: "Imagem do jogo Valorant",
  },
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "https://upload.wikimedia.org/wikipedia/pt/0/0d/Elden_Ring_capa.jpg",
    alt: "Imagem do jogo League of Legends",
  },
];
const gamesListStyle = {
  width: "90px",
  height: "120px",
  borderRadius: "8px"
}

const channelListData = [
  {
    href: "https://www.twitch.tv/maykbrito",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },
  {
    href: "https://www.twitch.tv/canaltaticads",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/e35f5f70-f82a-4301-ae8f-5ee32dc6d63b-profile_image-70x70.png",
    alt: "Imagem de Tatica DS",
  },
];
const channelListStyle = {
  width: "70px",
  borderRadius: "50%"
}

const socialListData = [
  {
    href: "https://www.twitch.tv/maykbrito",
    src: "/twitch.svg",
    alt: "Twitch de Evilis Glenio",
  },
  {
    href: "https://twitter.com/EvilisGlenio",
    src: "/twitter.svg",
    alt: "Twitter de Evilis Glenio",
  },
  {
    href: "https://www.instagram.com/evilis.glenio/",
    src: "/instagram.svg",
    alt: "Instagram de Evilis Glenio",
  },
];

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />

      <Box display="grid" maxW="580px" w="90%" m="32px auto" gap="24px">
        <Section
          title="Meus jogos"
          subtitle="Os games que eu mais curto jogar!"
        >
          {gamesListData.map(function (item) {
            return <ListItem url={item.href} src={item.src} alt={item.alt} style={gamesListStyle} />;
          })}
        </Section>
        <Section
          title="Canais e streamers"
          subtitle="Lista de canais e transmissões que não perco!"
        >
          {channelListData.map(function (item) {
            return <ListItem url={item.href} src={item.src} alt={item.alt} style={channelListStyle} />;
          })}
        </Section>
        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
        >
          {socialListData.map(function (item) {
            return <ListItem url={item.href} src={item.src} alt={item.alt} />;
          })}
        </Section>
      </Box>

      <Footer />
    </Box>
  );
};

export default Layout;
