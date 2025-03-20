import Content from "../../components/content/content";
import Title from "../../components/title/title";
import { ContactItem, Contacts, ContactsContainer } from "./contacts_styled";

import { isMobile } from "react-device-detect";

const ContactsTab = () => {
  const contacts = [
    {
      name: "Telegram",
      content: "@JorielLeet",
      link: "https://t.me/JorielLeet",
    },
    {
      name: "Email",
      content: "main@guzlik.ru",
      link: "https://mail.google.com/mail/u/0/?fs=1&to=main@khoroshev.pro&su=&body=&bcc=&tf=cm",
    },
    // {
    //   name: "VK",
    //   content: "Sergey Khoroshev",
    //   link: "https://vk.com/cocksucker1488",
    // },
  ];

  return (
    <>
      <ContactsContainer>
        <Title centered={true} top={true} value={<>Say Hi!</>} />
        <Contacts>
          {contacts.map((item, index) => {
            return (
              <ContactItem key={index}>
                <img src={`img/contacts/${item.name}.svg`} alt="" />
                {!isMobile && <Content value={<>{item.name}</>} />}

                <Content
                  contacts={true}
                  value={
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-replace={item.content}
                    >
                      <span>{item.content}</span>
                    </a>
                  }
                />
              </ContactItem>
            );
          })}
        </Contacts>
      </ContactsContainer>
    </>
  );
};
export default ContactsTab;
