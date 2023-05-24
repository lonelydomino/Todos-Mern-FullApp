import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [{id: '111', name: 'bob', image: 'https://th.bing.com/th/id/R.e55ed8dfdd5a0b1b8a390f227d216272?rik=wsJAJ48vHuu1IA&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f11600000%2fthe-thing-marvel-comics-11698347-1536-1763.jpg&ehk=0VdK5Y%2fdKUHlE2js656%2fey8JYze8XKABuBl9%2bhKEa0M%3d&risl=&pid=ImgRaw&r=0', places: 3}]

    return <UsersList items={USERS}/>
}

export default Users