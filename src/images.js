import Wiggle from './assets/wiggle.png';
import Quandary from './assets/quandary.png';
import Profile from './assets/profile.jpg';
import Precinct from './assets/precinct.jpg';
import Scorch from './assets/scorch.png';
import Substitute from './assets/substitute.png';
import Suction from './assets/suction.png';
import Website from './assets/website.png';
import Discord from './assets/discord.jpg';
import Music from './assets/music.png';

const images = { Wiggle, Quandary, Profile, Precinct, Scorch, Substitute, Suction, Website, Discord, Music };

// Preload all images
Object.values(images).forEach(src => {
    const img = new Image();
    img.src = src;
});

export default images;