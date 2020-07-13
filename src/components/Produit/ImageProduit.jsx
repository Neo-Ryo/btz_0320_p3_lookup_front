import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
} from 'reactstrap';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import PropTypes from 'prop-types';
import ImageSmall from './img/support-300w.png';
import style from './ImageProduit.module.css';

function ImageProduit({ buttonLabel, picture, description, name }) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { register } = useForm();

  const [clients, setClients] = useState({});

  const postClient = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/clients`,
        clients
      );
      setLoading(true);
      // notifySuccess();
      console.log('ok');
    } catch (err) {
      // notifyError();
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const toggle = () => setModal(!modal);

  const reduction = '20%';
  return (
    <Container>
      <img src={picture} alt={name} width="50%" />
      <div>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle} className="modal-lg">
          <Form onSubmit={postClient}>
            <ModalHeader toggle={toggle}>DEVIS</ModalHeader>

            <ModalBody>
              <div>
                <img
                  className={style.imgModal}
                  src={ImageSmall}
                  alt="une description"
                />
                <p>{description}</p>
              </div>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Nombres d&apos;articles:</InputGroupText>
                  <Input
                    placeholder="Amount"
                    min={0}
                    max={100}
                    type="number"
                    step="1"
                  />
                </InputGroupAddon>
              </InputGroup>
              <p>Réduction: {reduction}</p>

              <FormGroup>
                <Label for="companyName">Entreprise</Label>
                <Input
                  type="text"
                  name="companyName"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      companyName: e.target.value,
                    })
                  }
                  placeholder="Entreprise"
                />
              </FormGroup>
              <FormGroup>
                <Label for="siret">Numéro Siret</Label>
                <Input
                  type="text"
                  name="siret"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      siret: e.target.value,
                    })
                  }
                  placeholder="Numéro Siret"
                />
              </FormGroup>
              <FormGroup>
                <Label for="streetNumber">Numero de rue</Label>
                <Input
                  type="number"
                  name="streetNumber"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      streetNumber: e.target.value,
                    })
                  }
                  placeholder="Numero de rue"
                />
              </FormGroup>
              <FormGroup>
                <Label for="streetName">Nom de rue</Label>
                <Input
                  type="text"
                  name="streetName"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      streetName: e.target.value,
                    })
                  }
                  placeholder="Nom de rue"
                />
              </FormGroup>
              <FormGroup>
                <Label for="postalCode">Code Postal</Label>
                <Input
                  type="number"
                  name="postalCode"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      postalCode: e.target.value,
                    })
                  }
                  placeholder="Code Postal"
                />
              </FormGroup>
              <FormGroup>
                <Label for="city">Ville</Label>
                <Input
                  type="text"
                  name="city"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      city: e.target.value,
                    })
                  }
                  placeholder="Ville"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      email: e.target.value,
                    })
                  }
                  placeholder="Email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">Téléphone</Label>
                <Input
                  type="tel"
                  name="phone"
                  ref={register({ required: true })}
                  onChange={(e) =>
                    setClients({
                      ...clients,
                      phone: e.target.value,
                    })
                  }
                  placeholder="06 XX XX XX XX"
                />
              </FormGroup>

              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message"
                />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button block color="success" type="submit" onClick={toggle}>
                Validez votre devis
              </Button>
              <Button block color="danger" onClick={toggle}>
                Annuler
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    </Container>
  );
}

ImageProduit.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ImageProduit;
