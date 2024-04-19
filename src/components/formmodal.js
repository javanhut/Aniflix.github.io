"use client";
import { Modal, ModalBody, ModalContent, ModalHeader, Button, useDisclosure, Checkbox, Input, ModalFooter, Link } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { Fragment, useCallback, useState } from "react";
import { useRouter } from "next/navigation";

function FormModal({ form_info, modal_name }) {
    const router = useRouter();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const login = useCallback(async () => {
        try {
          const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
            callbackUrl: '/'
          });
      
          if (result.ok) {
            // Authentication successful, refresh the current page
            router.push('/home');
          } else {
            // Authentication failed, handle the error
            console.log('Authentication failed');
          }
        } catch (error) {
          console.log(error);
        }
      }, [email, password, router]);

    const handleSubmit = useCallback(async () => {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, name, password })
            });

            if (response.ok) {
                console.log("User created successfully");
                login();
            } else {
                console.log("User creation failed");
            }
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    
    return (
        <>
            <Button onPress={onOpen} color="primary">{modal_name}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    <ModalHeader>{modal_name}</ModalHeader>
                    {form_info.map((info, index) => (
                        <Fragment key={index}>
                            <ModalBody>
                                {info.label && (
                                    <Input
                                        autoFocus
                                        endContent={info.endcontent}
                                        label={info.label}
                                        placeholder={info.placeholder}
                                        variant={info.variant}
                                        value={info.label === 'Email' ? email : (info.label === 'Name' ? name : password)}
                                        onChange={(e) => {
                                            if (info.label === 'Email') {
                                                setEmail(e.target.value);
                                            } else if (info.label === 'Name') {
                                                setName(e.target.value);
                                            } else if (info.label === 'Password') {
                                                setPassword(e.target.value);
                                            }
                                        }}
                                    />
                                )}
                                {info.password_label && (
                                    <Input
                                        endContent={info.password_endcontent}
                                        label={info.password_label}
                                        placeholder={info.password_placeholder}
                                        type={info.type}
                                        variant={info.variant}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                )}
                                {info.rp && (
                                    <Input
                                        endContent={info.password_endcontent}
                                        label="Confirm Password"
                                        placeholder="Please re-enter password!"
                                        type={info.type}
                                        variant={info.variant}
                                    />
                                )}
                                {info.rm && (
                                    <div>
                                        <Checkbox className="text-small">Remember Me</Checkbox>
                                    </div>
                                )}
                                {info.fp && (
                                    <Link color="primary" href="#" size="sm">Forgot password?</Link>
                                )}
                            </ModalBody>
                            <ModalFooter>
                                <Button onPress={() => onOpenChange(false)} color="error" variant="flat">{info.close}</Button>
                                <Button color="primary" onPress={info.buttonAction ==="Login" ? login : handleSubmit}>{info.buttonAction}</Button>
                            </ModalFooter>
                        </Fragment>
                    ))}
                </ModalContent>
            </Modal>
        </>
    );
}

export default FormModal;
