// import Content from "../../components/content/content";
import Title from "../../components/title/title";
import { ContactItem, Contacts } from "./contacts_styled";

// import { isMobile } from "react-device-detect";

const contacts = [
  {
    name: "telegram",
    content: "@JorielLeet",
    link: "https://t.me/JorielLeet",
  },
  {
    name: "email",
    content: "main@guzlik.ru",
    link: "https://mail.google.com/mail/u/0/?fs=1&to=main@khoroshev.pro&su=&body=&bcc=&tf=cm",
  },
  {
    name: "github",
    content: "main@guzlik.ru",
    link: "https://github.com/SerejaCrystalys",
  },
];

const ContactsTab = () => {
  return (
    <>
      <Title
        decorations="underline"
        fontSize={40}
        centered={true}
        top={true}
        value={<>contact me</>}
      />
      <Contacts>
        {contacts.map((item, index) => {
          return (
            <ContactItem key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={`img/contacts/${item.name}.svg`} alt={item.content} />
              </a>
            </ContactItem>
          );
        })}
      </Contacts>
    </>
  );
};
export default ContactsTab;
