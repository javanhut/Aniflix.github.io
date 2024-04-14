"use client";
import { Modal, ModalBody, ModalContent, ModalHeader, Button, useDisclosure,Checkbox, Input, ModalFooter, Link } from "@nextui-org/react";
import { Fragment } from "react";

function FormModal({ form_info, modal_name }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary">{modal_name}</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                    <ModalHeader>{modal_name}</ModalHeader>
                    {form_info.map((info, index) => (
                        <Fragment key={index}>
                            <ModalBody>
                                <Input autoFocus
                                    endContent={info.endcontent}
                                    label={info.label}
                                    placeholder={info.placeholder}
                                    variant={info.variant}
                                />
                                    <Input endContent={info.password_endcontent}
                                    label={info.password_label}
                                    placeholder={info.password_placeholder}
                                    type={info.type}
                                    variant={info.variant}
                                    />
                                    {info.rp && (<Input endContent={info.password_endcontent}
                                    label={info.password_label}
                                    placeholder="Please re-enter password!"
                                    type={info.type}
                                    variant={info.variant}
                                    />)}
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
                                <Button color="primary" onPress={() => console.log('Action button pressed')}>{info.buttonAction}</Button>
                            </ModalFooter>
                        </Fragment>
                    ))}
                </ModalContent>
            </Modal>
        </>
    );
}

export default FormModal;
