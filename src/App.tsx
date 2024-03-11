import { Flex, VStack } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Content, Helmet } from "./components/Index";
import { Footer } from "./components/Footer";
import { Form, FormInput, FormTextarea } from "./components/Forms";
import { formText } from "./data/Index";
import { useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";

export const App = () => {
  const toast = useToast();
  const notifyForm = useRef<HTMLFormElement | null>(null);
  const accessForm = useRef<HTMLFormElement | null>(null);
  const [formToggle, onFormToggle] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    let form = formToggle ? notifyForm : accessForm;

    if (form.current) {
      emailjs
        .sendForm(
          "service_6hyw9wp",
          "template_hwuptll",
          form.current,
          "CkfjlBXlL7vmevlMk"
        )
        .then(
          (result) => {
            console.log(result);
            if (result.text == "OK") {
              setSubmitting(false);
              toast({
                title: "Your details have been sent!.",
                status: "success",
                position: "top",
                duration: 5000,
                isClosable: true,
              });
            }
            form.current?.reset();
          },
          (error) => {
            console.error(error);
            setSubmitting(false);
            toast({
              title: "Something went wrong, please try again",
              status: "error",
              position: "top",
              duration: 5000,
              isClosable: true,
            });
          }
        );
    }
  };

  return (
    <Flex
      p={{ base: "0 15px", md: 0, lg: 0 }}
      h={{ base: "100%", md: "100vh", lg: "100vh" }}
      direction={{ base: "column", md: "row", lg: "row" }}
    >
      <Flex
        w={{ base: "100%", md: "50%", lg: "50%" }}
        direction="column"
        justifyContent="space-between"
      >
        <Helmet name="WORK BUNNY" />
        <VStack
          pl={{ base: 0, md: "15px", lg: "25px" }}
          justifyContent="center"
          spacing={5}
        >
          <Content />
        </VStack>
        <Footer display={{ base: "none", md: "inline", lg: "inline" }} />
      </Flex>
      <VStack
        w={{ base: "100%", md: "50%", lg: "50%" }}
        p={{ md: "0 50px", lg: "0 130px" }}
        justifyContent="center"
      >
        {formToggle ? (
          <Form
            ref={notifyForm}
            title={formText.notify.title}
            desc={formText.notify.desc}
            btn={formText.notify.btn}
            link={formText.notify.link}
            submitting={submitting}
            onSubmit={handleSubmit}
            onClick={() => {
              onFormToggle(!formToggle);
            }}
          >
            <FormInput
              name="email"
              placeholder="Your Email"
              type="email"
              required
            />
          </Form>
        ) : (
          <Form
            ref={accessForm}
            title={formText.collab.title}
            desc={formText.collab.desc}
            btn={formText.collab.btn}
            link={formText.collab.link}
            submitting={submitting}
            onSubmit={handleSubmit}
            onClick={() => {
              onFormToggle(!formToggle);
            }}
          >
            <FormInput
              name="email"
              placeholder="Your Email"
              type="email"
              required
            />
            <FormInput
              name="profile"
              placeholder="Link to your LinkedIn/GitHub/Portfolio"
              type="text"
              required
            />
            <FormTextarea
              name="message"
              placeholder="What would you like us to know?"
              type="textarea"
              rows={5}
              required
            />
          </Form>
        )}
      </VStack>
      <Footer display={{ base: "inline", md: "none", lg: "none" }} />
    </Flex>
  );
};
