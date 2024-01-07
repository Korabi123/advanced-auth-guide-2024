import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
  Hr
} from "@react-email/components";
import * as React from "react";

interface TwoFactorEmailProps {
  token: string;
  name: string;
}
export const TwoFactorEmail = ({ token, name }: TwoFactorEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Hi {name}, We noticed a recent attempt to login to your 🔐Auth account. If this was you</Preview>
      <Body style={main}>
        <Tailwind>
          <Container>
            <Section style={logo}>
              <Img
                src={`https://korabi-ecommerce-admin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdncmjp41z%2Fimage%2Fupload%2Fv1704195942%2Fzxr7vlhj7zsvffcclohc.png&w=1920&q=75`}
              />
            </Section>

            <Section style={content}>
              <Img
                width={620}
                src={`https://korabi-ecommerce-admin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdncmjp41z%2Fimage%2Fupload%2Fv1704195773%2Fskhemiousn5nzs3vib1d.png&w=1920&q=75`}
              />

              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading className="text-3xl font-bold text-center">
                    Hi {name},
                  </Heading>
                  <Heading
                    as="h2"
                    className="text-2xl font-semibold"
                  >
                    We noticed a recent attempt to login to your 🔐Auth account. If this was you, please enter the following code to complete the login process.
                  </Heading>

                  <Hr className="font-semibold" />

                  <Text className="text-xl mt-3">
                    This is your 2FA code: 
                    <br />
                    <span className="text-2xl mt-2 font-bold tracking-wider">{token}</span>
                  </Text>

                  <Text style={paragraph}>
                    If this was not you, you can ignore this email.
                  </Text>
                </Column>
              </Row>
            </Section>

            <Section style={containerImageFooter}>
              <Img
                width={620}
                src={`https://korabi-ecommerce-admin.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdncmjp41z%2Fimage%2Fupload%2Fv1704195824%2Fpcgb9zsaecqlryiuwifi.png&w=1920&q=75`}
              />
            </Section>

            <Text
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "rgb(0,0,0, 0.7)",
              }}
            >
              © 2024 | 🔐 Auth
            </Text>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default TwoFactorEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px 40px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
