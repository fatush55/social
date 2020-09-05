// Root
import React from "react"
// Reducer
import { dialogReducer } from "./dialog-reducer"
import { submitMessage,  } from "../thunks/dialog-thunk";


const state = {
    messages: [
        {
            id: 1,
            messages: [
                {
                    id: '1-1',
                    isGust: false,
                    body: 'asdasdasdlas,d',
                    time: '17:59',
                    check: true,
                },
                {
                    id: '1-2',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnksjdnfjksdfs',
                    time: '18:01',
                },
                {
                    id: '1-3',
                    isGust: false,
                    body: 'asdassfsdfsdfsdfdasdlas,d',
                    time: '18:10',
                    check: true,
                },
                {
                    id: '1-4',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfnsdkjfnkasdasdsdasdasdasdasdasdasdasdasdsjdnfjksdfs',
                    time: '18:11',
                },
                {
                    id: '1-5',
                    isGust: false,
                    body: 'asdassfsasdasdasdasdasdasdasddfsdfsdfdasdlas,d',
                    time: '18:13',
                    check: true,
                },
                {
                    id: '1-6',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnkasdasddfgdfgdfgdfgdfgdfgdfgdfgsdasdasdasdasdasdasdasdasdsjdnfjksdfs',
                    time: '18:14',
                },
                {
                    id: '1-7',
                    isGust: false,
                    body: 'asdassfsasdasdasdasdasddfgdfgfdgfgdfgdfgdfgdfgdfgdfgdasdasddfsdfsdfdasdlas,d',
                    time: '18:15',
                    check: true,
                },
                {
                    id: '1-8',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdfsdfdfdsfsdfsdf,dsnfjkdsnfjhdbfghjbdfhjgbdkfkhgbhdfjgbkhjfdbghkbdfhgbdfhjgbnhjdkfgdfgdfg',
                    time: '18:20',
                },
                {
                    id: '1-9',
                    isGust: false,
                    body: 'asdassfsasdasdasdasadasdasdasdasdasdsdfdasdasdasddfsdfsdfdasdlas,d',
                    time: '18:25',
                    check: true,
                },
            ],
        },
        {
            id: 2,
            messages: [
                {
                    id: '2-1',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnksjdnfjksdfs',
                    time: '17:01',
                },
                {
                    id: '2-2',
                    isGust: false,
                    body: 'asdasdasdlas,d',
                    time: '17:59',
                    check: true,
                },
                {
                    id: '2-3',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnkasdasdsdasdasdasdasdasdasdasdasdsjdnfjksdfs',
                    time: '18:11',
                },
                {
                    id: '2-4',
                    isGust: false,
                    body: 'asdassfsdfsdfsdfdasdlas,d',
                    time: '18:18',
                    check: true,
                },
            ],
        },
        {
            id: 3,
            messages: [
                {
                    id: '3-1',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnksjdnfjksdfs',
                    time: '18:01',
                },

            ],
        },
        {
            id: 4,
            messages: [
                {
                    id: '4-1',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnksjdnfjksdfs',
                    time: '16:01',
                },
                {
                    id: '4-2',
                    isGust: false,
                    body: 'asdasdasdlas,d',
                    time: '17:59',
                    check: true,
                },
                {
                    id: '4-3',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnkasdasdsdasdasdasdasdasdasdasdasdsjdnfjksdfs',
                    time: '18:11',
                },
                {
                    id: '4-4',
                    isGust: false,
                    body: 'asdassfsdfsdfsdfdasdlas,d',
                    time: '18:15',
                    check: true,
                },
            ],
        },
        {
            id: 5,
            messages: [
                {
                    id: '5-1',
                    isGust: false,
                    body: 'asdassfsdfsdfsdfdasdlas,d',
                    time: '16:10',
                    check: true,
                },
                {
                    id: '5-2',
                    isGust: false,
                    body: 'asdasdasdlas,d',
                    time: '17:59',
                    check: true,
                },
                {
                    id: '5-3',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnksjdnfjksdfs',
                    time: '18:01',
                },
                {
                    id: '5-4',
                    isGust: true,
                    body: 'aswdwfd;ld,sf;sdmflsdnkfnsdkjfnkasdasdsdasdasdasdasdasdasdasdasdsjdnfjksdfs',
                    time: '18:11',
                },

            ],
        },
    ],
    users: [
        {
            id: 1,
            img: {
                url: 'https://c7.hotpng.com/preview/639/452/966/computer-icons-avatar-user-profile-people-icon.jpg',
                alt: 'avatar'
            },
            name: 'Kosta Zuravel',
            message: 2
        },
        {
            id: 2,
            img: {
                url: 'https://thehearingheroes.com/wp-content/uploads/2019/02/female-avatar-profile-icon-round-african-american-vector-18307298.jpg',
                alt: 'avatar'
            },
            name: 'Oleg Novojilov',
            message: 0
        },
        {
            id: 3,
            img: {
                url: 'https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg',
                alt: 'avatar'
            },
            name: 'Vitalik Tinko',
            message: 1
        },
        {
            id: 4,
            img: {
                url: 'https://c7.hotpng.com/preview/639/452/966/computer-icons-avatar-user-profile-people-icon.jpg',
                alt: 'avatar'
            },
            name: 'Jarik Sheva',
            message: 2
        },
        {
            id: 5,
            img: {
                url: 'https://thehearingheroes.com/wp-content/uploads/2019/02/female-avatar-profile-icon-round-african-american-vector-18307298.jpg',
                alt: 'avatar'
            },
            name: 'Dima Vorapai',
            message: 0
        },
        {
            id: 6,
            img: {
                url: 'https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg',
                alt: 'avatar'
            },
            name: 'Misha Almaz',
            message: 1
        },
        {
            id: 7,
            img: {
                url: 'https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg',
                alt: 'avatar'
            },
            name: 'Edic babayn',
            message: 5
        },
        {
            id: 8,
            img: {
                url: 'https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg',
                alt: 'avatar'
            },
            name: 'Zana Rezancev',
            message: 5
        },
        {
            id: 9,
            img: {
                url: 'https://cdn5.vectorstock.com/i/1000x1000/72/74/female-avatar-profile-icon-round-woman-face-vector-18307274.jpg',
                alt: 'avatar'
            },
            name: 'Misha maksimenco',
            message: 5
        },
    ],
}

// it('Submit message for id user array length messages of id users should increment', function () {
//     const action = submitMessage(1, 'test-massage')
//     const newState = dialogReducer(state, action)
//     expect(newState.messages[0].messages.length).toBe(10)
// });

// it('Delete message for id user array length messages of id users should decrement', function () {
//     const action = deleteMessage(1, '1-1')
//     const newState = dialogReducer(state, action)
//     expect(newState.messages[0].messages.length).toBe(8)
// });