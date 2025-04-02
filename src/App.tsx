import Header from "./components/header/header";
import Section from "./components/sections/section";
import AboutTab from "./tabs/about/about_tab";
import ContactsTab from "./tabs/contacts/contacts_tab";
import MainTab from "./tabs/main/main-tab";
import PersonalTab from "./tabs/personal/pet";

const App = () => {
  return (
    <>
      <Header />

      <Section id="main" centered children={<MainTab />} />
      <Section id="about" centered children={<AboutTab />} />
      {/* <Section id="pet" children={<PersonalTab />} /> */}
      <Section id="sayhi" centered children={<ContactsTab />} />
    </>
  );
};

export default App;
