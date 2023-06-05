import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Empire State Building',
      description: 'A famous sky scraper',
      imageUrl:
        'https://th.bing.com/th/id/OIP.kn4Nzx5yP-HT5kq-12WGUgHaLG?pid=ImgDet&rs=1',
      address: '20 W 34th st, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: 'u12',
    },
    {
      id: 'p2',
      title: 'Empire State Building',
      description: 'A famous sky scraper',
      imageUrl:
        'https://th.bing.com/th/id/OIP.kn4Nzx5yP-HT5kq-12WGUgHaLG?pid=ImgDet&rs=1',
      address: '20 W 34th st, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584,
      },
      creator: 'u1',
    },
  ]
  const userId = useParams().userId
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList items={loadedPlaces} />
}
export default UserPlaces
