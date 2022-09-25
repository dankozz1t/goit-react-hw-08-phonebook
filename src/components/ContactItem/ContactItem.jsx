import React from 'react';
import PropTypes from 'prop-types';

import { useDeleteContactMutation } from '../../redux/contactsAPI';

import { toast } from 'react-toastify';
import Loader from 'components/Loader';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import s from './ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting, isError }] =
    useDeleteContactMutation();

  const handleDeleteClick = () => {
    deleteContact(id);

    toast.info(`"${name}" removed from your contacts`);
  };

  if (isError) {
    toast.info(`Error`);
    return <h2 className="formLabel errorSize">ERROR</h2>;
  }

  return (
    <ListGroup.Item
      style={{
        borderRadius: '5px',
      }}
    >
      <Row className={s.row}>
        <Col className={s.colName}>
          <span className={s.name}> {name} </span>
        </Col>
        <Col className={s.colPhone}>
          <span className={s.phone}> {phone} </span>
        </Col>
        <Col className={s.colButton}>
          <Button
            type="button"
            onClick={handleDeleteClick}
            disabled={isDeleting}
            variant="primary"
          >
            {isDeleting ? (
              <Loader width="45" height="10" color="#fff" />
            ) : (
              <span>Delete</span>
            )}
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
