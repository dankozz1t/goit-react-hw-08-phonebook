import React from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filter/filterSlice';
import { getFilter } from '../../redux/contacts/filter/selectors';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getLanguage } from 'redux/language/selectors';

const Filter = () => {
  const lang = useSelector(getLanguage, shallowEqual);
  const filter = useSelector(getFilter, shallowEqual);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Form className="marginBottom">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm="auto" className="formLabel">
          {lang.main_labelInputFilter}
        </Form.Label>
        <Col sm>
          <Form.Control
            type="text"
            placeholder={lang.main_placeholderInputFilter}
            onChange={handleFilterChange}
            value={filter}
            name="filter"
            title={lang.main_titleInputFilter}
          />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default Filter;
