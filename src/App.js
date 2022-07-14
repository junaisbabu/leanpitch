import './App.css';
import Banner from './components/banner/Banner';
import Community from './components/community/Community';
import Conference from './components/conference/Conference';
import Header from './components/header/Header';
import Lab from './components/lab/Lab';
import Meetups from './components/meetups/Meetups';
import Blogs from './components/playlists/Blogs';
import PMSpeaksSeries from './components/playlists/PMSpeaksSeries';
import Podcasts from './components/playlists/Podcasts';
import Video from './components/playlists/Video';
import Trainings from './components/trainings/Trainings';
import Webinars from './components/webinars/Webinars';

function App() {
  return (
    <>
    <Header />
    <Banner />
    <Community />
    <Lab />
    <Trainings />
    <Meetups />
    <Webinars />
    <Conference />
    <Video />
    <PMSpeaksSeries />
    <Blogs />
    <Podcasts />
    </>
  );
}

export default App;
