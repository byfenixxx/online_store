import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from '../utils/const';

const DeviceItem = ({ device }) => {

  const navigate = useNavigate();

  return (
    <Col md={3} onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: 150, cursor: "pointer", marginTop: 20 }} border="light" >
        <Image width={150} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="text-black-50 d-flex justify-content-between align-items-center">
          <div>
            {device.brand}
          </div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={star} width={15} height={15} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;