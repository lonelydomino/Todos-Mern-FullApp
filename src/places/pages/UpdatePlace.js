import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import Button from "../../shared/components/FormElements/Button";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "A famous sky scraper",
    imageUrl:
      "https://th.bing.com/th/id/OIP.kn4Nzx5yP-HT5kq-12WGUgHaLG?pid=ImgDet&rs=1",
    address: "20 W 34th st, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u12",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "A famous sky scraper",
    imageUrl:
      "https://th.bing.com/th/id/OIP.kn4Nzx5yP-HT5kq-12WGUgHaLG?pid=ImgDet&rs=1",
    address: "20 W 34th st, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div>
        <h2>Could not find place</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="description"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a description (min. 5 characters)"
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type='submit' disabled={true}>UPDATE PLACE</Button>
    </form>
  );
};

export default UpdatePlace;
