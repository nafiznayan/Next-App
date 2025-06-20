import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Tailwind,
  Link,
  Preview,
} from "@react-email/components";
const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://www.google.com/">Google</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
